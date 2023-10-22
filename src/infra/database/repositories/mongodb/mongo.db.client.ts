import { envConfig } from "@/infra/config/env.config";
import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { Auth, lucia } from "lucia";

export class MongoDBClient {
	private static instance: PrismaClient | null = null;
	private static lucia: Auth | null = null;

	static getLucia(): Auth {
		const dbClient = MongoDBClient.getInstance();
		this.lucia = lucia({
			adapter: prisma(dbClient, {
				user: "user",
				key: "key",
				session: "session",
			}),
			env: envConfig.env === "production" ? "PROD" : "DEV",
		});
		return this.lucia;
	}

	static getInstance(): PrismaClient {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new PrismaClient({
			datasources: {
				db: {
					url: envConfig.mongoDbUrl,
				},
			},
		});
		return this.instance;
	}
}
