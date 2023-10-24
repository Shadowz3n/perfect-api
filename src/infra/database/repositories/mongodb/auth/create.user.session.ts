import { ICreateUserSessionRepository } from "@/data/protocols/repositories/auth/icreate.session.repository";
import { MongoDBClient } from "@/infra/database/repositories/mongodb/mongo.db.client";

export class CreateUserSessionMongoDB implements ICreateUserSessionRepository {
	constructor() {}

	async handle(data: { userId: string }): Promise<{
		sessionId: string;
		activePeriodExpiresAt: Date;
		idlePeriodExpiresAt: Date;
		state: string;
		fresh: boolean;
		user: {
			userId: string;
		};
	}> {
		const client = MongoDBClient.getLucia();
		return await client.createSession({
			userId: data.userId,
			attributes: {},
		});
	}
}
