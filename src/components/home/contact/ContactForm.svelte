<form class="my-8 w-5/6" action="#" method="POST">
	<div class="flex flex-col">
		<div class="mt-4">
			<label class="block text-lg font-source font-bold" for="name">Nombre</label>
			<input
				class="block w-full h-12 py-2 px-4 mt-1 rounded-md bg-gray-200 outline-none"
				id="name"
				type="text"
				placeholder="Ingrese su nombre"
			/>
		</div>
		<div class="mt-4">
			<label class="block text-lg font-source font-bold" for="email">Correo Electronico</label>
			<input
				class="block w-full h-12 py-2 px-4 mt-1 rounded-md bg-gray-200 outline-none"
				id="email"
				type="text"
				placeholder="Ingrese su correo electronico"
			/>
		</div>
		<div class="mt-4">
			<label class="block text-lg font-source font-bold" for="reason">Motivo</label>
			<input
				class="block w-full h-12 py-2 px-4 mt-1 rounded-md bg-gray-200 outline-none"
				id="reason"
				type="text"
				placeholder="Ingrese el motivo de su solicitud"
			/>
		</div>
		<div class="mt-4">
			<label class="block text-lg font-source font-bold" for="content">Informacion Adicional</label>
			<textarea
				class="block w-full h-[250px] py-4 px-4 mt-1 rounded-md bg-gray-200 border-none resize-none outline-none"
				id="content"
				placeholder="Ingrese informacion adicional pertinente..."
			/>
		</div>
		<div class="mt-8 flex justify-center">
			<button class="font-source font-bold text-lg bg-slate-700 text-white py-4 px-6 rounded-3xl"
				>Enviar Solicitud</button
			>
		</div>
	</div>
</form>
