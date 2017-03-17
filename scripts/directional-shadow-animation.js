function opacityAnimationShadow(from, to) {
  return "smooth-" + from + "-to-" + to + "-transform-shadow ";
}

function opacityAnimationShadowGradient(from, to) {
  return "smooth-" + from + "-to-" + to + "-transform-shadow-gradient ";
}

function opacityAnimationShadows(from, to) {
  return "ssmooth-" + from + "-to-" + to + "-transform-shadow ";
}

function opacityAnimationShadowGradients(from, to) {
  return "ssmooth-" + from + "-to-" + to + "-transform-shadow-gradient ";
}

function rotateCard(card, duration, from, to) {
  var actualTo = to - 0.1;
  var distance = window.getComputedStyle(card).getPropertyValue("transform-origin").split(" ")[0];
  var transform = "translateZ(" + distance + ") rotateY(" + actualTo + "deg)";
  var transition = "transform " + duration + "ms cubic-bezier(0.6, 0, 0.4, 1.0)";

  var shadowAnimation = opacityAnimationShadow(from, to) + duration + "ms";
  var shadowGradientAnimation = opacityAnimationShadowGradient(from, to) + duration + "ms";

  card.style.transform = transform;
  card.style.transition = transition;

  var collection = card.parentElement.parentElement;
  var shadowCard = collection.querySelectorAll('div.shadow-card')[0];
  var shadowCardGradient = collection.querySelectorAll('div.shadow-card-gradient')[0];
  var shadow = collection.querySelectorAll('div.shadow')[0];
  var shadowGradient = collection.querySelectorAll('div.shadow-gradient')[0];

  shadowCard.style.animation = "";
  shadowCardGradient.style.animation = "";
  document.body.offsetTop;

  shadowCard.style.transform = transform;
  shadowCard.style.transition = transition;
  shadowCard.style.animation = shadowAnimation;

  shadowCardGradient.style.transform = transform;
  shadowCardGradient.style.transition = transition;
  shadowCardGradient.style.animation = shadowGradientAnimation;
}

function rotateY0(card, duration) {
  var from = card.getAttribute('rotation');
  rotateCard(card, duration, from, 0);
  card.setAttribute('rotation', '0');
}

function rotateY180(card, duration) {
  var from = card.getAttribute('rotation');
  rotateCard(card, duration, 0, 180);
  card.setAttribute('rotation', '180');
}

function rotateCards(card, duration, from, to) {
  var actualTo = to - 0.1;
  var distance = window.getComputedStyle(card).getPropertyValue("transform-origin").split(" ")[0];
  var transform = "translateZ(" + distance + ") rotateY(" + actualTo + "deg)";
  var transition = "transform " + duration + "ms cubic-bezier(0.3, 0.6, 0.1, 1.0)";

  var shadowAnimation = opacityAnimationShadows(from, to) + duration + "ms";
  var shadowGradientAnimation = opacityAnimationShadowGradients(from, to) + duration + "ms";

  card.style.transform = transform;
  card.style.transition = transition;

  var collection = card.parentElement.parentElement;
  var shadowCard = collection.querySelectorAll('div.shadow-card')[0];
  var shadowCardGradient = collection.querySelectorAll('div.shadow-card-gradient')[0];
  var shadow = collection.querySelectorAll('div.shadow')[0];
  var shadowGradient = collection.querySelectorAll('div.shadow-gradient')[0];

  shadowCard.style.animation = "";
  shadowCardGradient.style.animation = "";
  document.body.offsetTop;

  shadowCard.style.transform = transform;
  shadowCard.style.transition = transition;
  shadowCard.style.animation = shadowAnimation;

  shadowCardGradient.style.transform = transform;
  shadowCardGradient.style.transition = transition;
  shadowCardGradient.style.animation = shadowGradientAnimation;
}

function rotateY0s(card, duration) {
  var from = card.getAttribute('rotation');
  rotateCards(card, duration, from, 0);
  card.setAttribute('rotation', '0');
}

function rotateY180s(card, duration) {
  var from = card.getAttribute('rotation');
  rotateCards(card, duration, 0, 180);
  card.setAttribute('rotation', '180');
}
