<script lang="ts">
	import MediaArray from './contact/MediaArray.svelte';
</script>

<div
	class="w-screen py-36 md:px-28 lg:px-64 bg-soft-white flex flex-col align-middle justify-center items-center"
>
	<div id="title-container flex flex-col">
		<h1 class="text-6xl font-lato tracking-wider">Contactame</h1>
		<span class="block h-[5px] w-[2.25rem] bg-slate-800"></span>
	</div>
	<div class="w-3/5 flex justify-center mt-20 bg-white rounded-3xl">
		<form class="mt-16 mb-24 w-5/6" action="#" method="POST">
			<div class="flex flex-col">
				<div class="mt-4">
					<label class="block text-lg font-source font-bold" for="name">Nombre</label>
					<input class="block w-full h-12 mt-1 rounded-md bg-gray-200" id="name" type="text" />
				</div>
				<div class="mt-4">
					<label class="block text-lg font-source font-bold" for="email">Correo Electronico</label>
					<input class="block w-full h-12 mt-1 rounded-md bg-gray-200" id="email" type="text" />
				</div>
				<div class="mt-4">
					<label class="block text-lg font-source font-bold" for="reason">Motivo</label>
					<input class="block w-full h-12 mt-1 rounded-md bg-gray-200" id="reason" type="text" />
				</div>
				<div class="mt-4">
					<label class="block text-lg font-source font-bold" for="content"
						>Informacion Adicional</label
					>
					<input class="block w-full h-12 mt-1 rounded-md bg-gray-200" id="content" type="text" />
				</div>
			</div>
		</form>
	</div>
	<MediaArray />
</div>
