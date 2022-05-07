import useFetch from '../composable/useFetch'

export default class UnsplashService {

	static accessKey = 'l-O-OrMJ5hGtH5gVLw-QX5KM0U2qj7chj9Je41L3yFw'

	static async getAll(limit, page) {
		const data = await useFetch(`https://api.unsplash.com/photos/?client_id=${this.accessKey}&?per_page=${limit}&page=${page}`)
		return data.map(photo => ({...photo, show: false}))
	}
}
