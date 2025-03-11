import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import axios from 'axios'

@Injectable()
export class GeoService {
	async getGeo() {
		try {
			const key = process.env.IP_REGISTRY_SECRET
			const response = await axios.get(
				`https://api.ipregistry.co/?key=${key}`
			)
			return response.data
		} catch (error) {
			throw new HttpException(
				'Ошибка получения геолокации',
				HttpStatus.INTERNAL_SERVER_ERROR
			)
		}
	}
}
