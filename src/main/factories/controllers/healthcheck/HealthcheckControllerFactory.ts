import { HealthcheckController } from "@/presentation/controllers/healthcheck/HealthCheck/HealthCheckController";

export const HealthcheckControllerFactory = () => {
	return new HealthcheckController();
};
