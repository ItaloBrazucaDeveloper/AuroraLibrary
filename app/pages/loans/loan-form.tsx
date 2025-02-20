import { Form } from "react-router";
import { Input } from "@components/input";
import { Datalist } from "@components/data-list";
import { Label } from "@components/label";

export function LoanForm() {
  return (
    <Form method="POST" className="flex flex-col gap-5 px-4">
      <Datalist.Container>
        <Label htmlFor="client">Cliente</Label>
        <Datalist.Search id="client" placeholder="ex: 123.123.123-23 ou João da silva" />

        <Datalist.Options>
          <Datalist.Option>Opção 1</Datalist.Option>
          <Datalist.Option selected>Opção 2</Datalist.Option>
          <Datalist.Option>Opção 3</Datalist.Option>
        </Datalist.Options>
      </Datalist.Container>

      <Datalist.Container>
        <Label htmlFor="book">Livro</Label>
        <Datalist.Search id="book" placeholder="ex: Larissa na terra perdida" />

        <Datalist.Options>
          <Datalist.Option selected>Opção 1</Datalist.Option>
          <Datalist.Option>Opção 2</Datalist.Option>
          <Datalist.Option>Opção 3</Datalist.Option>
        </Datalist.Options>
      </Datalist.Container>
    </Form>
  );
}
