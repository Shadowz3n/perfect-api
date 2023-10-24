import { TUser } from "@/domain/models/user/TUser";

export interface IGetUserByEmailRepository {
	handle(data: { email: string }): Promise<TUser | null>;
}
