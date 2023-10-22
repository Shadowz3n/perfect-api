import { IGetMeDto } from "@/presentation/controllers/user/GetMe/GetMeDto";
import { THttpResponse } from "@/presentation/protocols/thttp.response";
import { IController } from "@/presentation/protocols/icontroller";
import { forbidden, ok } from "@/presentation/helpers/http.helper";

export class GetMeController implements IController {
	async handle(data: IGetMeDto): Promise<THttpResponse> {
		if (!data.user) {
			return forbidden(`no.user`);
		}
		return ok(data.user);
	}
}
