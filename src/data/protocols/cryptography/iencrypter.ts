export interface IEncrypter {
	hash(data: { rawText: string }): Promise<string>;
}
