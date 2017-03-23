// Animation key frames for timing function cubic-bezier(0.3, 0.6, 0.1, 1.0)
var frames = [0.0, 0.235, 0.55, 0.765, 0.87, 0.925, 0.96, 0.98, 0.991, 0.997, 1.0];

function opacityAnimationShadow(card, from, to) {
  var keyframes = "@keyframes smooth-" + card.shadowId + "-shadow {";
  for (var i = 0; i < frames.length; i++) {
    var angle = from + (to - from) * frames[i];
    var opacity = 1.0 - (Math.abs(Math.sin(angle / 180 * Math.PI)) * 0.8 + 0.0001).toFixed(4);
    var shadowKeyFrame = (i * 10) + "% { opacity: " + opacity + "; animation-timing-function: linear; }";
    keyframes += shadowKeyFrame;
  }
  keyframes += "}";

  // This method will certainly boost the size of stylesheets, it needs fixing.
  if(document.styleSheets && document.styleSheets.length > 2) {
    document.styleSheets[2].insertRule(keyframes, document.styleSheets[2].cssRules.length);
  } else {
    var s = document.createElement('style');
    s.innerHTML = keyframes;
    document.getElementsByTagName('head')[0].appendChild(s);
  }
  return "smooth-" + card.shadowId + "-shadow ";
}

function opacityAnimationShadowGradient(card, from, to) {
  var keyframes = "@keyframes smooth-" + card.shadowId + "-shadow-gradient {";
  for (var i = 0; i < frames.length; i++) {
    var angle = from + (to - from) * frames[i];
    var opacity = (Math.abs(Math.sin(angle / 180 * Math.PI)) * 0.8 + 0.0001).toFixed(4);;
    var shadowKeyFrame = (i * 10) + "% { opacity: " + opacity + "; animation-timing-function: linear; }";
    keyframes += shadowKeyFrame;
  }
  keyframes += "}";

  // This method will certainly boost the size of stylesheets, it needs fixing.
  if( document.styleSheets && document.styleSheets.length > 2) {
    document.styleSheets[2].insertRule(keyframes, document.styleSheets[2].cssRules.length);
  } else {
    var s = document.createElement('style');
    s.innerHTML = keyframes;
    document.getElementsByTagName('head')[0].appendChild(s);
  }
  return "smooth-" + card.shadowId + "-shadow-gradient ";

}

function rotateCard(card, duration, from, to) {
  if (from == to)
    return;
  var actualTo = to - 0.1 * Math.sign(to - from);
  console.log(from + " ====> " + actualTo);
  var distance = window.getComputedStyle(card).getPropertyValue("transform-origin").split(" ")[0];
  var transform = "translateZ(" + distance + ") rotateY(" + actualTo + "deg)";
  var transition = "transform " + duration + "ms cubic-bezier(0.3, 0.6, 0.1, 1.0)";
  var shadowAnimation = opacityAnimationShadow(card, from, to) + (duration / 180 * Math.abs(from - to)).toFixed(1) + "ms";
  var shadowGradientAnimation = opacityAnimationShadowGradient(card, from, to) + (duration / 180 * Math.abs(from - to)).toFixed(1) + "ms";

  var collection = card.parentElement.parentElement;
  var shadowCard = collection.querySelectorAll('div.shadow-card')[0];
  var shadowCardGradient = collection.querySelectorAll('div.shadow-card-gradient')[0];
  var shadow = collection.querySelectorAll('div.shadow')[0];
  var shadowGradient = collection.querySelectorAll('div.shadow-gradient')[0];

  card.style.transform = "translateZ(" + distance + ") rotateY(" + from + "deg)";
  shadowCard.style.transform = card.style.transform;
  shadowCardGradient.style.transform = card.style.transform;
  shadowCard.style.animation = "";
  shadowCardGradient.style.animation = "";
  document.body.offsetTop;

  card.style.transform = transform;
  card.style.transition = transition;
  shadowCard.style.transform = transform;
  shadowCard.style.transition = transition;
  shadowCard.style.animation = shadowAnimation;
  shadowCard.style.opacity = 0.8001;

  shadowCardGradient.style.transform = transform;
  shadowCardGradient.style.transition = transition;
  shadowCardGradient.style.animation = shadowGradientAnimation;
  shadowCardGradient.style.opacity = 0;
}

function rotateY0(card, duration) {
  var current = window.getComputedStyle(card).transform;
  var cosFrom = parseFloat(current.split(',')[10]);
  var from = (Math.acos(cosFrom) / Math.PI * 180) % 360;
  rotateCard(card, duration, from, 0);
  card.setAttribute('rotation', '0');
}

function rotateY180(card, duration) {
  var current = window.getComputedStyle(card).transform;
  var cosFrom = parseFloat(current.split(',')[10]);
  var from = (Math.acos(cosFrom) / Math.PI * 180) % 360;
  rotateCard(card, duration, from, 180);
  card.setAttribute('rotation', '180');
}
