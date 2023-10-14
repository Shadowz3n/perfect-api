import { IEncrypter } from "@/data/protocols/cryptography/iencrypter";

export class Bcrypt implements IEncrypter {
	async hash(data: { rawText: string; cost: number }): Promise<string> {
		return await Bun.password.hash(data.rawText, {
			algorithm: "bcrypt",
			cost: data.cost,
		});
	}

	async verify(data: { rawText: string; hash: string }): Promise<boolean> {
		return await Bun.password.verify(data.rawText, data.hash);
	}
}
