import { LogTypeEnum } from "@/domain/models/log/LogTypeEnum";

export interface ICreateLogRepository {
	handle(data: { type: LogTypeEnum; userId: string; ip: string; message: string }): Promise<string>;
}
