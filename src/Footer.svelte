<script>
</script>

<style lang="scss">
    @import './styles/theme.scss';
    .footer {
        @include box-dim(100%, 140px);
        position: relative;
        background-color: black;
        & .container {
            top: 0;
            height: 100%;
            display: grid;
            align-items: center;
            grid-template-columns: 1fr 60% 1fr;
            @media (max-width: 400px) {
                flex-direction: column;
            }
            & .date {
                color: #8f9ba8;
                font-size: 12px;
            }
            & .logo-container {
                text-align: center;
                & img {
                    @include box-dim(60px, 55px);
                }
            }

            & .social {
                display: flex;
                justify-content: space-between;
                @media (max-width: 400px) {
                    flex-wrap: wrap;
                }
                & a {
                    color: #8f9ba8;
                    & .icon {
                        width: 16px;
                        height: 16px;
                        @media (max-width: 600px) {
                            width: 13px;
                            height: 13px;
                        }
                    }
                }
            }
        }
    }
</style>

<footer class="footer">
    <div class="container cmr">
        <span class="date">©{new Date().getFullYear()}</span>
        <div class="logo-container">
            <a href="/" class="logo">
                <img src="icons/signature1.svg" alt="asif" />
            </a>
        </div>
        <div class="social">
            <a href="https://www.instagram.com/asifmohd95/" target="blank"><i
                    data-feather="instagram"
                    class="icon" /></a>
            <a href="https://twitter.com/AsifMohd95" target="blank"><i
                    data-feather="twitter"
                    class="icon" /></a>
            <a
                href="https://www.linkedin.com/in/asif-mohammed-18b2bb150/"
                target="blank"><i data-feather="linkedin" class="icon" /></a>
            <a href="https://github.com/Asifm95/" target="blank"><i
                    data-feather="github"
                    class="icon" /></a>
        </div>
    </div>
</footer>
