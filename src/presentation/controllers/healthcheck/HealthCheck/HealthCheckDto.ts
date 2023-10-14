import { t } from "elysia";

export const HealthCheckDto = {
	detail: {
		tags: ["Healthcheck"],
		summary: "Healthcheck endpoint",
	},
	response: {
		200: t.Object({
			isHealthy: t.Boolean(),
		}),
	},
};
