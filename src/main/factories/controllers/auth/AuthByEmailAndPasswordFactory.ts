import { AuthByEmailAndPassword } from "@/presentation/controllers/auth/AuthByEmailAndPassword/AuthByEmailAndPasswordController";
import { IController } from "@/presentation/protocols/icontroller";

export const AuthByEmailAndPasswordFactory = (): IController => {
	return new AuthByEmailAndPassword();
};
