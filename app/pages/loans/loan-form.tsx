import { Form } from "react-router";
import { Datalist } from "@components/data-list";
import { useState } from "react";

export function LoanForm() {
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const [selectedBook, setSelectedBook] = useState<number | null>(null);

  return (
    <Form method="POST" className="flex flex-col gap-5 px-4 min-w-[450px]">
      <Datalist.Container>
        <Datalist.Label htmlFor="client">Procurar cliente</Datalist.Label>
        <Datalist.Search
          id="client"
          placeholder="ex: 123.123.123-23 ou João da Silva"
        />

        <Datalist.Options
          list={["Cliente 1", "Cliente 2", "Cliente 3"]}
          callback={(item, index) => (
            <Datalist.Option
              name="client"
              onClick={() => setSelectedClient(index)}
              selected={selectedClient === index}
              key={index}
            >
              {item}
            </Datalist.Option>
          )}
        />
      </Datalist.Container>

      <Datalist.Container>
        <Datalist.Label htmlFor="book">Procurar livro</Datalist.Label>
        <Datalist.Search id="book" placeholder="ex: Larissa na terra perdida" />

        <Datalist.Options
          list={["Livro 1", "Livro 2", "Livro 3"]}
          callback={(item, index) => (
            <Datalist.Option
              name="book"
              onClick={() => setSelectedBook(index)}
              selected={selectedBook === index}
              key={index}
            >
              {item}
            </Datalist.Option>
          )}
        />
      </Datalist.Container>
    </Form>
  );
}
