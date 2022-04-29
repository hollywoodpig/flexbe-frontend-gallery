import { onMounted, ref } from 'vue'

export default function useObserver({ lastItem, error }, callback) {
	const observer = ref(null)

	onMounted(() => {
		if (error.value) return
		if (observer.value) observer.value.disconnect()

		observer.value = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) callback()
		})
		observer.value.observe(lastItem.value)
	})
}
