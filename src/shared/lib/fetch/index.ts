import type { Pageable } from '../../dtos/inputs/pageable';
import type { SuccessResponseDTO } from '../../dtos/outputs/success-response.dto';

export class FetchError {
  statusCode: number;
  errors: string[];

  constructor({ statusCode, errors }: Readonly<FetchError>) {
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export class Fetch {
  private baseUrl: string;
  private resource: string;
  private accessToken: string;

  constructor(resource: string) {
    this.resource = resource;
    this.accessToken = '';
    this.baseUrl = '';
    this.getBaseUrlJson().then((data) => {
      this.baseUrl = data;
    });
  }

  setAccessToken(accessToken: string) {
    if (accessToken !== '') {
      this.accessToken = accessToken;
    }
  }

  private async getBaseUrlJson() {
    const origin = document.location.origin;
    const path = origin.includes('localhost')
      ? `${origin}/_/url.json`
      : `${origin}/atribui/_/url.json`;
    const response = await fetch(path, {});
    const data = await response.json();

    return data.urlBase;
  }

  private handleStatus = async (response: Response) => {
    if (Math.floor(response.status / 100) !== 2) {
      if (response.status === 404) {
        alert('Endereço do servidor não encontrado.');
      }
      if (response.status === 401) {
        throw new FetchError({ statusCode: 401, errors: [] });
      }
      throw new FetchError(await response.json());
    }
  };

  private buildFilters<T>(filters: Pageable<T>) {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== 'all' && value !== '' && value !== undefined && !key.startsWith('change')) {
        params.append(key, value as string);
      }
    });

    return params;
  }

  private buildHeaders<T = { [s: string]: string }>(orderBy?: T) {
    const headers = new Headers({
      authorization: `Bearer ${this.accessToken}`,
      'content-type': 'application/json',
    });
    if (!orderBy) {
      return headers;
    }
    Object.entries(orderBy).forEach(([key, value]) => {
      if (value !== '' && value !== undefined && !key.startsWith('change')) {
        key = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2');
        key = key[0].toUpperCase() + key.substring(1);
        headers.append(`X-Order-By-${key}`, value as string);
      }
    });

    return headers;
  }

  async get<T = object, Y = object | undefined, O = object | undefined>({
    action,
    id,
    filters,
    orderBy,
  }: {
    action?: string;
    id?: string;
    filters?: Y;
    orderBy?: O;
  }): Promise<SuccessResponseDTO<T>> {
    if (this.baseUrl === '') {
      this.baseUrl = await this.getBaseUrlJson();
    }
    let url: string = `${this.baseUrl}${this.resource}`;

    if (action) {
      url = `${url}/${action}`;
    }
    if (id) {
      url = `${url}/${id}`;
    }
    if (filters) {
      const params = this.buildFilters<Y>(filters);
      url = `${url}/?${params}`;
    }

    const headers = this.buildHeaders<O>(orderBy);

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    await this.handleStatus(response);

    const body: SuccessResponseDTO<T> = response.status === 204 ? {} : await response.json();

    return body;
  }

  async post<T = object, Y = object>(
    createDTO: Y,
    action?: string,
  ): Promise<SuccessResponseDTO<T>> {
    const url = action
      ? `${this.baseUrl}${this.resource}/${action}`
      : `${this.baseUrl}${this.resource}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${this.accessToken}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(createDTO),
    });

    await this.handleStatus(response);

    const body: SuccessResponseDTO<T> = await response.json();

    return body;
  }

  async put<T = object>(id: string, updateDTO: T): Promise<void> {
    const response = await fetch(`${this.baseUrl}${this.resource}/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${this.accessToken}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(updateDTO),
    });

    await this.handleStatus(response);
  }

  async patch<T = object>(id: string, updatePartialDTO: T): Promise<void> {
    const response = await fetch(`${this.baseUrl}${this.resource}/${id}`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${this.accessToken}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatePartialDTO),
    });

    await this.handleStatus(response);
  }

  async delete<T = object | undefined>(id: string, deleteDTO?: T): Promise<void> {
    const response = await fetch(`${this.baseUrl}${this.resource}/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${this.accessToken}`,
        'content-type': 'application/json',
      },
      body: deleteDTO ? JSON.stringify(deleteDTO) : undefined,
    });

    await this.handleStatus(response);
  }

  handleError(error: FetchError | unknown) {
    if (error instanceof FetchError) {
      alert(error.errors.join('\n'));
    } else {
      console.error(error);
    }
  }
}
