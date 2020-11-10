<script>
</script>

<style lang="scss">
    @import './styles/theme.scss';

    .container {
        @include container;
        @include flex(initial, initial, $direction: column);
        margin: 40px auto 0;
        position: relative;
        & .title {
            margin-bottom: 6px;
        }
        & .content-block {
            padding: 40px 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
            @media (max-width: 600px) {
                grid-template-columns: 1fr;
            }
            & .block {
                border: 1px solid #16181a;
                background: #000;
                color: white;
                position: relative;
                padding: 0 34px;
                display: flex;
                align-items: center;
                height: 250px;
                width: 100%;
                & .content {
                    & h2 {
                        font-weight: bold;
                        letter-spacing: -0.5px;
                        font-size: 22px;
                    }
                    & p {
                        color: #8f9ba8;
                        font-size: clamp(0.8rem, 2vw, 14px);
                    }
                }
            }
        }
    }
</style>

<div class="container" id="showcase">
    <h1 class="title">Showcase</h1>
    <div class="content-block">
        <a href="https://www.blankwear.com/" class="block" target="blank">
            <div class="content">
                <h2>Blankwear</h2>
                <p>A wholesale blank apparel E-commerce platform.</p>
            </div>
        </a>
        <a href="https://storybrain.io/" class="block" target="blank">
            <div class="content">
                <h2>Storybrain</h2>
                <p>
                    Improve user engagement by evolving content with the help of
                    AI.
                </p>
            </div>
        </a>
        <a
            href="https://asifm95.github.io/react-spaces-ui/"
            class="block"
            target="blank">
            <div class="content">
                <h2>Spaces UI</h2>
                <p>
                    Inspired by the Invision Projects - Spaces iOS by @charles
                    Patterson
                </p>
            </div>
        </a>
        <a
            href="https://asifm95.github.io/react-color-palette"
            class="block"
            target="blank">
            <div class="content">
                <h2>Color Palette</h2>
                <p>A flatuicolors inspired color palettes picker</p>
            </div>
        </a>
    </div>
</div>
