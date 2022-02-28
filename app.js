function calculate() {
  var l = document.getElementById("heigth").value;

  var w = document.getElementById("width").value;

  var area = Number(l) * Number(w);
  var perimeter = area * 2;

  document.getElementById("area").innerHTML = "Area - " + area.toFixed(2) + "(cm/m)";
  document.getElementById("perimeter").innerHTML =
    "Perimeter - " + perimeter.toFixed(2) + "(cm/m)";
}

function circle() {
  var r = document.getElementById("raio").value;

  var area = 3.14 * (Number(r) * Number(r));
  var perimeter = 2 * 3.14 * Number(r);

  document.getElementById("area-circle").innerHTML =
    "Area --- " + area.toFixed(2) + "(cm/m)";
  document.getElementById("perimeter-circle").innerHTML =
    "Perimeter -- " + perimeter.toFixed(2) + "(cm/m)";
}

function triangle() {
  var h = document.getElementById("heigth-triangle").value;

  var b = document.getElementById("width-triangle").value;

  var area = (Number(b) * Number(h)) / 2;
  var perimeter = Number(b) * 3;

  document.getElementById("area_triangle").innerHTML =
    "Area " + area.toFixed(2) + "(cm/m)";
  document.getElementById("perimeter_triangle").innerHTML =
    "Perimeter " + perimeter.toFixed(2) + "(cm/m)";
}
$(document).ready(function () {
  //Fade in delay for the background overlay (control timing here)
  $("#bkgOverlay").delay(2400).fadeIn(400);
  //Fade in delay for the popup (control timing here)
  $("#delayedPopup").delay(1600).fadeIn(400);

  //Hide dialouge and background when the user clicks the close button
  $("#btnClose").click(function (e) {
    HideDialog();
    e.preventDefault();
  });
  $(".backgroundOverlay").click(function (e) {
    HideDialog();
    e.preventDefault();
  });
});

function HideDialog() {
  $("#bkgOverlay").fadeOut(400);
  $("#delayedPopup").fadeOut(300);
}
