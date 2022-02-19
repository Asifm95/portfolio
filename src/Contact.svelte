<script>
</script>

<div class="container cmr" id="contact" data-scroll>
    <div class="content-block">
        <h1 class="title">Send me a message</h1>

        <div class="content">
            <p class="paragraph">
                Feel free to get in touch with me regarding new projects or to
                just say hi. I'll get back to you as soon as I can.
            </p>
            <div class="break" />
        </div>
        <a href="mailto:asifm2882@gmail.com">
            <i data-feather="mail" class="mail" />
        </a>
    </div>
</div>

<style lang="scss">
    @import './styles/theme.scss';

    .container {
        // @include container;
        @include flex(initial, center, $direction: column);
        text-align: center;
        height: calc(100vh - 130px);
        min-height: 600px;
        margin: 40px auto 0;
        position: relative;
        // scroll-snap-align: start;
        // scroll-margin-top: 120px;
        & .content-block {
            max-width: 90%;
            width: 600px;
            position: absolute;
            top: 50%;
            transform: translateY(calc(-50% - 40px));
            & .title {
                margin-bottom: 6px;
                font-size: clamp(22px, 5vw, 30px);
            }
            & .content {
                padding: 40px 0 10px 0;
                & .paragraph {
                    font-size: clamp(12px, 4vw, 14px);
                }
            }
            & .break {
                height: 20px;
            }
            & a {
                color: #8f9ba8;
                & .mail {
                    stroke-width: 1px;
                    width: 35px;
                    height: 35px;
                }
            }
        }
    }
</style>
