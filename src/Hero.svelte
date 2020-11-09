<script>
    import Typed from 'typed.js';
    import { onMount } from 'svelte';

    const options = {
        strings: ['lifelong learner.', 'gamer.', 'loves building cool stuff.'],
        backDelay: 1800,
        backSpeed: 20,
        typeSpeed: 40,
    };
    let el;
    let typedObj = null;
    onMount(() => {
        typedObj = new Typed(el, options);
    });
</script>

<style lang="scss">
    .hero {
        position: relative;
        height: 100vh;
        width: 100%;
        & .container {
            max-width: 90%;
            margin: 0 auto;
            width: 1280px;
            flex-direction: column;
            display: flex;
            height: 100%;
            position: relative;
            & .hero-content {
                display: flex;
                align-items: flex-end;
                padding-bottom: 60px;
                position: absolute;
                height: 140px;
                width: 100%;
                // bottom: 0;
                top: 50%;
                backface-visibility: hidden;
                opacity: 1;
                & .title {
                    color: #fff;
                    letter-spacing: -1px;
                    line-height: 1.8;
                    font-size: 30px;
                    max-width: 90%;
                    width: 650px;
                    & .typed {
                        color: #8f9ba8;
                    }
                }
            }
        }
    }
</style>

<div class="hero">
    <div class="container">
        <div class="hero-content">
            <h1 class="title">
                UI / UX developer, front-end engineer,
                <span class="typed" bind:this={el} />
            </h1>
        </div>
    </div>
</div>
