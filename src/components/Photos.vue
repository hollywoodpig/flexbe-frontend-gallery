<script setup>
import { defineProps } from 'vue'

defineProps({
	photos: Array
})
</script>

<template>
	<div class="tiles">
		<div
			class="tile"
			v-for="(photo, index) in photos"
			:key="index"
			:style="{
				background: photo.color,
				aspectRatio: `${photo.width} / ${photo.height}`
			}"
		>
			<img
				:src="photo.urls.small"
				:alt="photo.alt_description"
				@load="photo.show = true"
				:class="[
					'tile__img',
					{ 'tile__img_show': photo.show }
				]"
			/>
		</div>
	</div>
</template>

<style>
.tiles {
	column-count: 3;
	column-gap: var(--gap);
}

.tiles .tile {
	margin-bottom: var(--gap);
}

.tile {
	overflow: hidden;
	border-radius: var(--bdrs);
	border: 1px solid var(--border-color);
}

.tile__img {
	width: 100%;
	height: 100%;
	transition: opacity var(--trs);
	opacity: 0;
}

.tile__img_show {
	opacity: 1;
}

@media (max-width: 768px) {
	.tiles {
		column-count: 1;
	}
}
</style>
