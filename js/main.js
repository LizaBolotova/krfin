function checkIfBoxFits() {
    var A = document.getElementById("sideA").value;
    var B = document.getElementById("sideB").value;
    var C = document.getElementById("sideC").value;
    var M = document.getElementById("doorM").value;
    var K = document.getElementById("doorK").value;
  
    if ((A <= M && B <= K) || (A <= K && B <= M) || (A <= M && C <= K) || (A <= K && C <= M) || (B <= M && C <= K) || (B <= K && C <= M)) {
      document.getElementById("result").innerHTML = "Коробка пройдет через дверь.";
    } else {
      document.getElementById("result").innerHTML = "Коробка не пройдет через дверь.";
    }
  }
  