import { THttpResponse } from "@/presentation/protocols/thttp.response";
import { THttpRequest } from "@/presentation/protocols/thttp.request";

export interface IController {
	handle(request: THttpRequest): Promise<THttpResponse>;
}
