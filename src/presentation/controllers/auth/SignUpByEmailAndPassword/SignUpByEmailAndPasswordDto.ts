import { THttpRequest } from "@/presentation/protocols/thttp.request";
import { t } from "elysia";

export const SignUpByEmailAndPasswordDto = {
	detail: {
		tags: ["Auth"],
		summary: "Sign Up User By Email and password",
	},
	body: t.Object({
		email: t.String({
			format: "email",
			default: "email@email.com",
		}),
		password: t.String(),
		authenticityToken: t.String(),
	}),
	response: {
		200: t.Object({
			accessToken: t.String(),
		}),
	},
};

export interface ISignUpByEmailAndPasswordDto extends THttpRequest {
	body: typeof SignUpByEmailAndPasswordDto.body.static;
	env: Record<string, string | null>;
}
