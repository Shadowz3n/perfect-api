import { TUser } from "@/domain/user/TUser";
import { Cookie } from "elysia/dist/cookie";

export type THttpRequest = {
	body: any;
	headers: Record<string, string | null>;
	cookie: Record<string, Cookie<any>>;
	params: never;
	path: string;
	query: Record<string, string | null>;
	user?: TUser | null;
	ip: string;
	set: unknown;
};
