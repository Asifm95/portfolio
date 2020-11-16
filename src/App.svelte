<script>
    import Nav from './Nav.svelte';
    import Hero from './Hero.svelte';
    import About from './About.svelte';
    import Showcase from './Showcase.svelte';
    import Footer from './Footer.svelte';
    import feather from 'feather-icons';
    import Contact from './Contact.svelte';
    import { onMount, onDestroy } from 'svelte';
    import ScrollOut from 'scroll-out';
    import { triggerAnimation } from './animations.js';

    let scrollOutRef;

    onMount(() => {
        feather.replace();

        scrollOutRef = ScrollOut({
            // threshold: 200,
            onShown: function (el) {
                el.style.opacity = 1;
                triggerAnimation(el.id);
            },
            onHidden: function (el) {
                // hide the element initially
                el.style.opacity = 0;
            },
        });
    });
    onDestroy(() => {
        scrollOutRef.teardown();
    });
</script>

<style lang="scss">
    @import './styles/global.scss';
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
