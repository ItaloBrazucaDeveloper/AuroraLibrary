import { redirect } from "react-router";
import { getSession } from "~app/sessions.server";

export async function sessionValidate(cookieHeader: string) {
  const session = await getSession(cookieHeader);

	if (!session.has('token')) {
    return redirect('/');
  }
}