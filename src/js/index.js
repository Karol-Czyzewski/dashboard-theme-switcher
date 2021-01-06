import '../scss/main.scss';

const button = document.querySelector('.main-socials__header--button-background');

let activeDarkMode = false;

function switchModeDark() {
    document.documentElement.style.setProperty('--white', 'hsl(230, 17%, 14%)');
    document.documentElement.style.setProperty('--very-pale-blue', 'hsl(232, 19%, 15%)');
    document.documentElement.style.setProperty('--light-grayish-blue', 'hsl(228, 28%, 20%)');
    document.documentElement.style.setProperty('--dark-grayish-blue', 'hsl(228, 34%, 66%)');
    document.documentElement.style.setProperty('--very-dark', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--toggle-light', 'linear-gradient(76deg, rgba(55,143,230,1) 24%, rgba(62,218,130,1) 68%)');
    document.documentElement.style.setProperty('--hover-color', 'hsl(228, 22%, 40%)');
    document.documentElement.style.setProperty('--switcher-dark', '4px');
}

function switchModeLight() {
    document.documentElement.style.setProperty('--white', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--very-pale-blue', 'hsl(225, 100%, 98%)');
    document.documentElement.style.setProperty('--light-grayish-blue', 'hsl(227, 47%, 96%)');
    document.documentElement.style.setProperty('--dark-grayish-blue', 'hsl(228, 12%, 44%)');
    document.documentElement.style.setProperty('--very-dark', 'hsl(230, 17%, 14%)');
    document.documentElement.style.setProperty('--toggle-light', 'hsl(230, 22%, 74%)');
    document.documentElement.style.setProperty('--hover-color', 'hsl(230, 22%, 88%)');
    document.documentElement.style.setProperty('--switcher-dark', '26px');
}

button.addEventListener('click', () => {
    if (activeDarkMode) {
        switchModeLight()
        activeDarkMode = !activeDarkMode;
    } else {
        switchModeDark();
        activeDarkMode = !activeDarkMode;
    }
})
