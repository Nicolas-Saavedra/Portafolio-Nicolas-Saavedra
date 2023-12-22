<script lang="ts">
	import '../app.scss';
	import Navbar from '../components/Navbar.svelte';
	import emailjs from '@emailjs/browser';

	emailjs.init(import.meta.env.VITE_EMAILJS_KEY);
</script>

<Navbar />

<slot />

<svelte:head>
	<link rel="icon" type="image/x-icon" href="/favicon.ico" />
	<title>Nicolas Saavedra</title>
</svelte:head>
