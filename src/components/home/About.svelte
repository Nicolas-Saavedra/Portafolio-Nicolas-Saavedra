<script lang="ts">
	import Icon from './about/Icon.svelte';

	const buttonNames = [
		'linux',
		'docker',
		'python',
		'java',
		'typescript',
		'golang',
		'react',
		'svelte',
		'django',
		'flask',
		'firebase',
		'discord'
	];
</script>

<div
	class="w-screen py-36 md:px-20 lg:px-24 xl:px-36 2xl:px-64 bg-soft-white hero-overlap z-30 flex flex-col align-middle justify-center items-center"
>
	<div id="title-container flex flex-col">
		<h1 class="text-6xl font-lato tracking-wider">Perfil Profesional</h1>
		<span class="block h-[5px] w-[2.25rem] bg-slate-800"></span>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 sm:px-16 gap-12 lg:gap-24 mt-24 w-full xl:h-[500px]">
		<div>
			<h2 class="font-lato text-5xl mb-8">Conoce mas de mi</h2>
			<p class="text-lg">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque corrupti eius beatae
				voluptatibus, aspernatur temporibus eligendi asperiores porro error impedit necessitatibus
				reiciendis magni iusto sit laborum recusandae mollitia nesciunt excepturi laudantium aut
				assumenda culpa? Inventore, aliquid quidem architecto magnam voluptate eaque? Sit
				necessitatibus accusantium voluptatibus enim aliquam dolore minus nulla beatae amet omnis
				numquam ipsum debitis cum ducimus voluptates quas blanditiis mollitia voluptatem
				reprehenderit esse alias ipsam, ratione nam natus? Rerum tempore maiores expedita voluptates
				ducimus, et ea delectus?
			</p>
		</div>
		<div>
			<h2 class="font-lato text-5xl mb-8">Herramientas que uso</h2>
			<div class="flex flex-wrap">
				{#each buttonNames as name, i}
					<Icon
						iconUrl={'./' + name + '.svg'}
						content={name.charAt(0).toUpperCase() + name.slice(1)}
						index={i}
					/>
				{/each}
			</div>
		</div>
	</div>
</div>
