function login() {

    const name = document.getElementById("name").value.trim().toLowerCase();

    if (name === "margaux") {

        document.getElementById("login").style.display = "none";
        document.getElementById("archive").style.display = "block";

        document.getElementById("error").textContent = "";

    } else {

        document.getElementById("error").textContent = "Nom incorrect.";

    }

}

function checkAnswer() {

    let answer = document.getElementById("answer").value
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    if (answer === "a nos souvenirs") {

        document.getElementById("archive").style.display = "none";
        document.getElementById("info").style.display = "block";

    } else {

        document.getElementById("error").textContent =
            "Ce n'est pas la bonne réponse.";

    }

}
