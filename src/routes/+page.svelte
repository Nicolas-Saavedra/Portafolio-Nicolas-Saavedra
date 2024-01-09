<script lang="ts">
	import About from '../components/home/About.svelte';
	import Hero from '../components/home/Hero.svelte';
	import Experience from '../components/home/Experience.svelte';
	import Contact from '../components/home/Contact.svelte';
	import Footer from '../components/Footer.svelte';
	import { _ } from 'svelte-i18n';
</script>

<section id="hero">
	<Hero />
</section>
<section id="about">
	<About />
</section>
<section id="experience">
	<Experience />
</section>
<section id="contact">
	<Contact />
</section>
<Footer />

<svelte:head>
	<link rel="icon" type="image/x-icon" href="/favicon.ico" />
	<title>Nicolas Saavedra</title>
	<meta name="description" content={$_('meta.description')} />
</svelte:head>
