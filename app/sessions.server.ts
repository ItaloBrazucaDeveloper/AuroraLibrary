import { createCookieSessionStorage } from 'react-router';

type SessionData = {
	token: string;
	userId: string;
};

type SessionFlashData = {
	error: string;
};

const { getSession, commitSession, destroySession } =
	createCookieSessionStorage<SessionData, SessionFlashData>({
		cookie: {
			name: '__session',
			// all of these are optional
			// domain: "reactrouter.com",
			// expires: new Date(Date.now() + 60_000),
			httpOnly: true,
			maxAge: 120_000,
			path: '/',
			sameSite: 'lax',
			secrets: ['s3cret1'],
			secure: true,
		},
	}
);

export { getSession, commitSession, destroySession };
