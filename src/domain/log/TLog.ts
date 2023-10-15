import { LogTypeEnum } from "@/domain/log/log.type.enum";

export type TLog = {
	id: string;
	type: LogTypeEnum;
	ip: string;
	message: string;
	createdAt: Date;
};
