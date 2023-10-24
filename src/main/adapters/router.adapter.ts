import { MongoDBClient } from "@/infra/database/repositories/mongodb/mongo.db.client";
import { THttpRequest } from "@/presentation/protocols/thttp.request";
import { IController } from "@/presentation/protocols/icontroller";
import { TUser } from "@/domain/models/user/TUser";
import { Context } from "elysia";

export const routerAdapter = (controller: IController) => {
	return async (request: Context): Promise<Response> => {
		const lucia = MongoDBClient.getLucia();
		const authorizationHeader = request.headers["authorization"];
		const sessionId = lucia.readBearerToken(authorizationHeader);

		let user: TUser | null = null;
		if (sessionId) {
			try {
				const session = await lucia.validateSession(sessionId);
				delete session.user.password;
				delete session.user.userId;
				if (session) {
					user = session.user;
				}
			} catch {}
		}

		const req: THttpRequest = {
			body: request.body,
			cookie: request.cookie,
			headers: request.headers,
			params: request.params,
			path: request.path,
			ip: request.headers["CF-Connecting-IP"] || request.headers["X-Forwarded-For"] || "",
			query: request.query,
			set: request.set,
			user,
		};
		const httpResponse = await controller.handle(req);
		if (httpResponse.statusCode) {
			request.set.status = httpResponse.statusCode;
		}
		return httpResponse.body;
	};
};
