import { authRoutes } from "@/main/routes/auth.routes";
import { swagger } from "@elysiajs/swagger";
import cors from "@elysiajs/cors";
import { Elysia } from "elysia";

const App = new Elysia()
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
	.use(authRoutes);

export { App };

export type TApp = typeof App;
