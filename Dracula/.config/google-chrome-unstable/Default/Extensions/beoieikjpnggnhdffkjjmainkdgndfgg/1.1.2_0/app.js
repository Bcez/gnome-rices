var sticky = {};
var is_menu = true;
sticky.colors = ['#E74C3C','#E67E22','#FFCD02','#34495E','#2B2B2B','#9B59B6','#3A6F81','#3498DB','#1F7FB1','#2ECC71','#1ABC9C','#345F41','#745EC5','#5E4534','#5E345E','#EF717A','#A5C63B','#79302A','#5065A1'];
sticky.header = document.getElementsByClassName('header')[0];
sticky.note = document.getElementsByClassName('note')[0];
sticky.new = document.getElementsByClassName('new')[0];
sticky.menu_new = document.getElementById('new');
sticky.menu = document.getElementsByClassName('menu')[0];
sticky.menu_bar = document.getElementsByClassName('menu_bar')[0];

sticky.exit = document.getElementById('exit');
sticky.copy = document.getElementById('copy');
sticky.cut = document.getElementById('cut');
sticky.paste = document.getElementById('paste');
// helper function
sticky.LightenDarkenColor = function(col, amt) {

    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

};



sticky.random = Math.floor(Math.random() * sticky.colors.length);
sticky.bgColor = function(col) {
  var color = col;
  this.header.style.backgroundColor = color;
  document.getElementsByClassName('drag')[0].style.backgroundColor = color;
  this.note.style.backgroundColor = this.LightenDarkenColor(color, 20);
  this.new.style.backgroundColor = color;
  this.note.focus();
};
sticky.init = function() {
  sticky.bgColor(sticky.colors[sticky.random]);
};


// new window
sticky.newWindow = function () {
  chrome.app.window.create('index.html', {
    "width": 400,
  	"height": 400,
    frame: 'none'
	});
};
sticky.new.addEventListener('click', function() {
  sticky.newWindow();
}, false);
sticky.menu_new.addEventListener('click', function() {
  sticky.newWindow();
  sticky.menu.style.display = "none";
  is_menu = true;
}, false);

sticky.init();

// copy cut actions
sticky.getSelectedText = function() {
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
    return text;
};
window.addEventListener('mousedown', function() {
 if (!sticky.getSelectedText()) {
   sticky.copy.style.color = "#CCC";
   sticky.copy.style.cursor = "not-allowed";
   sticky.cut.style.color = "#CCC";
   sticky.cut.style.cursor = "not-allowed";
 } else {
   sticky.copy.style.color = "#444";
   sticky.copy.style.cursor = "pointer";
   sticky.cut.style.color = "#444";
   sticky.cut.style.cursor = "pointer";
 }
}, false);

// Menu
sticky.toggleMenu = function() {
  if (is_menu) {
    sticky.menu.style.display = "block";
    is_menu = false;
  } else {
    sticky.menu.style.display = "none";
    is_menu = true;
  }
};
sticky.menu_bar.addEventListener("mousedown", function() {
  sticky.toggleMenu();
}, false);
sticky.note.addEventListener("mousedown", function() {
  sticky.menu.style.display = "none";
  is_menu = true;
}, false);
document.getElementsByClassName('title')[0].addEventListener("mousedown", function() {
  sticky.menu.style.display = "none";
  is_menu = true;
}, false);
document.getElementsByClassName('drag')[0].addEventListener("mousedown", function() {
  sticky.menu.style.display = "none";
  is_menu = true;
}, false);
sticky.new.addEventListener("mousedown", function() {
  sticky.menu.style.display = "none";
  is_menu = true;
}, false);


// Menu actions
sticky.copy.addEventListener('mousedown', function() {
  document.execCommand('copy');
  sticky.menu.style.display = "none";
  is_menu = true;
}, false);
sticky.cut.addEventListener('mousedown', function() {
  document.execCommand('cut');
  sticky.menu.style.display = "none";
  is_menu = true;
}, false);
sticky.exit.addEventListener('mousedown', function() {
  window.close();
  sticky.menu.style.display = "none";
  is_menu = true;
}, false);
/*make color work*/
document.getElementById('bgColor').addEventListener('change', function() {
  sticky.bgColor(this.value);
  if (this.value == '#ffffff') {
    sticky.new.style.background = '#CCC';
    sticky.menu_bar.style.background = '#CCC';
  } else {
    sticky.bgColor(this.value);
    sticky.menu_bar.style.background = sticky.new.style.background;
  }
}, false);
document.getElementById('fontColor').addEventListener('change', function() {
  sticky.note.style.color = this.value;
  sticky.header.style.color = this.value;
}, false);

// contextmenu
window.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  sticky.menu.style.display = "block";
  is_menu = false;
}, false);


// font-size
var font = 1.3;
document.getElementById('in').addEventListener('mousedown', function() {
  if (font <= 3.3) {
    font += 0.1;
    sticky.note.style.fontSize = font + "rem";
  }
}, false);
document.getElementById('de').addEventListener('mousedown', function() {
  if (font >= 1) {
    font -= 0.1;
    sticky.note.style.fontSize = font + "rem";
  }
}, false);

// keyboard event
window.addEventListener('keydown', function(e) {
  if (e.ctrlKey) {
      if (e.keyCode == 78) {
        sticky.newWindow();
      }
  }
  if (e.keyCode == 27) {
    alert("closing");
    window.close();
  }
}, false);
