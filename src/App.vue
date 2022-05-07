<script setup>
import { ref, watch, onMounted, watchEffect } from 'vue'
import UnsplashService from './api/UnsplashService'
import Photos from './components/Photos.vue'
import Loader from './components/ui/Loader.vue'
import Section from './components/ui/Section.vue'
import useObserver from './composable/useObserver'

/* == photos == */

const photos = ref([])
const page = ref(0)
const loading = ref(false)
const error = ref(false)

watch(page, async () => {
	try {
		loading.value = true
		const newPhotos = await UnsplashService.getAll(10, page.value)
		photos.value.push(...newPhotos)
		loading.value = false
	} catch {
		loading.value = false
		error.value = true
	}
})

/* == cache photos == */

const cachedPhotos = ref(
	JSON.parse(localStorage.getItem('photos')) || []
)

onMounted(() => {
	if (!localStorage.getItem('photos')) {
		localStorage.setItem('photos', '[]')
	}
})

watchEffect(() => {
	if (error.value) photos.value = cachedPhotos.value

	if (photos.value.length > cachedPhotos.value.length) {
		localStorage.setItem('photos', JSON.stringify(photos.value))
	}
})

/* == infinite load == */

const lastItem = ref(null)
useObserver({ lastItem, error }, () => page.value++)

</script>
	
<template>
	<main class="container">
		<Section
			main
			title="Заголовок"
			text="Мощный дрон с записью 4K видео, мощной батареей и продвинутым автопилотом."
		>
			<p v-if="error && cachedPhotos.length === 0" class="space-y">
				Похоже, лимит бесплатных фотографий на этот час исчерпан.
				Пожалуйста, вернитесь позже :(
			</p>
			<Photos :photos="photos" />
			<Loader :show="loading && !error" />
			<div ref="lastItem" class="last-item" />
		</Section>
	</main>
</template>
