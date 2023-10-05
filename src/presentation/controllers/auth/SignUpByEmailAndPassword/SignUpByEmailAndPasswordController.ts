import { ISignUpByEmailAndPasswordDto } from "@/presentation/controllers/auth/SignUpByEmailAndPassword/SignUpByEmailAndPasswordDto";
import { THttpResponse } from "@/presentation/protocols/thttp.response";
import { IController } from "@/presentation/protocols/icontroller";
import { ok } from "@/presentation/helpers/http.helper";

export class SignUpByEmailAndPasswordController implements IController {
	async handle(data: ISignUpByEmailAndPasswordDto): Promise<THttpResponse> {
		const requestData = {
			email: data.body.email,
			password: data.body.password,
			authenticityToken: data.body.authenticityToken,
			env: data.env,
		};
		return ok({ accessToken: "" });
	}
}
