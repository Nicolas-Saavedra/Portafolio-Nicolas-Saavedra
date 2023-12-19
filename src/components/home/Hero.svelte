<div
	class="h-screen w-screen bg-[url('/tea-background.jpg')] filter blur-sm blur-fix brightness-50 absolute -z-10 overflow-hidden"
/>
<hr class="h-2 w-0" />
<div class="relative w-screen h-screen flex flex-col justify-center items-center z-40">
	<img
		src="/avatar-300x300.png"
		class="w-[300px] h-[300px] rounded-full border-4 border-white"
		alt="Nicolas Saavedra's Profile"
	/>
	<hr class="w-96 my-8 h-[2px] bg-white" />
	<h1 class="text-white text-6xl text-bold font-lato mb-6">Nicolas Saavedra</h1>
	<h2 class="text-white text-2xl w-2/5 text-center">
		Desarrollador Full-Stack con conocimiento amplio en bases de datos SQL y NoSQL, integración de
		APIs externas, microservicios y modificación de juegos
	</h2>
</div>

<style lang="scss">
	.blur-fix {
		overflow: hidden;
		transform: scale(1.02);
	}
	.h-screen-fix {
		height: calc(100vh - 3rem);
	}
</style>
