export type THttpResponse<T = any> = {
	statusCode: number;
	body: T;
};
