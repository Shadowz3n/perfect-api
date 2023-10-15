import { ICreateLogRepository } from "@/data/protocols/repositories/log/icreate.log.repository";
import { MongoDBClient } from "@/infra/database/repositories/mongodb/mongo.db.client";
import { LogTypeEnum } from "@/domain/log/log.type.enum";

export class CreateLogMongoDB implements ICreateLogRepository {
	constructor() {}

	async handle(data: { type: LogTypeEnum; userId: string; ip: string; message: string }): Promise<string> {
		const client = MongoDBClient.getInstance();
		return await client.log
			.create({
				data: {
					type: data.type,
					ip: data.ip,
					userId: data.userId,
					message: data.message,
					createdAt: new Date(),
				},
			})
			.then((result) => result.id);
	}
}
