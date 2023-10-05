import { SignUpByEmailAndPasswordControllerFactory } from "@/main/factories/controllers/auth/SignUpByEmailAndPasswordControllerFactory";
import { AuthByEmailAndPasswordControllerFactory } from "@/main/factories/controllers/auth/AuthByEmailAndPasswordControllerFactory";
import { SignUpByEmailAndPasswordDto } from "@/presentation/controllers/auth/SignUpByEmailAndPassword/SignUpByEmailAndPasswordDto";
import { AuthByEmailAndPasswordDto } from "@/presentation/controllers/auth/AuthByEmailAndPassword/AuthByEmailAndPasswordDto";
import { routerAdapter } from "@/main/adapters/router.adapter";
import { Elysia } from "elysia";

export const authRoutes = new Elysia({ prefix: "/auth/v1" })
	.post("/email", routerAdapter(AuthByEmailAndPasswordControllerFactory()), AuthByEmailAndPasswordDto)
	.post("/sign-up", routerAdapter(SignUpByEmailAndPasswordControllerFactory()), SignUpByEmailAndPasswordDto);
