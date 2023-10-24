import { IGetUserByEmailRepository } from "@/data/protocols/repositories/user/iget.user.by.email.repository";
import { GetUserByEmailMongoDBAdapter } from "@/main/adapters/models/mongodb/get.user.by.email.adapter";
import { MongoDBClient } from "@/infra/database/repositories/mongodb/mongo.db.client";
import { TUser } from "@/domain/models/user/TUser";

export class GetUserByEmailMongoDB implements IGetUserByEmailRepository {
	constructor() {}

	async handle(data: { email: string }): Promise<TUser | null> {
		const client = MongoDBClient.getInstance();
		return await client.user
			.findUnique({
				where: {
					email: data.email,
				},
			})
			.then((result) => GetUserByEmailMongoDBAdapter.create(result));
	}
}
