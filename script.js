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

<input
id="answer3"
type="text"
placeholder="Votre réponse">

<button onclick="checkAnswer3()">
VALIDER
</button>

<p id="error3"></p>

`;

    } else {

        document.getElementById("error2").textContent =
            "Ce n'est pas la bonne réponse.";

    }

}
function checkAnswer3() {

    let answer = document.getElementById("answer3").value
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    let correct = "men, their rights and nothing more. women, their rights and nothing less."
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    if (answer === correct) {

        document.getElementById("info").innerHTML = `

<h2>Première convention des droits des femmes</h2>

<p>

Le 20 juillet 1848, la première convention consacrée aux droits des femmes se tient à Seneca Falls, aux États-Unis.

<br><br>

Les participantes y réclament davantage de droits, notamment l'égalité devant la loi, l'accès à l'éducation et le droit de vote.

<br><br>

Cet événement marque le début organisé du mouvement pour les droits des femmes.

<br><br>

Le mot d'ordre devenu l'un des plus célèbres du mouvement est :

<br><br>

<strong>"Men, their rights and nothing more; women, their rights and nothing less."</strong>

</p>

<hr>

<h2>🔓 DOSSIER SUIVANT</h2>

<p>

<strong>Well... It's About Time you found that one! 😉</strong>

<br><br>

Pendant que tu as passé tout ce temps aux toilettes à faire je ne sais quoi, j'ai capté d'étranges fréquences radio.

<br><br>

Elles semblent venir de l'espace... comme c'est excitant !

<br><br>

Je crois qu'elles utilisent l'alphabet phonétique international.

<br><br>

Voyons si tu arrives à déchiffrer le message qu'elles essaient de transmettre.

</p>

<audio controls>
    <source src="signal.mp3" type="audio/mpeg">
</audio>

<input
id="answer4"
type="text"
placeholder="Votre réponse">

<button onclick="checkAnswer4()">
VALIDER
</button>

<p id="error4"></p>

`;

    } else {

        document.getElementById("error3").textContent =
            "Ce n'est pas la bonne réponse.";

    }

}

function checkAnswer4() {

    let answer = document.getElementById("answer4").value
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    let correct = "christina yang"
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    if (answer === correct) {

        document.getElementById("info").innerHTML = `

<h2>Sandra Oh</h2>

<p>

L'actrice Sandra Oh, célèbre pour son rôle de Cristina Yang dans Grey's Anatomy, est née le 20 juillet 1971 à Nepean, en Ontario (Canada).

<br><br>

Récompensée pour son talent et son humour mordant, elle a marqué toute une génération de fans grâce à son interprétation brillante d'une chirurgienne aussi ambitieuse qu'attachante.

</p>

<hr>

<h2>❤️ Mission accomplie ❤️</h2>

<p>

Tous ces événements ont marqué l'Histoire à leur manière. Certains ont changé le monde, d'autres ont fait avancer les droits, la science ou l'exploration.

<br><br>

Mais, à mes yeux, le 20 juillet est surtout une date exceptionnelle pour une toute autre raison.

<br><br>

C'est le jour où est née une certaine <strong>Margaux Chénier</strong>.

<br><br>

Aujourd'hui, cette femme extraordinaire fête ses 30 ans.

<br><br>

Trente années à illuminer la vie des personnes qui ont la chance de croiser son chemin, à faire rire, à écouter, à soutenir, à aimer et à créer des souvenirs inoubliables.

<br><br>

Je mesure chaque jour la chance que j'ai de pouvoir t'appeler mon amie.

<br><br>

Notre amitié fait partie des plus beaux cadeaux que la vie m'ait offerts, et je ne pourrais pas être plus reconnaissante de tous les moments que nous avons partagés, ni plus impatiente de vivre les centaines d'aventures qui nous attendent encore.

<br><br>

Alors aujourd'hui, je célèbre bien plus qu'un anniversaire : je célèbre toi.

<br><br>

❤️ Joyeux 30ᵉ anniversaire, ma très célèbre Margaux Chénier. ❤️

<br><br>

Le monde a peut-être connu beaucoup de grands événements un 20 juillet…

<br><br>

<strong>Mais aucun n'arrive à la hauteur de celui-là.</strong>

</p>

`;

    } else {

        document.getElementById("error4").textContent =
            "Ce n'est pas la bonne réponse.";

    }

}
