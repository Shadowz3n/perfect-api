import { LogTypeEnum } from "@/domain/models/log/LogTypeEnum";

export type TLog = {
	id: string;
	type: LogTypeEnum;
	ip: string;
	message: string;
	createdAt: Date;
};
