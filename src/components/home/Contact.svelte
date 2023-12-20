<div
	class="w-screen py-36 md:px-28 lg:px-64 bg-soft-white flex flex-col align-middle justify-center items-center"
>
	<div id="title-container flex flex-col">
		<h1 class="text-6xl font-lato tracking-wider">Contactame</h1>
		<span class="block h-[5px] w-[2.25rem] bg-slate-800"></span>
	</div>
	<div class="flex flex-row mt-36 mb-12">
		<div
			class="w-32 h-32 rounded-full bg-slate-800 flex items-center align-middle justify-center mr-16 animate-float"
		>
			<img src="./github.svg" class="w-20 h-20" alt="Github" />
		</div>
		<div
			class="w-32 h-32 rounded-full bg-slate-800 flex items-center align-middle justify-center mr-16 animate-float"
		>
			<img src="./linkedin.svg" class="w-16 h-16" alt="Linkedin" />
		</div>
		<div
			class="w-32 h-32 rounded-full bg-slate-800 flex items-center align-middle justify-center mr-16 animate-float"
		>
			<img src="./email.svg" class="w-24 h-24" alt="E-mail" />
		</div>
		<div
			class="w-32 h-32 rounded-full bg-slate-800 flex items-center align-middle justify-center animate-float"
		>
			<img src="./whatsapp.svg" class="w-20 h-20" alt="Whatsapp" />
		</div>
	</div>
</div>

<style lang="scss">
	.animate-float {
		transform: translateY(0);
		filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
		transition:
			transform 0.3s ease,
			filter 0.3s ease;
	}

	.animate-float:hover {
		transform: translateY(-0.5rem);
		filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.4));
	}
</style>
