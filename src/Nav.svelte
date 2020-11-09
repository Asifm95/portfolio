<script>
    const links = [
        { id: 1, ref: '#about', label: 'about' },
        { id: 2, ref: '#showcase', label: 'Showcase' },
        { id: 3, ref: '#contact', label: 'Contact' },
        { id: 4, ref: 'https://github.com/Asifm95', label: 'Asifm95' },
    ];
</script>

<style lang="scss">
    .nav {
        position: fixed;
        height: 140px;
        width: 100%;
        z-index: 4;
        & .container {
            display: flex;
            justify-content: space-between;
            top: 0;
            align-items: center;
            height: 100%;
            max-width: 90%;
            margin: 0 auto;
            width: 1280px;

            & .logo {
                width: 60px;
                height: 55px;
                & img {
                    width: 100%;
                    height: 100%;
                }
            }

            & .nav-right {
                display: flex;
                height: 100%;
                align-items: center;
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

<nav class="nav">
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
