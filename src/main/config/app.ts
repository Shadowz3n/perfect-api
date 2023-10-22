import { healthCheckRoutes } from "@/main/routes/healthCheck.routes";
import { authRoutes } from "@/main/routes/auth.routes";
import { userRoutes } from "@/main/routes/user.routes";
import { swagger } from "@elysiajs/swagger";
import cors from "@elysiajs/cors";
import { Elysia } from "elysia";

const App = new Elysia({
	aot: false,
})
	.use(
		swagger({
			documentation: {
				info: {
					title: "IMPS - Perfect API",
					version: "0.1.0",
				},
			},
		}),
	)
	.use(cors())
	.use(authRoutes)
	.use(userRoutes)
	.use(healthCheckRoutes);

console.log(`Running at http://0.0.0.0:3000`);

export { App };

export type TApp = typeof App;
