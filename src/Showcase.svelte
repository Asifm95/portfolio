<script>
    import projects from './model/showcase';
    import {
        cardMouseLeaveAnimation,
        cardMouseEnterAnimation,
    } from './animations';
</script>

<style lang="scss">
    @import './styles/theme.scss';

    .container {
        @include container;
        @include flex(initial, initial, $direction: column);
        margin: 40px auto 0;
        position: relative;
        scroll-snap-align: start;
        scroll-margin-top: 120px;
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
                    position: relative;
                    & .right {
                        position: absolute;
                        top: 12px;
                        left: -12px;
                        display: flex;
                        align-items: center;
                        opacity: 0;
                        & .svg {
                            width: 16px;
                            height: 16px;
                        }
                    }
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

<div class="showcase container" id="showcase" data-scroll>
    <h1 class="title">Showcase</h1>
    <div class="content-block">
        {#each projects as project (project.id)}
            <a
                href={project.link}
                class="block"
                target="blank"
                on:mouseenter={cardMouseEnterAnimation}
                on:mouseleave={cardMouseLeaveAnimation}>
                <div class="content">
                    <span class="right"><i
                            data-feather="chevron-right"
                            class="svg" /></span>
                    <h2>{project.title}</h2>
                    <p>{project.content}</p>
                </div>
            </a>
        {/each}
    </div>
</div>
