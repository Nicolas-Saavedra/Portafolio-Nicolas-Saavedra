<div class="flex flex-row mt-10">
	<div
		class="w-16 h-16 rounded-full bg-slate-800 flex items-center align-middle justify-center mr-8 animate-float"
	>
		<img src="./github.svg" class="w-10 h-10" alt="Github" />
	</div>
	<div
		class="w-16 h-16 rounded-full bg-slate-800 flex items-center align-middle justify-center mr-8 animate-float"
	>
		<img src="./linkedin.svg" class="w-8 h-8" alt="Linkedin" />
	</div>
	<div
		class="w-16 h-16 rounded-full bg-slate-800 flex items-center align-middle justify-center mr-8 animate-float"
	>
		<img src="./email.svg" class="w-12 h-12" alt="E-mail" />
	</div>
	<div
		class="w-16 h-16 rounded-full bg-slate-800 flex items-center align-middle justify-center animate-float"
	>
		<img src="./whatsapp.svg" class="w-10 h-10" alt="Whatsapp" />
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
