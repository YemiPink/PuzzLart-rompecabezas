function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}
var musica = new sound("music.mp3");
musica.sound.loop = true;
var waiting = true;
addEventListener("keydown", function(e){
    if(waiting){
        waiting = false;
        musica.play();
    }
});
