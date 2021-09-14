window.onload = function () {
  const first = document.getElementById("first");
  const second = document.getElementById("second");
  const third = document.getElementById("last");

  //   adding hovering color changing effect with mousehover
  //   first class
  first.addEventListener("mouseenter", function () {
    const colorArr = ["#4dd2ff", "#80b3ff", "#ff66b3", "#bfff80", "#ffa366"];
    randomNumber = Math.floor(Math.random() * 5);
    first.style.backgroundColor = colorArr[randomNumber];
  });
  first.addEventListener("mouseout", function () {
    first.style.backgroundColor = "#00ccff";
  });
  //   second class
  second.addEventListener("mouseenter", function () {
    const colorArr = ["#4dd2ff", "#80b3ff", "#ff66b3", "#bfff80", "#ffa366"];
    randomNumber = Math.floor(Math.random() * 5);
    second.style.backgroundColor = colorArr[randomNumber];
  });
  second.addEventListener("mouseout", function () {
    second.style.backgroundColor = "#3333cc";
  });
  //   last class
  third.addEventListener("mouseenter", function () {
    const colorArr = ["#4dd2ff", "#80b3ff", "#ff66b3", "#bfff80", "#ffa366"];
    randomNumber = Math.floor(Math.random() * 5);
    third.style.backgroundColor = colorArr[randomNumber];
  });
  third.addEventListener("mouseout", function () {
    third.style.backgroundColor = "#ffff00";
  });
};
