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

function checkAnswer2() {

    let answer = document.getElementById("answer2").value
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    let correct = "dia de los amigos"
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    if (answer === correct) {

        document.getElementById("info").innerHTML = `

<h2>Dia de los Amigos</h2>

<p>

Le 20 juillet est la Journée des Amis en Argentine, une tradition également célébrée dans plusieurs pays d'Amérique du Sud, notamment au Brésil.

<br><br>

C'est une journée dédiée à ceux qui traversent les années à nos côtés, partageant les rires, les aventures et les souvenirs.

<br><br>

Certaines amitiés, comme la nôtre, donnent simplement un peu plus de sens à cette date que les autres.

</p>

<hr>

<h2>🔓 DOSSIER SUIVANT</h2>

<p>

À parler de pays latins, ça me donne envie d'un bon guacamole…

<br><br>

Il ne te faut qu'un <strong>avocat</strong> et quelques <strong>épices</strong> pour en préparer un.

<br><br>

Ce sont aussi les ingrédients qui te permettront de débloquer la prochaine archive.

</p>

`;

    } else {

        document.getElementById("error2").textContent =
            "Ce n'est pas la bonne réponse.";

    }

}
