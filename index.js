document.getElementById('spinButton').addEventListener('click', function() {
    const spinner = document.querySelector('.spinner');
    spinner.style.transition = 'transform 4s ease-out';
    const randomSpin = Math.floor(3600 + Math.random() * 3600); // 10-20 rotation
    spinner.style.transform = `rotate(${randomSpin}deg)`;


    spinner.addEventListener('transitionend', () => {
        spinner.style.transition = 'none';
        const currentRotation = randomSpin % 360;
        spinner.style.transform = `rotate(${currentRotation}deg)`;
    });
});
