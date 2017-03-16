function initializeDirectionalShadow(clip) {
  var cards = clip.querySelectorAll('div.directional-shadow');

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var zDistance = window.getComputedStyle(card).getPropertyValue("transform-origin").split(" ")[0];
    card.style.transform = "translateZ(" + zDistance + ")";

    var cardClass = card.className;
    cardClass = cardClass.replace(/\bdirectional-shadow\b/, '');

    var shadowX = card.getAttribute('shadow-x');
    var shadowY = card.getAttribute('shadow-y');
    var shadowDepth = card.getAttribute('shadow-depth');

    var shadowCollection = card.parentElement.parentElement;

    var shadowPerspective = document.createElement("div");
    shadowPerspective.className = "perspective";
    shadowPerspective.style.webkitPerspectiveOrigin = shadowX + "% " + shadowY + "%";
    shadowPerspective.style.webkitPerspective = shadowDepth;

    var shadowCard = document.createElement("div");
    shadowCard.className = "shadow-card" + cardClass;

    var shadow = document.createElement("div");
    shadow.className = "shadow";
    shadow.style.width = (card.offsetWidth - 10) + "px";
    shadow.style.height = (card.offsetHeight - 10) + "px";

    shadowCollection.insertBefore(shadowPerspective, shadowCollection.childNodes[0]);
    shadowPerspective.appendChild(shadowCard);
    shadowCard.appendChild(shadow);

    // Create shadow gradient elements.
    var shadowGradientPerspective = document.createElement("div");
    shadowGradientPerspective.className = "perspective";
    shadowGradientPerspective.style.webkitPerspectiveOrigin = shadowX + "% " + shadowY + "%";
    shadowGradientPerspective.style.webkitPerspective = shadowDepth;

    var shadowCardGradient = document.createElement("div");
    shadowCardGradient.className="shadow-card-gradient" + cardClass;

    var shadowGradient = document.createElement("div");
    shadowGradient.className="shadow-gradient";
    shadowGradient.style.width = (card.offsetWidth - 10) + "px";
    shadowGradient.style.height = (card.offsetHeight - 10) + "px";

    shadowCard.style.transform = card.style.transform;
    shadowCardGradient.style.transform = card.style.transform;

    shadowCollection.insertBefore(shadowGradientPerspective, shadowCollection.childNodes[0]);
    shadowGradientPerspective.appendChild(shadowCardGradient);
    shadowCardGradient.appendChild(shadowGradient); 
  }
}
