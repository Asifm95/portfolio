<script>
    import { links } from './model/links';

    let ref;
    let scrolled;

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
        &.scrolled {
            background: black;
            height: 90px;
        }
        & .container {
            top: 0;
            height: 100%;
            @include flex(space-between, center);
            @include container;
            & .logo {
                @include box-dim(60px, 55px);
                & img {
                    @include box-dim;
                }
            }

            & .nav-right {
                @include flex;
                height: 100%;
                & .nav-link {
                    padding: 0 24px;
                    text-transform: capitalize;
                    color: white;
                    transition: all 0.4s ease;
                    opacity: 1;
                    &:hover {
                        opacity: 0.6;
                    }
                }
            }
        }
    }
</style>

<svelte:window on:scroll={handleScroll} />

<nav class="nav" class:scrolled bind:this={ref}>
    <div class="container">
        <a href="/" class="logo">
            <img src="icons/signature1.svg" alt="asif" />
        </a>
        <div class="nav-right">
            <div class="nav-links">
                {#each links as link}
                    <a href={link.ref} class="nav-link">{link.label}</a>
                {/each}
            </div>
        </div>
    </div>
</nav>
