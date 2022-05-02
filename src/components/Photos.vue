<script setup>
defineProps({
	photos: Array
})
</script>

<template>
	<div class="tiles">
		<TransitionGroup name="tiles">
			<div
				class="tile"
				v-for="(photo, index) in photos"
				:key="index"
				:style="{
					background: photo.color,
					'--ratio': (photo.height / photo.width) * 100 + '%'
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
		</TransitionGroup>
	</div>
</template>

<style>
.tiles-enter-active,
.tiles-leave-active {
	transition: opacity var(--trs), transform var(--cubic-bezier);
}

.tiles-enter-from,
.tiles-leave-to {
	opacity: 0;
	transform: translateX(10rem);
}

.tiles-leave-active {
	position: absolute;
}

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
	position: relative;
}

.tile::before {
	content: '';
	padding-top: var(--ratio);
	float: left;
}

.tile::after {
	content: '';
	display: block;
	clear: both;
}

.tile__img {
	position: absolute;
	left: 0;
	top: 0;
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
