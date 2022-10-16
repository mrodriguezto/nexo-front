import { validations as strings } from '../constants';

type isFileValidReturnType = {
  isValid: boolean;
  messages: string[];
};

const bytesToMegabytes = (size: number) => {
  return `${(size / 1000000).toFixed(2)} MB`;
};

export const isFileValid = (
  file: File,
  fileTypes: string[],
  maxSize: number,
): isFileValidReturnType => {
  const { name, size } = file;
  let messages: string[] = [];

  // Validate extension

  const isTypeValid = fileTypes.some((extension) => name.endsWith(extension));
  if (!isTypeValid) {
    messages.push(strings.files.invalid_type);
  }

  // Validate size

  const isSizeValid = size <= maxSize;
  if (!isSizeValid) {
    messages.push(`${strings.files.invalid_size} ${bytesToMegabytes(maxSize)}`);
  }

  return {
    isValid: isTypeValid && isSizeValid,
    messages,
  };
};
