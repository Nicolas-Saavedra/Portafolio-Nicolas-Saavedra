<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<picture>
	<source srcset="/tea-background.avif" />
	<source srcset="/tea-background.webp" />
	<img
		src="/tea-background.jpg"
		alt="Hero Background"
		class="h-screen w-screen filter blur-sm blur-fix brightness-50 absolute -z-10 overflow-hidden"
	/>
</picture>

<hr class="h-2 w-0" />
<div class="relative w-screen h-screen flex flex-col justify-center items-center z-40">
	<picture>
		<source srcset="/avatar-300x300.avif" />
		<source srcset="/avatar-300x300.webp" />
		<img
			src="/avatar-300x300.png"
			class="w-[250px] md:w-[300px] h-[250px] md:h-[300px] rounded-full border-4 border-white"
			alt="Nicolas Saavedra's Profile"
		/>
	</picture>

	<hr class="w-64 md:w-96 my-8 h-[2px] bg-white" />
	<h1 class="text-white text-4xl md:text-6xl text-bold font-lato mb-6">Nicolas Saavedra</h1>
	<h2 class="text-white text-xl w-3/5 md:w-2/5 text-center">
		{$_('hero.subtitle')}
	</h2>
</div>

<style lang="scss">
	.blur-fix {
		overflow: hidden;
		transform: scale(1.02);
	}
</style>
