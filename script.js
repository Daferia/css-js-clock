function setDate() {
    const secondshand = document.querySelector('.sec-hand');
    const minutehand = document.querySelector('.min-hand');
    const hourshand = document.querySelector('.hour-hand');

    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondshand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds)

    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes /60) * 360) + 90;
    minutehand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourshand.style.transform = `rotate(${hoursDegrees}deg)`;

};

setInterval(setDate, 1000);