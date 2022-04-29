<script setup>
defineProps({
	show: Boolean
})
</script>

<template>
	<div v-show="show" class="loader space-y" />
</template>

<style>
.loader {
	display: inline-block;
	margin: 0 auto;
	width: 10rem;
	height: 10rem;
	border-radius: 50%;
	border: .5rem solid transparent;
	border-top-color: var(--text-color);
	animation: loader var(--trs) infinite;
}

@keyframes loader {
	to {
		transform: rotate(360deg);
	}
}
</style>
