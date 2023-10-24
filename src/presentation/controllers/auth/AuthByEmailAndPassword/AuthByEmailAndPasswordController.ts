import { IAuthByLoginAndPasswordDto } from "@/presentation/controllers/auth/AuthByEmailAndPassword/AuthByEmailAndPasswordDto";
import { IGetUserByEmailRepository } from "@/data/protocols/repositories/user/iget.user.by.email.repository";
import { ICreateUserSessionRepository } from "@/data/protocols/repositories/auth/icreate.session.repository";
import { AuthUserByEmailAndPasswordUseCase } from "@/domain/usecases/auth/auth.user.by.email.and.password";
import { forbidden, ok, serverError } from "@/presentation/helpers/http.helper";
import { THttpResponse } from "@/presentation/protocols/thttp.response";
import { IController } from "@/presentation/protocols/icontroller";

export class AuthByEmailAndPasswordController implements IController {
	constructor(
		private readonly getUserByEmailRepository: IGetUserByEmailRepository,
		private readonly createUserSessionRepository: ICreateUserSessionRepository,
	) {}

	async handle(data: IAuthByLoginAndPasswordDto): Promise<THttpResponse> {
		try {
			const requestData = {
				email: data.body.email,
				password: data.body.password,
				rememberMe: data.body.rememberMe,
			};
			const authUserByEmailAndPassword = new AuthUserByEmailAndPasswordUseCase(
				this.getUserByEmailRepository,
				this.createUserSessionRepository,
			);
			const userByEmail = await authUserByEmailAndPassword.handle(requestData);
			if (!userByEmail) {
				return forbidden(`invalid.email.or.password`);
			}
			return ok({ accessToken: userByEmail });
		} catch (error) {
			return serverError({
				errorMessage: `auth.by.email.and.password.error`,
				error,
			});
		}
	}
}
