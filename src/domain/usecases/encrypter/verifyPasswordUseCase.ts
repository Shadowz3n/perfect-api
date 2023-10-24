import { IUseCase } from "@/domain/protocols/iusecase";
import { Bcrypt } from "@/infra/cryptography/bcrypt";

export class VerifyPasswordUseCase implements IUseCase {
	async handle(data: { rawPassword: string; hashedPassword: string }): Promise<boolean> {
		return await Bcrypt.verify({ rawText: data.rawPassword, hash: data.hashedPassword });
	}
}
