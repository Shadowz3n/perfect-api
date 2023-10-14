import { THttpRequest } from "@/presentation/protocols/thttp.request";
import { t } from "elysia";

export const CreatePageDto = {
	detail: {
		tags: ["Page"],
		summary: "Create a new Page",
	},
	body: t.Object({
		title: t.String(),
		password: t.String(),
		rememberMe: t.Boolean(),
	}),
	response: {
		200: t.Object({
			accessToken: t.String(),
		}),
	},
};

export interface ICreatePageDto extends THttpRequest {
	body: typeof CreatePageDto.body.static;
	env: Record<string, string | null>;
}
