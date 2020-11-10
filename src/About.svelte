<script>
</script>

<style lang="scss">
    @import './styles/theme.scss';

    .container {
        @include container;
        @include flex(initial, initial, $direction: column);
        height: calc(100vh - 130px);
        min-height: 600px;
        margin: 40px auto 0;
        position: relative;
        & .content-block {
            max-width: 90%;
            width: 600px;
            position: absolute;
            top: 50%;
            transform: translateY(calc(-50% - 40px));
            & .title {
                margin-bottom: 6px;
            }
            & .content {
                padding: 40px 0;
            }
            & .break {
                height: 20px;
            }
        }
    }
</style>

<div class="container" id="about">
    <div class="content-block">
        <h1 class="title">About me</h1>

        <div class="content">
            <p class="paragraph">
                Professionally connected with the web development industry and
                information technology for many years.
            </p>
            <div class="break" />
            <p class="paragraph">
                Well-organised person, problem solver, independent employee with
                high attention to detail. Fan of MMA, outdoor activities, TV
                series and, recently, English literature. A family person,
                father of two fractious boys, therefore remote employment is
                preferred.
            </p>
            <div class="break" />
            <p class="paragraph">
                Interested in the entire frontend spectrum and working on
                ambitious projects with positive people.
            </p>
        </div>
    </div>
</div>
