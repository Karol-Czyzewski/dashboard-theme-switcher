import '../scss/main.scss';

const button = document.querySelector('.main-socials__header--button-background');

function switchMode() {
    document.documentElement.style.setProperty('--white', 'hsl(230, 17%, 14%)');
    document.documentElement.style.setProperty('--very-pale-blue', 'hsl(232, 19%, 15%)');
    document.documentElement.style.setProperty('--light-grayish-blue', 'hsl(228, 28%, 20%)');
    document.documentElement.style.setProperty('--dark-grayish-blue', 'hsl(228, 34%, 66%)');
    document.documentElement.style.setProperty('--very-dark', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--toggle-light', 'linear-gradient(76deg, rgba(55,143,230,1) 24%, rgba(62,218,130,1) 68%)');
    document.documentElement.style.setProperty('--hover-color', 'hsl(228, 22%, 40%)');

}

button.addEventListener('click', () => {
    switchMode();
})
