import { GetMeController } from "@/presentation/controllers/user/GetMe/GetMeController";

export const GetMeControllerFactory = () => {
	return new GetMeController();
};
