import { Controller, Get, Param } from '@nestjs/common'
import { StatisticsService } from './statistics.service'
import { Auth } from 'src/auth/decorators/auth.decorator'

@Controller('statistics')
export class StatisticsController {
	constructor(private readonly statisticsService: StatisticsService) {}

	@Auth()
	@Get('main/:storeId/:currency')
	async getMainStatistics(
		@Param('storeId') storeId: string,
		@Param('currency') currency: string
	) {
		return this.statisticsService.getMainStatistics(storeId, currency)
	}

	@Auth()
	@Get('middle/:storeId/:currency')
	async getMiddleStatistics(
		@Param('storeId') storeId: string,
		@Param('currency') currency: string
	) {
		return this.statisticsService.getMiddleStatistics(storeId, currency)
	}
}
