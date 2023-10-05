import { AuthByEmailAndPasswordController } from "@/presentation/controllers/auth/AuthByEmailAndPassword/AuthByEmailAndPasswordController";
import { IController } from "@/presentation/protocols/icontroller";

export const AuthByEmailAndPasswordControllerFactory = (): IController => {
	return new AuthByEmailAndPasswordController();
};
