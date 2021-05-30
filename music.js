var music = {
   overworld: new Howl({
      src: [
         "excitedmusic.mp3"
      ]
   })
}

class idk {
   boost() {
      sfx.boost.play();
   }
}

(function() {
   document.querySelector(".play-music").addEventListener("click", () => {
      if (!music.overworld.playing()) {
         music.overworld.play();
      }
   })
   document.querySelector(".stop-music").addEventListener("click", () => {
       music.overworld.pause();
   })
   
})();

