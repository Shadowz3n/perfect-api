import { LogTypeEnum } from "@/domain/log/log.type.enum";

export interface ICreateLogRepository {
	handle(data: { type: LogTypeEnum; userId: string; ip: string; message: string }): Promise<string>;
}
