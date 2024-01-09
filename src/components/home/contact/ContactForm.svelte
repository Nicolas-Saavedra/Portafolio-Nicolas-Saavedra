<script lang="ts">
	import emailjs from '@emailjs/browser';
	import { _ } from 'svelte-i18n';

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
			<label class="block text-lg font-source font-bold" for="name">{$_('contact.form.name')}</label
			>
			<input
				class="block w-full h-12 py-2 px-4 mt-1 rounded-md bg-gray-200 outline-none"
				id="name"
				type="text"
				placeholder={$_('contact.form.name-hint')}
				bind:value={name}
			/>
			{#if isNameEmpty}
				<small class="text-red-600 text-md">{$_('contact.form.name-err')}</small>
			{/if}
		</div>
		<div class="mt-4">
			<label class="block text-lg font-source font-bold" for="email"
				>{$_('contact.form.email')}</label
			>
			<input
				class={`block w-full h-12 py-2 px-4 mt-1 rounded-md bg-gray-200 outline-none ${
					isCurrentEmailValid ? '' : 'text-red-600'
				}`}
				id="email"
				type="text"
				placeholder={$_('contact.form.email-hint')}
				bind:value={email}
			/>
			{#if isEmailInvalidOnSend}
				<small class="text-red-600 text-md">{$_('contact.form.email-err')}</small>
			{/if}
			{#if isEmailEmpty}
				<small class="text-red-600 text-md">{$_('contact.form.email-emtpy')}</small>
			{/if}
		</div>
		<div class="mt-4">
			<label class="block text-lg font-source font-bold" for="reason"
				>{$_('contact.form.reason')}</label
			>
			<select
				class="block w-full h-12 py-2 px-4 mt-1 rounded-md bg-gray-200 outline-none"
				id="reason"
				placeholder={$_('contact.form.reason-hint')}
				bind:value={reason}
			>
				<option value={$_('contact.form.consult-query')}>{$_('contact.form.consult-query')}</option>
				<option value={$_('contact.form.opportunity-query')}
					>{$_('contact.form.opportunity-query')}</option
				>
				<option value={$_('contact.form.education-query')}
					>{$_('contact.form.education-query')}</option
				>
				<option value={$_('contact.form.other-query')}>{$_('contact.form.other-query')}</option>
			</select>
			{#if isReasonEmpty}
				<small class="text-red-600 text-md">{$_('contact.form.reason-empty')}</small>
			{/if}
		</div>
		<div class="mt-4">
			<label class="block text-lg font-source font-bold" for="content"
				>{$_('contact.form.aditional-info')}</label
			>
			<textarea
				class="block w-full h-[250px] py-4 px-4 mt-1 rounded-md bg-gray-200 border-none resize-none outline-none"
				id="content"
				placeholder={$_('contact.form.aditional-info-hint')}
				bind:value={aditionalInfo}
			/>
		</div>
		<div class="mt-8 flex justify-center">
			<button
				class="font-source font-bold text-md sm:text-lg bg-slate-700 text-white py-4 px-4 sm:px-6 rounded-3xl"
				on:click={sendEmail}
				disabled={isSubmitButtonDisabled}>{$_('contact.form.submit')}</button
			>
		</div>
		{#if isEmailSent}
			<h2 class="text-lg mt-4 text-center text-green-600">{$_('contact.form.submit-success')}</h2>
		{/if}
		{#if isEmailError}
			<h2 class="text-lg mt-4 text-center text-red-600">{$_('contact.form.submit-failure')}</h2>
		{/if}
	</div>
</form>
