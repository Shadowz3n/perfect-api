export interface ICreateUserSessionRepository {
	handle(data: { userId: string }): Promise<{
		sessionId: string;
		activePeriodExpiresAt: Date;
		idlePeriodExpiresAt: Date;
		state: string;
		fresh: boolean;
		user: {
			userId: string;
		};
	}>;
}
