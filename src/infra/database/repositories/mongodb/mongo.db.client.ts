import { PrismaClient } from "@prisma/client";

export class MongoDBClient {
	private static instance: PrismaClient | null = null;

	static getInstance(): PrismaClient {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new PrismaClient({
			datasources: {
				db: {
					url: process.env.MONGODB_URL,
				},
			},
		});
		return this.instance;
	}
}
