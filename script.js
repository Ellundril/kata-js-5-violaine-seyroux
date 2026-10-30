// ════════════════════════════════════════════
//   DEVINE LE NOMBRE — Kata JS 3
//   Le HTML et le CSS sont déjà écrits.
//   Ton travail : compléter les TODOs dans l'ordre.
// ════════════════════════════════════════════

// ── État du jeu ─────────────────────────────
// Ces variables sont partagées entre toutes les fonctions.
// Ne pas les déplacer, ne pas les renommer.

let nombreSecret = null; // choisi par le joueur 1
let tentatives = 0; // nombre de propositions du joueur 2
let rangeMin = 0; // borne inférieure affichée
let rangeMax = 50; // borne supérieure affichée

// ── TODO 1 — Sélectionner les éléments DOM ──────────────────────────
// Récupère chacun des éléments suivants avec getElementById.
//
// Écrans :
//   "ecran-joueur1"       "ecran-joueur2"       "ecran-victoire"
const ecranJoueur1 = document.getElementById("ecran-joueur1");
const ecranJoueur2 = document.getElementById("ecran-joueur2");
const ecranVictoire = document.getElementById("ecran-victoire");
// Inputs et boutons :
//   "input-secret"        "btn-valider-secret"
//   "input-proposition"   "btn-proposer"        "btn-rejouer"
const inputSecret = document.getElementById("input-secret");
const btnValiderSecret = document.getElementById("btn-valider-secret");
const inputProposition = document.getElementById("input-proposition");
const btnProposer = document.getElementById("btn-proposer");
const btnRejouer = document.getElementById("btn-rejouer");
// Affichage :
//   "erreur-secret"       "erreur-proposition"
//   "message-feedback"    "compteur-tentatives"
//   "indice-range"        "message-victoire"
const erreurSecret = document.getElementById("erreur-secret");
const erreurProposition = document.getElementById("erreur-proposition");
const messageFeedback = document.getElementById("message-feedback");
const compteurTentatives = document.getElementById("compteur-tentatives");
const indiceRange = document.getElementById("indice-range");
const messageVictoire = document.getElementById("message-victoire");
// Écris tes déclarations ici :

// ── TODO 2 — Valider le nombre secret (joueur 1) ────────────────────
// Écris une fonction validerSecret() qui :
//   1. Lit la valeur de l'input secret avec parseInt()
//   2. Si la valeur n'est pas un nombre ou n'est pas entre 0 et 50 inclus :
//        - affiche un message d'erreur dans erreurSecret
//        - retire la classe "cache" de erreurSecret
//        - et s'arrête (return)
//   3. Sinon :
//        - stocke la valeur dans nombreSecret
//        - masque l'écran joueur 1 (ajoute la classe "cache")
//        - affiche l'écran joueur 2 (retire la classe "cache")
//        - remet l'input secret à vide
//
// Branche ensuite cette fonction sur le clic de btnValiderSecret.

const validerSecret = () => {
  const secret = parseInt(inputSecret.value);
  if (!secret || secret < 0 || secret > 50) {
    erreurSecret.textContent =
      "Le nombre choisi est invalide. Merci d'entrer un nombre secret compris entre 0 et 50.";
    erreurSecret.classList.remove("cache");
    return;
  } else {
    nombreSecret = secret;
    ecranJoueur1.classList.add("cache");
    ecranJoueur2.classList.remove("cache");
    inputSecret.value = "";
  }
};

btnValiderSecret.addEventListener("click", validerSecret);

// ── TODO 3 — Vérifier une proposition (joueur 2) ───────────────────
// Écris une fonction verifierProposition() qui :
//   1. Lit la valeur de l'input proposition avec parseInt()
//   2. Si la valeur n'est pas un nombre :
//        affiche "Saisis un nombre !" dans erreurProposition et s'arrête
//   3. Sinon :
//        - masque erreurProposition
//        - incrémente tentatives
//        - met à jour compteurTentatives : "Tentative n°X"
//        - retire la classe "cache" de compteurTentatives et messageFeedback
//        - appelle didIWin(proposition) pour afficher le bon message
//        - remet l'input proposition à vide
//
// Branche cette fonction sur le clic de btnProposer.

const verifierProposition = () => {
  const proposition = parseInt(inputProposition.value);
  if (!proposition) {
    erreurProposition.textContent = "Saisis un nombre !";
    erreurProposition.classList.remove("cache");
    return;
  } else {
    erreurProposition.classList.add("cache");
    tentatives++;
    compteurTentatives.textContent = `Tentative n°${tentatives}`;
    compteurTentatives.classList.remove("cache");
    messageFeedback.classList.remove("cache");
    didIWin(proposition);
    inputProposition.value = "";
  }
};

btnProposer.addEventListener("click", verifierProposition);

// ── TODO 4 — Logique de jeu ─────────────────────────────────────────
// Écris une fonction didIWin(proposition) qui :
//   - Si proposition === nombreSecret :
//       appelle afficherVictoire()
//   - Si proposition < nombreSecret :
//       affiche "📈 Plus grand !" dans messageFeedback
//   - Si proposition > nombreSecret :
//       affiche "📉 Plus petit !" dans messageFeedback

const didIWin = (proposition) => {
  if (proposition === nombreSecret) {
    afficherVictoire();
  }
  if (proposition < nombreSecret) {
    messageFeedback.textContent = "📈 Plus grand !";
  }
  if (proposition > nombreSecret) {
    messageFeedback.textContent = "📉 Plus petit !";
  }
};

// ── TODO 5 — Afficher la victoire ───────────────────────────────────
// Écris une fonction afficherVictoire() qui :
//   - Masque l'écran joueur 2
//   - Affiche l'écran victoire
//   - Met à jour messageVictoire :
//       "Trouvé en X tentative(s) !"

const afficherVictoire = () => {
  // Écris ton code ici
};

// ── TODO 6 — Rejouer ────────────────────────────────────────────────
// Écris une fonction rejouer() qui remet tout à zéro :
//   - nombreSecret, tentatives, rangeMin (0), rangeMax (50)
//   - Remet les inputs à vide
//   - Masque écran victoire et écran joueur 2
//   - Affiche écran joueur 1
//   - Remet indicRange à "0 < ? < 50"
//   - Masque compteurTentatives et messageFeedback
//
// Branche cette fonction sur le clic de btnRejouer.

const rejouer = () => {
  // Écris ton code ici
};

// ── BONUS — Affiner le range ────────────────────────────────────────
// Dans didIWin, quand la proposition n'est pas la bonne :
//   - Si proposition > nombreSecret ET proposition < rangeMax :
//       mettre à jour rangeMax avec la proposition
//   - Si proposition < nombreSecret ET proposition > rangeMin :
//       mettre à jour rangeMin avec la proposition
//   - Mettre à jour le texte de indicRange : "X < ? < Y"
