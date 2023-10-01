import { AuthByLoginAndPasswordDtoType } from "@/presentation/controllers/auth/AuthByEmailAndPassword/AuthByEmailAndPasswordDto";
import { THttpResponse } from "@/presentation/protocols/thttp.response";
import { IController } from "@/presentation/protocols/icontroller";
import { ok } from "@/presentation/helpers/http.helper";

export class AuthByEmailAndPassword implements IController {
	async handle(data: AuthByLoginAndPasswordDtoType): Promise<THttpResponse> {
		const requestData = {
			email: data.body.email,
			password: data.body.password,
			rememberMe: data.body.rememberMe,
			env: data.env,
		};
		return ok({ accessToken: "" });
	}
}
