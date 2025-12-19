export class Formatter {
  constructor() {}

  stringLimit(value: string, length: number): string {
    if (value.length > length) {
      return `${value.substring(0, length - 3)}...`;
    }
    return value;
  }

  upper(value: string) {
    return value.toUpperCase();
  }

  number(value: string) {
    return Number(value.replace(/\D/g, ''));
  }

  agency(agency: string) {
    const formattedAgency = agency.replace(/\D/g, '').slice(0, 4);

    return formattedAgency;
  }

  account(account: string) {
    if (!account) {
      return '';
    }

    const formattedAccount = account
      .replace(/\D/g, '')
      .slice(0, 5)
      .split('')
      .map((c, i) => (i > 0 && i < 4 ? '.' + c : c))
      .join('');

    return formattedAccount;
  }

  cpf(cpf: string): string {
    if (!cpf || typeof cpf !== 'string') {
      return '';
    }

    const numbers = cpf.replace(/\D/g, '').slice(0, 11);

    if (numbers.length < 11) {
      return numbers;
    }

    return numbers.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  }

  ip(ip: string): string {
    if (!ip || typeof ip !== 'string') {
      return '';
    }

    const numbers = ip.replace(/\D/g, '').slice(0, 12);

    return numbers.replace(/^(\d{3})(\d{3})(\d{1})(\d{1,3})$/, '$1.$2.$3.$4');
  }

  mac(mac: string): string {
    if (!mac || typeof mac !== 'string') {
      return '';
    }

    const numbers = mac.replace(/\W/g, '').slice(0, 12);

    return numbers.replace(/^(\w{2})(\w{2})(\w{2})(\w{2})(\w{2})(\w{2})$/, '$1:$2:$3:$4:$5:$6');
  }

  unmaskCpf(maskedCpf: string): string {
    if (!maskedCpf || typeof maskedCpf !== 'string') {
      return '';
    }
    return maskedCpf.replace(/\D/g, '');
  }

  cnpj(cnpj: string): string {
    if (!cnpj || typeof cnpj !== 'string') {
      return '';
    }

    const numbers = cnpj.replace(/\D/g, '').slice(0, 14);

    if (numbers.length < 14) {
      return numbers;
    }

    return numbers.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
  }

  unmaskCnpj(maskedCnpj: string): string {
    if (!maskedCnpj || typeof maskedCnpj !== 'string') {
      return '';
    }
    return maskedCnpj.replace(/\D/g, '');
  }

  document(document: string) {
    const onlyNumbers = document.replace(/\D/g, '');

    if (onlyNumbers.length <= 11) {
      return this.cpf(onlyNumbers);
    }

    return this.cnpj(onlyNumbers);
  }

  unmaskDocument(maskedDocument: string) {
    const onlyNumbers = maskedDocument.replace(/\D/g, '');

    if (onlyNumbers.length <= 11) {
      return this.unmaskCpf(maskedDocument);
    }

    return this.unmaskCnpj(maskedDocument);
  }

  unmaskPhoneNumber(maskedPhoneNumber: string) {
    return maskedPhoneNumber.replace(/\D/g, '');
  }

  cep(cep: string) {
    if (!cep || typeof cep !== 'string') {
      return '';
    }

    const numbers = cep.replace(/\D/g, '').slice(0, 8);

    if (numbers.length < 8) {
      return numbers;
    }

    return `${numbers.slice(0, 5)}-${numbers.slice(5)}`;
  }

  unmaskCep(cep: string) {
    if (!cep || typeof cep !== 'string') {
      return '';
    }

    return cep.replace(/\D/g, '').slice(0, 8);
  }

  phoneNumber(phoneNumber: string) {
    if (!phoneNumber) {
      return phoneNumber ?? '';
    }

    const unmaskedPhoneNumber = this.unmaskPhoneNumber(phoneNumber);

    if (unmaskedPhoneNumber.length < 10) {
      return unmaskedPhoneNumber;
    }

    if (unmaskedPhoneNumber.length === 11) {
      const maskedPhoneNumber =
        `(${unmaskedPhoneNumber.slice(0, 2)}) ` +
        `${unmaskedPhoneNumber.slice(2, 7)}-` +
        `${unmaskedPhoneNumber.slice(7, 11)}`;

      return maskedPhoneNumber;
    }

    const maskedPhoneNumber =
      `(${unmaskedPhoneNumber.slice(0, 2)}) ` +
      `${unmaskedPhoneNumber.slice(2, 6)}-` +
      `${unmaskedPhoneNumber.slice(6, 10)}`;

    return maskedPhoneNumber;
  }

  toIntString(value: string): string {
    if (!value) {
      return '';
    }

    const isNegative = value.startsWith('-');
    let formattedValue = value.replace(/[^0-9]/g, '');

    if (formattedValue.length > 1) {
      formattedValue = formattedValue.replace(/^0+/, '') || '0';
    }

    if (isNegative) {
      formattedValue = '-' + formattedValue;
    }

    return formattedValue;
  }

  toFloatString(value: string, precision?: number): string {
    if (!value) {
      return '';
    }

    const isNegative = value.startsWith('-');
    let formattedValue = value.replace(/[^0-9.]/g, '');

    const dotIndex = formattedValue.indexOf('.');

    if (dotIndex !== -1) {
      const beforeDot = formattedValue.slice(0, dotIndex);
      let afterDot = formattedValue.slice(dotIndex + 1).replace(/\./g, '');
      if (precision && precision >= 1) {
        afterDot = afterDot.slice(0, precision);
      }
      formattedValue = beforeDot + '.' + afterDot;
    }

    if (formattedValue.length > 1 && formattedValue.at(1) !== '.') {
      formattedValue = formattedValue.replace(/^0+/, '') || '0';
    }

    if (isNegative) {
      formattedValue = '-' + formattedValue;
    }

    return formattedValue;
  }

  alphanumeric(value: string): string {
    if (!value) {
      return '';
    }

    return value.replace(/[^A-Za-z0-9.]/g, '');
  }

  currency(value: string | number) {
    if (!value) {
      return 'R$ 0,00';
    }

    if (typeof value === 'string') {
      value = Number(value);
    }

    const matchedValues = value
      .toFixed(2)
      .toString()
      .match(/\d+(\.\d+)*/g);

    const numericValue = Number(matchedValues?.[0]);

    const formattedCurrency = numericValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });

    return formattedCurrency;
  }

  // TODO: Ensure that the value returned by formatter.unmaskCurrency is always a valid number
  unmaskCurrency(value: string) {
    const numericValue = Number(value.replace(/\D/g, ''));
    const normalizedValue = numericValue / 100;
    return normalizedValue;
  }

  decimal(value: string | number) {
    if (!value) {
      return '0,000';
    }

    if (typeof value === 'string') {
      value = Number(value);
    }

    const matchedValues = value
      .toFixed(3)
      .toString()
      .match(/\d+(\.\d+)*/g);

    const numericValue = Number(matchedValues?.[0]);

    const formattedCurrency = numericValue.toLocaleString('pt-BR', {
      style: 'decimal',
      currency: 'BRL',
      minimumFractionDigits: 3,
    });

    return formattedCurrency;
  }

  // TODO: Ensure that the value returned by formatter.unmaskCurrency is always a valid number
  unmaskDecimal(value: string) {
    const numericValue = Number(value.replace(/\D/g, ''));
    const normalizedValue = numericValue / 1000;
    return normalizedValue;
  }

  date(value: string | Date) {
    if (!value) {
      return '';
    }

    if (typeof value === 'string') {
      value = new Date(value);
    }
    value.setHours(value.getHours() + 3);
    return value.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  time(value: string | Date) {
    if (!value) {
      return '';
    }

    if (typeof value === 'string') {
      value = new Date(value);
    }
    return value.toLocaleDateString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: 'numeric',
    });
  }

  capitalize(value: string) {
    if (!value || !value.length) {
      return '';
    }

    const words = value.split(' ');
    const wordsLowerCase = words.map((word) => word.toLowerCase());
    const wordsCapitalized = wordsLowerCase.map((word, index) => {
      if (word.length === 1 && index > 0 && index < words.length) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.substring(1, word.length);
    });

    return wordsCapitalized.join(' ');
  }

  percentage(value: string | number) {
    if (!value) {
      return '0,00';
    }

    if (typeof value === 'string') {
      value = Number(value);
    }

    if (!Number.isInteger(value)) {
      return '0,00';
    }

    return (value / 100 / 100)
      .toLocaleString('pt-BR', {
        style: 'percent',
        minimumFractionDigits: 2,
      })
      .slice(0, -1);
  }

  unmaskPercentage(value: string) {
    return Number(value.replace(/\D/g, ''));
  }
}
