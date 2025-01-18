export type ServerResponseType = {
	success?: boolean;
	error?: {
		message: string;
	};
	token?: string;
	data?: any;
};
