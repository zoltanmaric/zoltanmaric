var volumemeter = require('../')
var getusermedia = require('getusermedia')

var progress = document.querySelector('#progress');
var progressMax = document.querySelector('#progress-max');
var progressText = document.querySelector('#progress-text');

var maxLevel = 0;

getusermedia({ audio: true, video: false }, function (err, stream) {
  if (err) return console.error(err)

  var ctx = new AudioContext

  var meter = volumemeter(ctx, function (volume) {
    progress.style.width = volume + '%';
    if (volume > maxLevel) {
      maxLevel = Math.round(volume);
      progressText.textContent = maxLevel;
      progressMax.style.width = volume + '%';
    }
  });
  
  var src = ctx.createMediaStreamSource(stream);
  src.connect(meter);
  src.connect(ctx.createGain());

  stream.onended = function () {
    meter.stop()
  }
})
