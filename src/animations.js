import anime from 'animejs';

export const heroAnimation = () => {
    let navEl = document.querySelector('.nav .container');
    let heroEl = document.querySelector('.hero-content .title');
    let heroDownEl = document.querySelector('.hero-down');
    // console.log(navEl);
    anime
        .timeline({ easing: 'easeOutExpo' })
        .add({
            targets: navEl,
            translateY: [-40, 0],
            opacity: [0, 1],
            delay: 500,
        })
        .add(
            {
                targets: heroEl,
                translateY: [-10, 0],
                opacity: [0, 1],
            },
            '-=200'
        )
        .add(
            {
                targets: heroDownEl,
                opacity: [0, 1],
            },
            '-=200'
        );

    anime({
        targets: heroDownEl,
        translateY: [5, 0],
        direction: 'alternate',
        loop: true,
        duration: 500,
        easing: 'easeInOutSine',
    });
};

export const AboutAnimation = () => {
    let titleEl = document.querySelector('.content-block .title');
    let paraEl = document.querySelector('.content-block .content');
    anime.remove(titleEl);
    anime.remove(paraEl);
    anime
        .timeline({ easing: 'easeOutExpo' })
        .add({
            targets: titleEl,
            translateY: [10, 0],
            opacity: [0, 1],
            delay: 300,
        })
        .add(
            {
                targets: paraEl,
                translateY: [30, 0],
                opacity: [0, 1],
            },
            '-=500'
        );
};

export const ShowcaseAnimation = () => {
    let titleEl = document.querySelector('.showcase .title');
    let cardEl = document.querySelectorAll('.showcase .content-block .block');
    anime.remove(titleEl);
    anime.remove(cardEl);
    anime
        .timeline({ easing: 'easeOutExpo' })
        .add({
            targets: titleEl,
            translateY: [10, 0],
            opacity: [0, 1],
            delay: 300,
        })
        .add(
            {
                targets: cardEl,
                translateY: [30, 0],
                opacity: [0, 1],
                delay: anime.stagger(100),
            },
            '-=500'
        );
};

export const ContactAnimation = () => {
    let titleEl = document.querySelector('#contact .content-block .title');
    let contentEl = document.querySelector(
        '#contact .content-block .paragraph'
    );
    let mailEl = document.querySelectorAll('#contact .mail path');
    let mailPEl = document.querySelectorAll('#contact .mail polyline');
    anime.remove(titleEl);
    anime.remove(mailEl);
    anime.remove(mailPEl);

    anime
        .timeline({ easing: 'easeOutExpo' })
        .add({
            targets: titleEl,
            translateY: [10, 0],
            opacity: [0, 1],
            delay: 300,
        })
        .add(
            {
                targets: contentEl,
                translateY: [10, 0],
                opacity: [0, 1],
            },
            '-=700'
        )
        .add(
            {
                targets: mailPEl,
                strokeDashoffset: [anime.setDashoffset, 0],
            },
            '-=700'
        )
        .add(
            {
                targets: mailEl,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
            },
            '-=500'
        );
};

export const triggerAnimation = (id) => {
    if (id === 'about') AboutAnimation();
    if (id === 'showcase') ShowcaseAnimation();
    if (id === 'contact') ContactAnimation();
};

export const cardMouseEnterAnimation = ({ target }) => {
    let h2El = target.querySelector('.content h2');
    let rightEl = target.querySelector('.content .right');
    anime
        .timeline({ easing: 'easeOutExpo', duration: 600 })
        .add({
            targets: target,
            borderColor: '#8f9ba8',
            delay: 100,
        })
        .add(
            {
                targets: h2El,
                translateX: 10,
            },
            '-=400'
        )
        .add(
            {
                targets: rightEl,
                opacity: 1,
                translateX: [10, 0],
            },
            '-=600'
        );
};
export const cardMouseLeaveAnimation = ({ target }) => {
    let h2El = target.querySelector('.content h2');
    let rightEl = target.querySelector('.content .right');
    anime.remove(h2El);
    anime.remove(rightEl);
    anime
        .timeline({ easing: 'easeOutExpo', duration: 600 })
        .add({
            targets: target,
            borderColor: '#16181a',
            delay: 100,
            easing: 'easeOutExpo',
        })
        .add(
            {
                targets: h2El,
                translateX: 0,
            },
            '-=600'
        )
        .add(
            {
                targets: rightEl,
                opacity: 0,
                translateX: 5,
            },
            '-=600'
        );
};
