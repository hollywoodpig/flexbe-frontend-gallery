<script setup>
defineProps({
	photos: Array
})
</script>

<template>
	<div class="photos">
		<TransitionGroup name="photos">
			<div
				class="photo"
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
						'photo__img',
						{ 'photo__img_show': photo.show }
					]"
				/>
			</div>
		</TransitionGroup>
	</div>
</template>

<style>
.photos-enter-active,
.photos-leave-active {
	transition: opacity var(--trs), transform var(--cubic-bezier);
}

.photos-enter-from,
.photos-leave-to {
	opacity: 0;
	transform: translateX(10rem);
}

.photos-leave-active {
	position: absolute;
}

.photos {
	column-count: 3;
	-webkit-column-count: 3;
	-moz-column-count: 3;
	column-gap: var(--gap);
}

.photos .photo {
	width: 100%;
	break-inside: avoid-column;
	margin-bottom: var(--gap);
}

.photo {
	overflow: hidden;
	border-radius: var(--bdrs);
	border: 1px solid var(--border-color);
	position: relative;
}

.photo::before {
	content: '';
	padding-top: var(--ratio);
	float: left;
}

.photo::after {
	content: '';
	display: block;
	clear: both;
}

.photo__img {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	transition: opacity var(--trs);
	opacity: 0;
}

.photo__img_show {
	opacity: 1;
}

@media (max-width: 768px) {
	.photos {
		column-count: 1;
	}
}
</style>
