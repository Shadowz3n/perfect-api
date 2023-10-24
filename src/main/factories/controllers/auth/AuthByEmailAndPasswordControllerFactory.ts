import { AuthByEmailAndPasswordController } from "@/presentation/controllers/auth/AuthByEmailAndPassword/AuthByEmailAndPasswordController";
import { CreateUserSessionMongoDB } from "@/infra/database/repositories/mongodb/auth/create.user.session";
import { GetUserByEmailMongoDB } from "@/infra/database/repositories/mongodb/user/get.user.by.email";
import { IController } from "@/presentation/protocols/icontroller";

export const AuthByEmailAndPasswordControllerFactory = (): IController => {
	const getUserByEmail = new GetUserByEmailMongoDB();
	const createUserSession = new CreateUserSessionMongoDB();
	return new AuthByEmailAndPasswordController(getUserByEmail, createUserSession);
};
