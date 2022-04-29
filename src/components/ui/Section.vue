<script setup>
defineProps({
	title: String,
	main: Boolean,
	text: String
})
</script>

<template>
	<section class="section">
		<div class="section__heading">
			<h1 v-if="main" class="section__title">{{ title }}</h1>
			<h2 v-else class="section__title">{{ title }}</h2>
			<p class="section__text">{{ text }}</p>
		</div>
		<div class="section__content"><slot /></div>
	</section>
</template>

<style>
.section {
	margin-top: 10rem;
}

.section__heading {
	margin-bottom: 10rem;
}

.section__text {
	margin-top: 2rem;
	font-weight: 300;
}
</style>
