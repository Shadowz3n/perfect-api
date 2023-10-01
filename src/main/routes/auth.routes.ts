import { AuthByEmailAndPasswordDto } from "@/presentation/controllers/auth/AuthByEmailAndPassword/AuthByEmailAndPasswordDto";
import { AuthByEmailAndPasswordFactory } from "@/main/factories/controllers/auth/AuthByEmailAndPasswordFactory";
import { routerAdapter } from "@/main/adapters/router.adapter";
import { Elysia } from "elysia";

export const authRoutes = new Elysia({ prefix: "/auth/v1" }).post(
	"/email",
	routerAdapter(AuthByEmailAndPasswordFactory()),
	AuthByEmailAndPasswordDto,
);
