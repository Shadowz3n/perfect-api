export interface IDecrypter {
	verify(data: { rawText: string; hash: string }): Promise<boolean>;
}
