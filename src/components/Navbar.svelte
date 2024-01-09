<script lang="ts">
	import { page } from '$app/stores';
	import { _ } from 'svelte-i18n';

	let scrollY: number;
	let innerWidth = 9999;
	let isRootRoute = false;

	if ($page.url.pathname === '/') {
		isRootRoute = true;
	}
</script>

<nav
	class={`fade-in fixed top-0 flex flex-row justify-center items-center w-full px-8 md:px-32 h-20 py-1 text-white z-50 ${
		isRootRoute && (scrollY === undefined || scrollY < 100)
			? 'bg-transparent'
			: 'bg-slate-800 shadow-md'
	}`}
>
	<div id="routes" class="font-lato font-bold text-md sm:text-lg md:text-xl">
		{#if innerWidth > 400}
			<a href="./#hero" class="mr-6 md:mr-20 lg:mr-24">{$_('navbar.hero')}</a>
		{/if}
		<a href="./#about" class="mr-6 md:mr-20 lg:mr-24">{$_('navbar.about')}</a>
		<a href="./#experience" class="mr-6 md:mr-20">{$_('navbar.experience')}</a>
		<a href="./#contact">{$_('navbar.contact')}</a>
	</div>
</nav>

<svelte:window bind:scrollY bind:innerWidth />

<style lang="scss">
	.fade-in {
		transition:
			background-color 0.5s ease,
			color 0.5s ease;
	}
</style>
