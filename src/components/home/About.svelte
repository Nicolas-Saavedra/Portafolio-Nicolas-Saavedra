<script lang="ts">
	import Icon from './about/Icon.svelte';
	import { _ } from 'svelte-i18n';

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
	class="w-screen py-36 px-6 md:px-20 lg:px-24 xl:px-36 2xl:px-64 bg-soft-white hero-overlap z-30 flex flex-col align-middle justify-center items-center"
>
	<div id="title-container flex flex-col">
		<h1 class="text-center md:text-left text-6xl font-lato tracking-wider">{$_('about.title')}</h1>
		<span class="hidden sm:block h-[5px] w-[2.25rem] bg-slate-800"></span>
	</div>
	<div
		class="grid grid-cols-1 md:grid-cols-2 sm:px-16 gap-12 lg:gap-24 mt-24 w-full xl:min-h-[500px]"
	>
		<div>
			<h2 class="font-lato text-center sm:text-left text-5xl mb-8">{$_('about.know')}</h2>
			<p class="text-lg">
				{@html $_('about.summary1') + $_('about.summary2')}
			</p>
		</div>
		<div>
			<h2 class="text-center sm:text-left font-lato text-5xl mb-8">{$_('about.tools')}</h2>
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
