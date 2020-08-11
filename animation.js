var i = 0;
function change() {
  var doc = document.getElementById("World");
  var font = [
    "Impact, sans-serif",
    "Chilanka, sans-serif",
    "Kaushan Script, sans-serif",
    "Rowdies, sans-serif",
    "Satisfy, sans-serif",
  ];
  doc.style.fontFamily = font[i];
  i = (i + 1) % font.length;

  //   doc.style.fontFamily = "Satisfy, sans-serif";
  //   document.getElementById("World").style.fontFamily =
  //     "Impact,Charcoal,sans-serif";
}
setInterval(change, 1000);
