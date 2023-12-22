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
	class="w-screen py-36 px-6 md:px-20 lg:px-24 xl:px-36 2xl:px-64 bg-soft-white hero-overlap z-30 flex flex-col align-middle justify-center items-center"
>
	<div id="title-container flex flex-col">
		<h1 class="text-center md:text-left text-6xl font-lato tracking-wider">Perfil Profesional</h1>
		<span class="hidden sm:block h-[5px] w-[2.25rem] bg-slate-800"></span>
	</div>
	<div
		class="grid grid-cols-1 md:grid-cols-2 sm:px-16 gap-12 lg:gap-24 mt-24 w-full xl:min-h-[500px]"
	>
		<div>
			<h2 class="font-lato text-center sm:text-left text-5xl mb-8">Conoce mas de mi</h2>
			<p class="text-lg">
				Hola, soy Nicolás Saavedra González, estudiante en Ingeniería de Sistemas y Computación en
				la Universidad de los Andes. Me especializo en el desarrollo full-stack de aplicaciones,
				administración de servidores y en el campo crucial de la ciberseguridad. Mi enfoque está en
				proporcionar soluciones tecnológicas completas, integrando eficiencia, funcionalidad y
				seguridad.<br /><br /> Con habilidades en múltiples aspectos de la tecnología, me dedico a entender
				y satisfacer las necesidades específicas de cada cliente. Mi objetivo es ofrecer servicios que
				no solo resuelvan los desafíos actuales, sino que también anticipen las necesidades futuras.
				Si busca un consultor o desarrollador comprometido con la excelencia, la innovación y la seguridad,
				estaré encantado de colaborar en el éxito de su proyecto.
			</p>
		</div>
		<div>
			<h2 class="text-center sm:text-left font-lato text-5xl mb-8">Herramientas que uso</h2>
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
