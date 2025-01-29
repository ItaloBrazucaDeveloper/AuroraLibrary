type UploadImageTypesProps = {
  types: string[];
};

export function UploadImageTypes({ types }: UploadImageTypesProps) {
  return <span>Formatos permitidos: {types.join(', ').toUpperCase()}</span>;
}