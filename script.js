function calculateLove() {
    var yourName = document.getElementById("yourName").value;
    var theirName = document.getElementById("theirName").value;

    if (yourName && theirName) {
        var loveScore = Math.random() * 100;
        loveScore = Math.floor(loveScore) + 1;
        document.getElementById("result").innerText = yourName + " and " + theirName + " have a love score of " + loveScore + "%";
    } else {
        document.getElementById("result").innerText = "Please enter both names!";
    }
}
