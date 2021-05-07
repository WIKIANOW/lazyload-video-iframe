function wikianowLazyVideo(div) {
    var video = document.createElement('video');
    video.setAttribute(
      'src',
      'https://cloud.phucuong13029x.workers.dev/0:/' + div.dataset.id); //edit link hosting
    video.setAttribute('controls', ''); //properties can be changed or deleted
    video.setAttribute('uk-video', ''); //properties can be changed or deleted
    div.parentNode.replaceChild(video, div);
  }

  function initVideos() {
    var playerElements = document.getElementsByClassName('video-player');
    for (var n = 0; n < playerElements.length; n++) {
      var videoId = playerElements[n].dataset.id;
      var div = document.createElement('div');
      div.setAttribute('data-id', videoId);
      var thumbNode = document.createElement('img');
      thumbNode.src = playerElements[n].dataset.image;
      div.appendChild(thumbNode);
      var playButton = document.createElement('div');
      playButton.setAttribute('class', 'play');
      div.appendChild(playButton);
      div.onclick = function () {
        wikianowLazyVideo(this);
      };
      playerElements[n].appendChild(div);
    }
  }

  document.addEventListener('DOMContentLoaded', initVideos);
