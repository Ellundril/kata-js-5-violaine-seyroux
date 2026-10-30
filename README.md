# Exercice JavaScript : Manipulation du DOM et Événements

L'objectif est de manipuler les éléments HTML et de réagir aux actions de l'utilisateur.

### Instructions

1.  **Changement de thème :** Au clic sur le bouton 1, change la couleur de fond (`backgroundColor`) du body de façon aléatoire ou fixe.
2.  **Toggle visibilité :** Le bouton "Toggle" doit alternativement masquer ou afficher le titre "Hello World".
3.  **Mise à jour dynamique :** Le bouton 2 remplace le texte du titre par "Hello " suivi de la valeur de l'input. *Note : cela doit fonctionner même si le titre est masqué.*
4.  **Cocher pour masquer :** Pour chaque élément de la liste, si sa case est cochée, le texte de cet élément doit disparaître (hidden).
5.  **Ajout d'item :** Le bouton 3 doit créer un nouvel élément `<li>` contenant une checkbox et du texte, puis l'ajouter à la fin de la liste `<ul>`.
6.  **Extraction de données :** Le bouton 4 doit afficher une `alert()` listant uniquement le texte des éléments de la liste qui ne sont pas "cochés" (utiliser : innerText).
7.  **Raccourci clavier :** Fais en sorte que la touche "Entrée" pressée dans l'input déclenche la même action que le bouton 2.
8.  **Effet de survol (Hover) :** Au survol du titre principal, augmente sa taille de police. Elle doit revenir à la normale quand la souris sort.
9.  **Suppression sécurisée :** Le bouton "Supprimer le dernier" doit retirer le dernier `<li>` de la liste, mais seulement s'il en reste plus de 3.
10. **Validation :** Si l'input est vide lors du clic sur le bouton 2, ajoute une bordure rouge à l'input et affiche un message d'erreur en dessous.
11. **Délégation d'événement :** Ajoute un écouteur sur la liste `<ul>` pour que, si l'on clique sur le texte d'un `<li>`, celui-ci soit supprimé.
12. **Compteur dynamique :** Crée une fonction qui compte le nombre de `<li>` et met à jour le texte du compteur en bas de page à chaque ajout ou suppression.
13. **Compteur dynamique :** Crée une fonction qui compte le nombre de fois ou un event a été crée. 