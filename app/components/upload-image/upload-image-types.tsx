type UploadImageTypesProps = {
  types: string[];
};

export function UploadImageTypes({ types }: UploadImageTypesProps) {
  return <span className="text-start text-sm text-zinc-600 col-span-1">Formatos permitidos: {types.join(', ').toUpperCase()}</span>;
}