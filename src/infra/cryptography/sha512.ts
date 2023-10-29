import { IEncrypter } from "@/data/protocols/cryptography/iencrypter";

export const Sha512: IEncrypter = class {
	public static async hash(data: { rawText: string }): Promise<string> {
		const hasher = new Bun.CryptoHasher("sha512-256");
		hasher.update(data.rawText, "utf-8");
		return hasher.digest("hex");
	}
};
