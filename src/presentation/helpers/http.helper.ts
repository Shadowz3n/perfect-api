import { THttpResponse } from "@/presentation/protocols/thttp.response";
import { StatusCodes } from "http-status-codes";

export const badRequest = (error: string | Object): THttpResponse => ({
	statusCode: StatusCodes.BAD_REQUEST,
	body: { error },
});

export const forbidden = (error: string): THttpResponse => ({
	statusCode: StatusCodes.FORBIDDEN,
	body: error,
});

export const pageNotFound = (error?: string): THttpResponse => ({
	statusCode: StatusCodes.NOT_FOUND,
	body: { error },
});

export const unauthorized = (error: string): THttpResponse => ({
	statusCode: StatusCodes.UNAUTHORIZED,
	body: { error },
});

export const serverError = (data: { errorMessage: string; error: unknown }): THttpResponse => {
	data.error && console.log(`error: ${data.error}`);
	return {
		statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
		body: { error: data.errorMessage },
	};
};

export const conflict = (): THttpResponse => ({
	statusCode: StatusCodes.CONFLICT,
	body: null,
});

export const noContent = (): THttpResponse => ({
	statusCode: StatusCodes.NO_CONTENT,
	body: null,
});

export const ok = (data: unknown): THttpResponse => ({
	statusCode: StatusCodes.OK,
	body: data,
});

export const created = (data: any): THttpResponse => ({
	statusCode: StatusCodes.CREATED,
	body: data,
});

export const webSocket = (client: any): THttpResponse => ({
	statusCode: StatusCodes.SWITCHING_PROTOCOLS,
	body: null,
});

export const upgradeRequired = (data: any): THttpResponse => ({
	statusCode: 426,
	body: data,
});
