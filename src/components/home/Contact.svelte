<script lang="ts">
	import { _ } from 'svelte-i18n';
	import ContactForm from './contact/ContactForm.svelte';
	import MediaArray from './contact/MediaArray.svelte';
</script>

<div
	class="w-screen pt-36 pb-28 md:px-28 2xl:px-64 bg-soft-white flex flex-col align-middle justify-center items-center"
>
	<div id="title-container flex flex-col">
		<h1 class="text-4xl sm:text-6xl font-lato tracking-wider">{$_('contact.title')}</h1>
		<span class="block h-[5px] w-[2.25rem] bg-slate-800"></span>
	</div>
	<div class="w-full sm:w-4/5 lg:w-3/5 flex justify-center mt-16 bg-white sm:rounded-3xl">
		<ContactForm />
	</div>
	<MediaArray />
</div>
