import { SignUpByEmailAndPasswordController } from "@/presentation/controllers/auth/SignUpByEmailAndPassword/SignUpByEmailAndPasswordController";
import { IController } from "@/presentation/protocols/icontroller";

export const SignUpByEmailAndPasswordControllerFactory = (): IController => {
	return new SignUpByEmailAndPasswordController();
};
