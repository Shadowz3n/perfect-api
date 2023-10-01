import { THttpRequest } from "@/presentation/protocols/thttp.request";
import { IController } from "@/presentation/protocols/icontroller";
import { Context } from "elysia";

export const routerAdapter = (controller: IController) => {
	return async (request: Context): Promise<Response> => {
		const req: THttpRequest = {
			body: request.body,
			cookie: request.cookie,
			headers: request.headers,
			params: request.params,
			path: request.path,
			ip: request.headers["CF-Connecting-IP"] || request.headers["X-Forwarded-For"] || "",
			query: request.query,
			set: request.set,
		};
		const httpResponse = await controller.handle(req);
		if (httpResponse.statusCode) {
			request.set.status = httpResponse.statusCode;
		}
		return httpResponse.body;
	};
};
