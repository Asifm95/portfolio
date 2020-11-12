<script>
    import Nav from './Nav.svelte';
    import Hero from './Hero.svelte';
    import About from './About.svelte';
    import Showcase from './Showcase.svelte';
    import Footer from './Footer.svelte';
    import feather from 'feather-icons';
    import { onMount } from 'svelte';

    onMount(() => feather.replace());
</script>

<style lang="scss">
    main {
        width: 100%;
        height: 100%;
    }
</style>

<main>
    <Nav />
    <Hero />
    <About />
    <Showcase />
    <Contact />
    <Footer />
</main>
