function totalClick(click) {
    const totalClicks = document.getElementById('totalClicks');
    const sumValue = parseInt(totalClicks.innerText) + click;
    console.log(sumValue);
    totalClicks.innerText = sumValue;

    // Avoid negatives
    if (sumValue < 0) {
        totalClicks.innerText = 0;
    }

    // Reset
    if (click === 0) {
        totalClicks.innerText = 0;
    }
}
