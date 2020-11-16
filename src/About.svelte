<script>
</script>

<style lang="scss">
    @import './styles/theme.scss';

    .container {
        @include flex(initial, initial, $direction: column);
        height: calc(100vh - 130px);
        min-height: 600px;
        margin: 40px auto 0;
        position: relative;
        scroll-snap-align: start;
        scroll-margin-top: 120px;
        & .content-block {
            max-width: 90%;
            width: 600px;
            position: absolute;
            top: 50%;
            transform: translateY(calc(-50% - 40px));
            & .title {
                margin-bottom: 6px;
                font-size: clamp(26px, 5vw, 30px);
            }
            & .content {
                padding: 40px 0;
                font-size: clamp(12px, 4vw, 14px);
            }
            & .break {
                height: 20px;
            }
        }
    }
</style>

<div class="container cmr" id="about" data-scroll>
    <div class="content-block">
        <h1 class="title">About me</h1>

        <div class="content">
            <p class="paragraph">
                I’m a front-end engineer based out of Dubai / Bangalore, and I
                create fun, innovative, accessible, and fast web apps.
            </p>
            <div class="break" />
            <p class="paragraph">
                Well-organised person, problem solver, team player with high
                attention to detail. Work mainly with Angular / React and
                sometimes react-native for mobile applications. Fan of video
                games, football and trekking.
            </p>
            <div class="break" />
            <p class="paragraph">
                Interested in the entire frontend spectrum and working on
                ambitious projects with positive people.
            </p>
        </div>
    </div>
</div>
