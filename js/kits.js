let myImage = document.getElementById('pearce');
let myImage2 = document.getElementById('wright');
let myImage3 = document.getElementById('rosario');
let myImage4 = document.getElementById('fowler');
let myImage5 = document.getElementById('becks');
let myImage6 = document.getElementById('james');
let myImage7 = document.getElementById('ruud');
let myImage8 = document.getElementById('bright');
let myImage9 = document.getElementById('jurgen');

function pearceImg() {
  if (myImage.src.match('images/pearce.jpg')) {
    myImage.src = "images/forest.jpg";
  } else {
    myImage.src = 'images/pearce.jpg';
  }
}

function wrightImg() {
  if (myImage2.src.match('images/wright.jpg')) {
    myImage2.src = "images/arsenalAway.jpg";
  } else {
    myImage2.src = 'images/wright.jpg';
  }
}

function rosarioImg() {
  if (myImage3.src.match('images/roberto.png')) {
    myImage3.src = "images/cov.jpg";
  } else {
    myImage3.src = 'images/roberto.png';
  }
}

function fowlerImg() {
  if (myImage4.src.match('images/fowler.jpg')) {
    myImage4.src = "images/livAway.jpg";
  } else {
    myImage4.src = 'images/fowler.jpg';
  }
}

function becksImg() {
  if (myImage5.src.match('images/becks.jpg')) {
    myImage5.src = "images/manuAway.jpg";
  } else {
    myImage5.src = 'images/becks.jpg';
  }
}

function jamesImg() {
  if (myImage6.src.match('images/dJames.jpg')) {
    myImage6.src = "images/livGk.jpg";
  } else {
    myImage6.src = 'images/dJames.jpg';
  }
}

function ruudImg() {
  if (myImage7.src.match('images/ruud.jpg')) {
    myImage7.src = "images/chelseaAway.jpg";
  } else {
    myImage7.src = 'images/ruud.jpg';
  }
}

function brightImg() {
  if (myImage8.src.match('images/bright.jpg')) {
    myImage8.src = "images/sheffW.jpg";
  } else {
    myImage8.src = 'images/bright.jpg';
  }
}

function jurgenImg() {
  if (myImage9.src.match('images/jurgenKit.jpg')) {
    myImage9.src = "images/spursAway.jpg";
  } else {
    myImage9.src = 'images/jurgenKit.jpg';
  }
}

pearce.addEventListener('click', pearceImg);
wright.addEventListener('click', wrightImg);
rosario.addEventListener('click', rosarioImg);
fowler.addEventListener('click', fowlerImg);
becks.addEventListener('click', becksImg);
james.addEventListener('click', jamesImg);
ruud.addEventListener('click', ruudImg);
bright.addEventListener('click', brightImg);
jurgen.addEventListener('click', jurgenImg);
