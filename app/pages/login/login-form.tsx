import { Button } from "@components/button";
import { DotsLoading } from "@components/dots-loading";

import { Input } from "@components/input";
import { Show } from "@components/show";
import { Form } from "react-router";

export function LoginForm() {
  return (
    <Form
      method="POST"
      className="grid gap-9 min-w-[420px] px-4 py-5"
    >
      <Input.Container>
        <Input.Label htmlFor='user-login'>Email</Input.Label>
        <Input.Control
          required
          name="login"
          type="email"
          id='user-login'
          className="py-2"
          // disabled={isSubmitting}
          placeholder="ex: juliasants@gmail.com"
        />
      </Input.Container>

      <Input.Container>
        <Input.Label htmlFor='user_passwd'>Senha</Input.Label>
        <Input.Control
          required
          id='user_passwd'
          name="password"
          type="password"
          className="py-2"
          // disabled={isSubmitting}
          placeholder="ex: 123@ju.vcx"
        />
      </Input.Container>

      <Button
        type="submit"
        theme="dark"
        // disabled={isSubmitting}
        className="justify-center font-medium h-10 w-full mt-2"
      >
        <Show condition={false} fallback={<>Entrar</>}>
          <DotsLoading />
        </Show>
      </Button>
    </Form>
  );
}