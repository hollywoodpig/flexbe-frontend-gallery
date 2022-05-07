export default async function useFetch(url) {
	const res = await fetch(url)
	return await res.json()
}
