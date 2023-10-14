export interface IEncrypter {
	hash(data: { rawText: string }): Promise<string>;
	verify(data: { rawText: string; hash: string }): Promise<boolean>;
}
