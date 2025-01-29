import { Input } from "@components/input";
import { UploadImage } from "@components/upload-image";
import { Form } from "react-router";
import { BookSchemaType } from "~validation/books";

export function BookForm({ book }: { book?: BookSchemaType }) {
  return (
    <Form method="post" className="">
      <Input.Container>
        <Input.Label>Título</Input.Label>
        <Input.Control />
      </Input.Container>

      <Input.Container>
        <Input.Label>Autor/a</Input.Label>
        <Input.Control />
      </Input.Container>

      <Input.Container>
        <Input.Label>Editora</Input.Label>
        <Input.Control />
      </Input.Container>

      <Input.Container>
        <Input.Label>Ano</Input.Label>
        <Input.Control />
      </Input.Container>

      <UploadImage.Container>
        <UploadImage.Label>Capa do livro</UploadImage.Label>
        <UploadImage.Control />
        <UploadImage.Types types={['jpg', 'png', 'webp']} />
        <UploadImage.MaxSize maxSize={5} />
      </UploadImage.Container>
    </Form>
  );
}