const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    var dice1 = Math.floor((Math.random() * 6) + 1);
    var dice2 = Math.floor((Math.random() * 6) + 1);

    document.querySelector(".img1").setAttribute("src", "images/dice" + dice1 + ".png");

    document.querySelector(".img2").setAttribute("src", "images/dice" + dice2 + ".png");

    if (dice1 > dice2) {
        document.querySelector("h1").textContent = "Player 1 Wins";
    } else if (dice1 < dice2) {
        document.querySelector("h1").textContent = "Player 2 Wins";
    }

    if (dice1 == dice2) {
        document.querySelector("h1").textContent = "It's a tie";
    }
})