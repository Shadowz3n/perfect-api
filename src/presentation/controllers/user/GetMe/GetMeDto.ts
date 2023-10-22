import { THttpRequest } from "@/presentation/protocols/thttp.request";
import { t } from "elysia";

export const GetMeDto = {
	detail: {
		tags: ["User"],
		summary: "Get Me",
	},
	response: {
		200: t.Object({
			id: t.String(),
			firstName: t.String(),
			lastName: t.String(),
			email: t.String(),
			picture: t.String(),
		}),
	},
};

export interface IGetMeDto extends THttpRequest {
	env: Record<string, string | null>;
}
