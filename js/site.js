document.addEventListener("DOMContentLoaded", function () {
    // Appel de la fonction au chargement pour configurer les éléments
    setupExpanderContent();
});

function showFrenchContent() {
    document.querySelectorAll('.lang-fr').forEach(function (el) {
        el.style.display = 'block';
    });
    document.querySelectorAll('.lang-en').forEach(function (el) {
        el.style.display = 'none';
    });
}

function showEnglishContent() {
    document.querySelectorAll('.lang-fr').forEach(function (el) {
        el.style.display = 'none';
    });
    document.querySelectorAll('.lang-en').forEach(function (el) {
        el.style.display = 'block';
    });
}

function setupExpanderContent() {
    // Trouver tous les boutons d'expansion
    var expandButtons = document.querySelectorAll('.expander-button');

    // Parcourir tous les boutons d'expansion
    expandButtons.forEach(function (button) {
        // Récupérer l'ID du bouton
        var buttonId = button.getAttribute('id');

        // Récupérer l'état enregistré du bouton dans la session
        var isExpanded = sessionStorage.getItem(buttonId);

        // Trouver le span icon qui devrait être affiché
        var downIcon = button.querySelector('.fa-arrow-down');
        var upIcon = button.querySelector('.fa-arrow-up');

        // Trouver le div avec la classe expander-content dans le parent div
        var parentDiv = button.closest('.card-content');
        var expanderContent = parentDiv.querySelector('.expander-content');

        // Vérifier si l'élément devrait être affiché ou caché en fonction de la session
        if (isExpanded === 'true') {
            expanderContent.classList.remove('hidden');
            upIcon.classList.remove('hidden');
            downIcon.classList.add('hidden');

        } else {
            expanderContent.classList.add('hidden');
            upIcon.classList.add('hidden');
            downIcon.classList.remove('hidden');
        }

        // Attacher un gestionnaire d'événements clic à chaque bouton d'expansion
        button.addEventListener('click', function () {
            // Appeler la fonction toggleExpanderContent en passant le bouton comme paramètre
            toggleExpanderContent(button);
        });
    });
}

function toggleExpanderContent(button) {
    // Trouver le div avec la classe expander-content dans le parent div
    var parentDiv = button.closest('.card-content');
    var expanderContent = parentDiv.querySelector('.expander-content');

    // Trouver les spans icon du bouton
    var downIcon = button.querySelector('.fa-arrow-down');
    var upIcon = button.querySelector('.fa-arrow-up');

    // Récupérer l'ID du bouton
    var buttonId = button.getAttribute('id');

    // Vérifier si le div est actuellement visible ou caché
    if (expanderContent.classList.contains('hidden')) {
        // Afficher le contenu
        expanderContent.classList.remove('hidden');
        upIcon.classList.remove('hidden');
        downIcon.classList.add('hidden');
        // Sauvegarder l'état dans la session
        sessionStorage.setItem(buttonId, 'true');
    } else {
        // Cacher le contenu
        expanderContent.classList.add('hidden');
        upIcon.classList.add('hidden');
        downIcon.classList.remove('hidden');
        // Sauvegarder l'état dans la session
        sessionStorage.setItem(buttonId, 'false');
    }
}

$(document).ready(function () {
    $('.zoomable-image').hover(function () {
        $(this).toggleClass('is-expanded');
    });
});

var video = document.getElementById("TGMCatVideo");
// Lecture de la vidéo au survol de la souris
video.addEventListener("mouseover", function () {
    if (video.paused) {
        video.play();
    }
});
// Pause de la vidéo lorsque la souris n'est plus au-dessus
video.addEventListener("mouseout", function () {
    video.pause();
});

// Ouvrir la vidéo dans une nouvelle page au clic
video.addEventListener("click", function () {
    // Récupérer l'URL de la vidéo
    var videoSrc = video.getAttribute("src");
    // Ouvrir la vidéo dans une nouvelle fenêtre ou un nouvel onglet
    window.open(videoSrc, "_blank");
});