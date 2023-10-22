import { GetMeControllerFactory } from "@/main/factories/controllers/user/GetMeControllerFactory";
import { GetMeDto } from "@/presentation/controllers/user/GetMe/GetMeDto";
import { routerAdapter } from "@/main/adapters/router.adapter";
import { Elysia } from "elysia";

export const userRoutes = new Elysia({ prefix: "/user/v1" }).get(
	"/me",
	routerAdapter(GetMeControllerFactory()),
	GetMeDto,
);
