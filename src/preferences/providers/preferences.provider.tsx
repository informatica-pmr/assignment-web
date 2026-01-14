import { useCallback, useState, type ReactNode } from 'react';
import { PreferencesContext } from '../contexts/preferences.context';
import { Fetch } from '../../shared/lib/fetch';
import type { FindManyPreferencesOutputDTO } from '../dtos/outputs/find-many-preferences.output.dto';
import type { FindOnePreferencesOutputDTO } from '../dtos/outputs/find-one-preferences.output.dto';
import { usePreferencesFilters } from '../contexts/preferences-filters.context';
import type { CreatePreferencesInputDTO } from '../dtos/inputs/create-preferences.input.dto';
import type { CreatePreferencesOutputDTO } from '../dtos/outputs/create-preferences.output.dto';
import type { UpdatePreferencesInputDTO } from '../dtos/inputs/update-preferences.input.dto';
import { usePagination } from '../../shared/contexts/pagination.context';
import type { FindManyPreferencesInputDTO } from '../dtos/inputs/find-many-preferences.input.dto';
import { useNookies } from '../../shared/contexts/nookies.context';

type PreferencesProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch('preferences');

export const PreferencesProvider = ({ children }: PreferencesProviderProps) => {
  const { getAccessTokenOrThrow } = useNookies();
  const { page, size, changePagination } = usePagination();
  const filters = usePreferencesFilters();
  const [preferences, setPreferences] = useState<FindManyPreferencesOutputDTO[]>([]);

  fetch.setAccessToken(getAccessTokenOrThrow());

  const findOnePreference = useCallback(async (id: string) => {
    try {
      const { data } = await fetch.get<FindOnePreferencesOutputDTO | undefined>({
        id,
      });

      return data;
    } catch (err) {
      fetch.handleError(err);
    }
  }, []);
  const findManyPreferences = useCallback(async () => {
    try {
      const { data, pagination } = await fetch.get<
        FindManyPreferencesOutputDTO[],
        FindManyPreferencesInputDTO
      >({
        filters: {
          ...filters,
          page,
          size,
        },
      });

      setPreferences(data ?? []);
      changePagination(pagination);
    } catch (err) {
      fetch.handleError(err);
    }
  }, [filters, page, size, changePagination]);
  const createPreference = useCallback(async (createPreferenceDTO: CreatePreferencesInputDTO) => {
    try {
      await fetch.post<CreatePreferencesOutputDTO, CreatePreferencesInputDTO>(createPreferenceDTO);

      alert('preferência criada com sucesso');

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);
  const updatePreference = useCallback(
    async (id: string, updatePreferenceDTO: UpdatePreferencesInputDTO) => {
      try {
        await fetch.put<UpdatePreferencesInputDTO>(id, updatePreferenceDTO);

        alert('preferência atualizada com sucesso');

        return true;
      } catch (err) {
        fetch.handleError(err);
        return false;
      }
    },
    [],
  );
  const deletePreference = useCallback(async (id: string) => {
    try {
      await fetch.delete(id);

      alert('preferência deletada com sucesso');

      return true;
    } catch (err) {
      fetch.handleError(err);
      return false;
    }
  }, []);
  return (
    <PreferencesContext.Provider
      value={{
        preferences,
        findOnePreference,
        findManyPreferences,
        createPreference,
        updatePreference,
        deletePreference,
      }}>
      {children}
    </PreferencesContext.Provider>
  );
};
