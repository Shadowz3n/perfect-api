import { IDecrypter } from "@/data/protocols/cryptography/idecrypter";
import { IEncrypter } from "@/data/protocols/cryptography/iencrypter";

export const Bcrypt: IEncrypter & IDecrypter = class {
	public static async hash(data: { rawText: string }): Promise<string> {
		return await Bun.password.hash(data.rawText, {
			algorithm: "argon2id",
		});
	}

	public static async verify(data: { rawText: string; hash: string }): Promise<boolean> {
		return await Bun.password.verify(data.rawText, data.hash);
	}
};
