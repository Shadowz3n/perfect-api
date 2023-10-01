import { THttpRequest } from "@/presentation/protocols/thttp.request";
import { t } from "elysia";

export const AuthByEmailAndPasswordDto = {
	detail: {
		tags: ["Auth"],
		summary: "Auth User By Email",
	},
	body: t.Object({
		email: t.String({
			format: "email",
			default: "email@email.com",
		}),
		password: t.String(),
		rememberMe: t.Boolean(),
	}),
	response: {
		200: t.Object({
			accessToken: t.String(),
		}),
	},
};

export interface AuthByLoginAndPasswordDtoType extends THttpRequest {
	body: typeof AuthByEmailAndPasswordDto.body.static;
	env: Record<string, string | null>;
}
