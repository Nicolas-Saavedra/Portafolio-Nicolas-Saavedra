<script lang="ts">
	import ContactForm from './contact/ContactForm.svelte';
	import MediaArray from './contact/MediaArray.svelte';
</script>

<div
	class="w-screen pt-36 pb-28 md:px-28 lg:px-64 bg-soft-white flex flex-col align-middle justify-center items-center"
>
	<div id="title-container flex flex-col">
		<h1 class="text-6xl font-lato tracking-wider">Contactame</h1>
		<span class="block h-[5px] w-[2.25rem] bg-slate-800"></span>
	</div>
	<div class="w-3/5 flex justify-center mt-16 bg-white rounded-3xl">
		<ContactForm />
	</div>
	<MediaArray />
</div>
