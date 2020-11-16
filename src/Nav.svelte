<script>
    import { links } from './model/links';
    import { onMount } from 'svelte';
    import { heroAnimation } from './animations.js';

    let ref;
    let scrolled;
    let show = false;
    onMount(() => {
        heroAnimation();
    });
    const handleScroll = (e) => {
        var s = window.scrollY;
        scrolled = s > 0;
    };
</script>

<style lang="scss">
    @import './styles/theme.scss';
    .nav {
        position: fixed;
        @include box-dim(100%, 140px);
        z-index: 4;
        transition: all 0.4s ease;
        @media (max-width: 600px) {
            @include box-dim(100%, 90px);
        }
        &.scrolled {
            background: black;
            height: 90px;
        }
        & .container {
            top: 0;
            height: 100%;
            @include flex(space-between, center);
            & .logo {
                @include box-dim(60px, 55px);
                @media (max-width: 600px) {
                    @include box-dim(50px, 50px);
                }
                & img {
                    @include box-dim;
                }
            }

            & .nav-right {
                @include flex;
                height: 100%;
                & .menu-icon {
                    display: none;
                    width: 19px;
                    cursor: pointer;

                    @media (max-width: 600px) {
                        display: inherit;
                    }
                }
                & .nav-links {
                    @media (max-width: 600px) {
                        display: none;
                    }
                }
            }
        }
        & .nav-links-mobile {
            display: none;
            transition: all 0.4s ease;
            @media (max-width: 600px) {
                @include flex(space-between, center);
                background: #000;
                position: fixed !important;
                padding: 0px 20px;
                height: 60px;
                width: 100% !important;
                z-index: -1;
                left: 0;
                top: 0;
                opacity: 0;
            }
            &.show {
                top: 90px;
                opacity: 1;
            }
        }
        & .nav-link {
            padding: 0 24px;
            text-transform: capitalize;
            color: white;

            opacity: 1;
            @media (max-width: 600px) {
                padding: 0;
            }
            &:hover {
                opacity: 0.6;
            }
        }
    }
</style>

<svelte:window on:scroll={handleScroll} />

<nav class="nav" class:scrolled bind:this={ref}>
    <div class="container cmr">
        <a href="/" class="logo">
            <img src="icons/signature1.svg" alt="asif" />
        </a>
        <div class="nav-right">
            <div class="nav-links">
                {#each links as link}
                    <a href={link.ref} class="nav-link">{link.label}</a>
                {/each}
            </div>
            <span class="menu-icon" on:click={() => (show = !show)}><i
                    data-feather="menu" /></span>
        </div>
    </div>
    <div class:show class="nav-links-mobile">
        {#each links as link}
            <a
                href={link.ref}
                class="nav-link"
                on:click={() => (show = false)}>{link.label}</a>
        {/each}
    </div>
</nav>
