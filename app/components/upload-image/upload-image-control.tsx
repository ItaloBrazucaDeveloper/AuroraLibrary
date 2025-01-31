import { CloudUploadIcon } from "lucide-react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type UploadImageControlProps = Omit<ComponentProps<'input'>, 'type'>;

export function UploadImageControl({ className, ...props }: UploadImageControlProps) {
  const styles = twMerge("relative col-span-2 border-dashed border-2 border-zinc-300 rounded-lg min-h-40", className);

  return (
    <div className={styles}>
      <div className="flex flex-col justify-center items-center gap-3 p-3 size-full">
        <CloudUploadIcon />
        <div className="text-center space-y-2">
          <h4 className="font-medium">Clique ou Arraste e Solte Para Carregar uma Imagem</h4>
          <span className="text-zinc-500">Escolha uma imagem</span>
        </div>
      </div>
      <input type="file" className="absolute inset-0 opacity-0 size-full" {...props} />
    </div>
  );
}