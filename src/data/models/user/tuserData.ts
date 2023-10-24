export type TUserData = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	picture: string;
	isActive: boolean;
	nickname: string;
	role: "admin" | "user";
	createdAt: Date;
	updatedAt?: Date;
};
