export type TUser = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	password?: string;
	picture: string;
	role: string;
	createdAt: Date;
	updatedAt?: Date;
};
