<script>
    import Typed from 'typed.js';
    import { onMount } from 'svelte';

    const options = {
        strings: [
            'lifelong learner.',
            'TS enthusiast.',
            'loves building cool stuff.',
        ],
        backDelay: 1800,
        backSpeed: 20,
        typeSpeed: 40,
        startDelay: 1300,
    };
    let el;
    let typedObj = null;
    onMount(() => {
        typedObj = new Typed(el, options);
    });
</script>

<style lang="scss">
    @import './styles/theme.scss';
    .hero {
        position: relative;
        @include box-dim(100%, 100vh);

        & .container {
            @include flex(initial, initial, $direction: column);
            height: 100%;
            position: relative;
            & .hero-content {
                @include flex(initial, flex-end);
                backface-visibility: hidden;
                @media (min-width: 600px) {
                    @include position(absolute, $top: 50%);
                    @include box-dim(100%, 140px);
                    padding-bottom: 60px;
                }
                opacity: 1;
                & .title {
                    color: #fff;
                    letter-spacing: -1px;
                    line-height: 1.8;
                    font-size: clamp(22px, 5vw, 30px);
                    max-width: 90%;
                    width: 650px;
                    @media (max-width: 600px) {
                        height: 300px;
                        max-width: 85%;
                        min-height: 200px;
                        @include position(absolute, $bottom: 0);
                        padding-bottom: 60px;
                    }
                    & .typed {
                        color: #8f9ba8;
                        &::before {
                            @media (max-width: 420px) {
                                content: '';
                                display: block;
                            }
                        }
                    }
                }
            }
            & .hero-down {
                @include position(absolute, $bottom: 0);
                padding-bottom: 60px;
            }
        }
    }
</style>

<div class="hero">
    <div class="container cmr">
        <div class="hero-content">
            <h1 class="title">
                UI / UX developer, front-end engineer,
                <span class="typed" bind:this={el} />
            </h1>
        </div>
        <span class="hero-down"><i data-feather="chevron-down" /></span>
    </div>
</div>
