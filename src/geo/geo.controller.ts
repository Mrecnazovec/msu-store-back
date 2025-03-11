import { Controller, Get } from '@nestjs/common'
import { GeoService } from './geo.service'

@Controller('geo')
export class GeoController {
	constructor(private readonly geoService: GeoService) {}

	@Get()
	async getGeo() {
		return await this.geoService.getGeo()
	}
}
