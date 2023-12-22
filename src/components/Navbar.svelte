<script lang="ts">
	import { page } from '$app/stores';

	let scrollY: number;
	let isRootRoute = false;

	if ($page.url.pathname === '/') {
		isRootRoute = true;
	}
</script>

<nav
	class={`fade-in fixed top-0 flex flex-row justify-center items-center w-full px-32 h-20 py-1 text-white z-50 ${
		isRootRoute && (scrollY === undefined || scrollY < 100)
			? 'bg-transparent'
			: 'bg-slate-800 shadow-md'
	}`}
>
	<div id="routes" class="font-lato font-bold text-xl">
		<a href="./#hero" class="mr-12 md:mr-24">Portada</a>
		<a href="./#about" class="mr-12 md:mr-24">Perfil</a>
		<a href="./#experience" class="mr-12 md:mr-24">Proyectos</a>
		<a href="./#contact">Contactame</a>
	</div>
</nav>

<svelte:window bind:scrollY />

<style lang="scss">
	.fade-in {
		transition:
			background-color 0.5s ease,
			color 0.5s ease;
	}
</style>
