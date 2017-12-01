
let progressMax = document.querySelector('#progress-max');
let progressText = document.querySelector('#progress-text');
let progressImage = document.querySelector('#progress-image');

let params = new URLSearchParams(window.location.search);
let category = params.get('category');

console.log('category: ' + category);

var categoryMaxScore = 0;
let categoryMaxScoreString = getCookie(category + '.maxScore');
if (categoryMaxScoreString)
  categoryMaxScore = Number(categoryMaxScoreString);

let bestImageUrl = decodeURIComponent(getCookie(category + '.bestImageUrl'));

console.log('category max score: ' + categoryMaxScore);
console.log('best image URL: ' + bestImageUrl);

progressImage.src = bestImageUrl;
progressText.textContent = (categoryMaxScore / 20).toFixed(1);
progressMax.style.width = categoryMaxScore + '%';
