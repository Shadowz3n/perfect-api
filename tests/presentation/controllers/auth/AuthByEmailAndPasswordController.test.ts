import { AuthByEmailAndPassword } from "@/presentation/controllers/auth/AuthByEmailAndPassword/AuthByEmailAndPasswordController";
import { AuthByEmailAndPasswordDto } from "@/presentation/controllers/auth/AuthByEmailAndPassword/AuthByEmailAndPasswordDto";
import { routerAdapter } from "@/main/adapters/router.adapter";
import { describe, expect, it } from "bun:test";
import { Elysia } from "elysia";

describe("AuthByEmailAndPasswordController Test", () => {
	const sut = () => {
		return new AuthByEmailAndPassword();
	};

	it("return a response", async () => {
		const authByEmailRoute = new Elysia({ prefix: "/auth/v1" }).post(
			"/email",
			routerAdapter(sut()),
			AuthByEmailAndPasswordDto,
		);
		const response = await authByEmailRoute
			.handle(
				new Request("http://localhost/auth/v1/email", {
					method: "POST",
					body: JSON.stringify({
						email: "test@test.com",
						password: "test",
					}),
				}),
			)
			.then((res: Response) => res.json());
		expect(response).toHaveProperty("accessToken");
	});
});
