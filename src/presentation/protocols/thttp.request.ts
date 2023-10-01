import { TUser } from "@/domain/user/TUser";

export type THttpRequest = {
	body: any;
	cookie: any;
	headers: Record<string, string | null>;
	params: never;
	path: string;
	query: Record<string, string | null>;
	user?: TUser | null;
	ip: string;
	set: unknown;
};
