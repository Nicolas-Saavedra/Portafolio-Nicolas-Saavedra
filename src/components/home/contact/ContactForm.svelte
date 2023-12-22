<script lang="ts">
	import emailjs from '@emailjs/browser';

	let name = '';
	let email = '';
	let reason = '';
	let aditionalInfo = '';

	let isEmailSent = false;
	let isEmailError = false;
	let isCurrentEmailValid = true;

	let isEmailInvalidOnSend = false;
	let isNameEmpty = false;
	let isEmailEmpty = false;
	let isReasonEmpty = false;

	let isSubmitButtonDisabled = false;

	const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	$: if (email) {
		isCurrentEmailValid = email === '' || emailRegexp.test(email);
	}

	$: if (name) {
		isNameEmpty = false;
	}
	$: if (email) {
		isEmailEmpty = false;
	}
	$: if (reason) {
		isReasonEmpty = false;
	}

	$: if (!isEmailSent && !isEmailError) {
		isEmailSent = false;
		isEmailError = false;
	}

	function validateEmptyFields() {
		isNameEmpty = name === '';
		isEmailEmpty = email === '';
		isReasonEmpty = reason === '';

		return !(isNameEmpty || isEmailEmpty || isReasonEmpty);
	}

	async function sendEmail() {
		if (!isCurrentEmailValid) {
			isEmailInvalidOnSend = true;
			return;
		}

		if (!validateEmptyFields()) return;

		isEmailInvalidOnSend = false;
		isSubmitButtonDisabled = true;

		const resp = await emailjs.send('default_service', import.meta.env.VITE_EMAILJS_TEMPLATE, {
			name,
			email,
			reason,
			content: aditionalInfo
		});

		isSubmitButtonDisabled = false;

		if (resp.status === 200) {
			(name = ''), (email = ''), (reason = ''), (aditionalInfo = '');
			isEmailSent = true;
		} else {
			isEmailError = true;
		}
	}
</script>

<form
	class="my-8 w-5/6"
	action="#"
	method="POST"
	on:submit={(event) => {
		event.preventDefault();
	}}
>
	<div class="flex flex-col">
		<div class="mt-4">
			<label class="block text-lg font-source font-bold" for="name">Nombre</label>
			<input
				class="block w-full h-12 py-2 px-4 mt-1 rounded-md bg-gray-200 outline-none"
				id="name"
				type="text"
				placeholder="Ingrese su nombre"
				bind:value={name}
			/>
			{#if isNameEmpty}
				<small class="text-red-600 text-md">El nombre dado esta vacio</small>
			{/if}
		</div>
		<div class="mt-4">
			<label class="block text-lg font-source font-bold" for="email">Correo Electronico</label>
			<input
				class={`block w-full h-12 py-2 px-4 mt-1 rounded-md bg-gray-200 outline-none ${
					isCurrentEmailValid ? '' : 'text-red-600'
				}`}
				id="email"
				type="text"
				placeholder="Ingrese su correo electronico"
				bind:value={email}
			/>
			{#if isEmailInvalidOnSend}
				<small class="text-red-600 text-md">El correo dado no es valido</small>
			{/if}
			{#if isEmailEmpty}
				<small class="text-red-600 text-md">El correo dado esta vacio</small>
			{/if}
		</div>
		<div class="mt-4">
			<label class="block text-lg font-source font-bold" for="reason">Motivo</label>
			<select
				class="block w-full h-12 py-2 px-4 mt-1 rounded-md bg-gray-200 outline-none"
				id="reason"
				placeholder="Ingrese el motivo de su solicitud"
				bind:value={reason}
			>
				<option value="Solicitud de Consulta">Solicitud de Consulta</option>
				<option value="Oportunidades de Colaboración">Oportunidades de Colaboración</option>
				<option value="Consulta Educativa">Consulta Educativa</option>
				<option value="Otro Motivo">Otro Motivo</option>
			</select>
			{#if isReasonEmpty}
				<small class="text-red-600 text-md">Debe seleccionar un motivo de solicitud</small>
			{/if}
		</div>
		<div class="mt-4">
			<label class="block text-lg font-source font-bold" for="content">Informacion Adicional</label>
			<textarea
				class="block w-full h-[250px] py-4 px-4 mt-1 rounded-md bg-gray-200 border-none resize-none outline-none"
				id="content"
				placeholder="Ingrese informacion adicional pertinente..."
				bind:value={aditionalInfo}
			/>
		</div>
		<div class="mt-8 flex justify-center">
			<button
				class="font-source font-bold text-lg bg-slate-700 text-white py-4 px-6 rounded-3xl"
				on:click={sendEmail}
				disabled={isSubmitButtonDisabled}>Enviar Solicitud</button
			>
		</div>
		{#if isEmailSent}
			<h2 class="text-lg mt-4 text-center text-green-600">
				Su solicitud se ha procesado con exito
			</h2>
		{/if}
		{#if isEmailError}
			<h2 class="text-lg mt-4 text-center text-red-600">Hubo problemas con su solicitud.</h2>
		{/if}
	</div>
</form>
