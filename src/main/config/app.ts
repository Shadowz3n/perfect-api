import { authRoutes } from "@/main/routes/auth.routes";
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
	.listen(5000, ({ hostname, port }: { hostname: string; port: number }) => {
		console.log(`Running at http://${hostname}:${port}`);
	});

export { App };

export type TApp = typeof App;
