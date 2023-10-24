import { TUser } from "@/domain/models/user/TUser";
import { $Enums } from "@prisma/client";

export class GetUserByEmailMongoDBAdapter {
	static create(
		data: {
			id: string;
			firstName: string;
			lastName: string;
			email: string;
			password: string;
			picture: string;
			role: $Enums.UserRole;
			createdAt: Date;
			updatedAt: Date;
		} | null,
	): TUser | null {
		return (
			data && {
				id: data.id,
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				password: data.password,
				picture: data.picture,
				createdAt: data.createdAt,
				role: data.role,
				updatedAt: data.updatedAt,
			}
		);
	}
}
