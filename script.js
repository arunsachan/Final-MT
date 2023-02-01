
function displayDiceWthScore() {
    document.getElementById('displayInfo').classList.add('hidden');
    attempt--;
    console.log(`attempt remaining= ${attempt}`);
    document.getElementById('attemptsLeft').innerText = attempt;
    document.getElementById('diceWthScore').classList.remove('hidden');
    document.getElementById("img-3").disabled = true;

}


function diceClick() {
    RemainingDiceClick--;
    document.getElementById('diceClicks').innerText = RemainingDiceClick;
    let randomNo = Math.floor(Math.random() * 6) + 1;
    totalScore += randomNo;
    document.getElementById('score').innerText = totalScore;
    console.log(`RemainingDiceClick = ${RemainingDiceClick}`);
    console.log(`randomNo generated is   ${randomNo}`);
    console.log(`totalScore = ${totalScore}`);
    if (RemainingDiceClick === 0) {
        document.getElementById("dice-Image").disabled = true;
        document.getElementById('score').innerText = totalScore;
        if (totalScore > 10) {
            alert(`Yehhh Congratulations 🎉🎉🎊🎊😊😊!!! Your total score is ${totalScore} which is greater than 10. Click on next Image to avail your coupon code.`);
            document.getElementById('diceWthScore').classList.add('hidden');
            document.getElementById("img-4").disabled = false;
        } else {
            if (attempt != 0) {
                // document.getElementById('score').innerText = totalScore;
                alert(`O Ohhh!!! Your total score is ${totalScore} which is less than 10. Try once again!!`);
                document.getElementById("img-3").disabled = false;
                RemainingDiceClick = 3;
                totalScore = 0;
                document.getElementById("dice-Image").disabled = false;
                document.getElementById('diceWthScore').classList.add('hidden');
                console.log(`RemainingDiceClick = ${RemainingDiceClick}`);
                console.log(`totalScore = ${totalScore}`);

            } else {
                document.getElementById('score').innerText = totalScore;
                alert(`Sorry Bad luck 🥹🥹🥹!!! Your total score is ${totalScore} which is not greater than 10 & You have exausted all your attempts. Please Start from begining!!!!`);
                document.getElementById('diceWthScore').classList.add('hidden');
                document.getElementById('tryAgainImage').classList.remove('hidden');
            }
        }
    }
}