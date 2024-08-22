document.getElementById("lirePlusBtn").addEventListener("click", function() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("lirePlusBtn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "Lire moins";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "Lire la suite";
    }
});
