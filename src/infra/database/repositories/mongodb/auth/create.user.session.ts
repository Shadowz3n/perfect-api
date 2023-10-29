import { ICreateUserSessionRepository } from "@/data/protocols/repositories/auth/icreate.session.repository";
import { MongoDBClient } from "@/infra/database/repositories/mongodb/mongo.db.client";
import { Sha512 } from "@/infra/cryptography/sha512";

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
		const randomNumber = await Promise.all(
			Array(5)
				.fill("")
				.map(async () => await Sha512.hash({ rawText: Math.random().toString(24) })),
		);
		return await client.createSession({
			sessionId: randomNumber.join(""),
			userId: data.userId,
			attributes: {},
		});
	}
}
