import { IGetUserByEmailRepository } from "@/data/protocols/repositories/user/iget.user.by.email.repository";
import { ICreateUserSessionRepository } from "@/data/protocols/repositories/auth/icreate.session.repository";
import { VerifyPasswordUseCase } from "@/domain/usecases/encrypter/verifyPasswordUseCase";
import { IUseCase } from "@/domain/protocols/iusecase";

export class AuthUserByEmailAndPasswordUseCase implements IUseCase {
	constructor(
		private readonly getUserByEmailRepository: IGetUserByEmailRepository,
		private readonly createUserSessionRepository: ICreateUserSessionRepository,
	) {}

	async handle(data: { email: string; password: string }): Promise<string> {
		const user = await this.getUserByEmailRepository.handle(data);
		if (!user) {
			return "";
		}

		const verifyPassword = new VerifyPasswordUseCase();
		const isPasswordMatch = await verifyPassword.handle({
			rawPassword: data.password,
			hashedPassword: user.password || "",
		});
		if (!isPasswordMatch) {
			return "";
		}

		const session = await this.createUserSessionRepository.handle({
			userId: user.id,
		});
		return session?.sessionId || "";
	}
}
