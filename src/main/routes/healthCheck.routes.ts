import { HealthcheckControllerFactory } from "@/main/factories/controllers/healthcheck/HealthcheckControllerFactory";
import { HealthCheckDto } from "@/presentation/controllers/healthcheck/HealthCheck/HealthCheckDto";
import { routerAdapter } from "@/main/adapters/router.adapter";
import { Elysia } from "elysia";

export const healthCheckRoutes = new Elysia({ prefix: "/healthcheck/v1" }).get(
	"/",
	routerAdapter(HealthcheckControllerFactory()),
	HealthCheckDto,
);
