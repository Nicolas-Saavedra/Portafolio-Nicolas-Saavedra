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
	<meta
		name="description"
		content="Pagina de portafolio para el desarrollador de software Nicolas Saavedra Gonzalez,
    estudiante de Ingenieria de Sistemas y Computacion"
	/>
</svelte:head>
