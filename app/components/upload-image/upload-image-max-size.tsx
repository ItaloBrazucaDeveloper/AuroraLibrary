type UploadImageMaxSizeProps = {
  maxSize: number;
};

export function UploadImageMaxSize({ maxSize }: UploadImageMaxSizeProps) {
  return <span className="text-sm text-zinc-600 col-span-1 text-end">Tamanho máximo de {maxSize}MB</span>;
}