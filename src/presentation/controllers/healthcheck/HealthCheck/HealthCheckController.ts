import { THttpResponse } from "@/presentation/protocols/thttp.response";
import { IController } from "@/presentation/protocols/icontroller";
import { ok } from "@/presentation/helpers/http.helper";

export class HealthcheckController implements IController {
	async handle(): Promise<THttpResponse> {
		return ok({ isHealthy: true });
	}
}
