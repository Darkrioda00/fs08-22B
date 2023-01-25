const paragraph = document.getElementById("counter")

sessionStorage.setItem("counter", 0);

setInterval(function() {
  var currentCount = sessionStorage.getItem("counter");
  currentCount++;
  sessionStorage.setItem("counter", currentCount);
  console.log(currentCount);
  paragraph.innerText = currentCount
}, 1000);


