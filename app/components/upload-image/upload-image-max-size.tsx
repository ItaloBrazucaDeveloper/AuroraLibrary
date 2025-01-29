type UploadImageMaxSizeProps = {
  maxSize: number;
};

export function UploadImageMaxSize({ maxSize }: UploadImageMaxSizeProps) {
  return <span>Tamanho máximo de {maxSize}MB</span>;
}