// Save the theme preference in localStorage
function lightDark() {
    const sunMoonImg = document.getElementById('lightDarkImg');

    if (sunMoonImg.src.includes('sun.png')) {
        sunMoonImg.src = 'images/moon.png';
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        sunMoonImg.src = 'images/sun.png';
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }

    // Update icons if on the homepage
    try{
        const emailImg = document.getElementById('emailLightDarkImg');
        const githubImg = document.getElementById('githubLightDarkImg');

        if (sunMoonImg.src.includes('moon.png')) {
            emailImg.src = 'images/email_dark.png';
            githubImg.src = 'images/github_dark.png';
        }else{
            emailImg.src = 'images/email_light.png';
            githubImg.src = 'images/github_light.png';
        }
    }catch(error){}
}

// Load the theme preference from localStorage
function loadTheme() {
    const theme = localStorage.getItem('theme');
    const sunMoonImg = document.getElementById('lightDarkImg');

    if (theme === 'dark') {
        sunMoonImg.src = 'images/moon.png';
        document.body.classList.add('dark');
    } else {
        sunMoonImg.src = 'images/sun.png';
        document.body.classList.remove('dark');
    }

    //Update icons if one the homepage
    try{
        const emailImg = document.getElementById('emailLightDarkImg');
        const githubImg = document.getElementById('githubLightDarkImg');

        if (theme === 'dark') {
            emailImg.src = 'images/email_dark.png';
            githubImg.src = 'images/github_dark.png';
        }else{
            emailImg.src = 'images/email_light.png';
            githubImg.src = 'images/github_light.png';
        }
    }catch(error){}
}

// Call loadTheme when the page loads
document.addEventListener('DOMContentLoaded', loadTheme);
