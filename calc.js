function operation() {
  var name = prompt("Enter Your Name");
  var crush = prompt("Enter Your crush's Name");

  if (name === "" && crush === "") {
    if (name == " " || crush == " ") {
      alert("IT is not valid, please enter your name");
    } else if (name == "  " || crush == "  ") {
      alert("IT is not valid, please enter your name");
    } else if (name == "   " || crush == "   ") {
      alert("IT is not valid, please enter your name");
    } else if (name == "    " || crush == "    ") {
      alert("IT is not valid, please enter your name");
    } else if (name == "     " || crush == "     ") {
      alert("IT is not valid, please enter your name");
    } else if (name == "      " || crush == "      ") {
      alert("IT is not valid, please enter your name");
    } else if (name == "       " || crush == "       ") {
      alert("IT is not valid, please enter your name");
    } else if (name == "        " || crush == "        ") {
      alert("IT is not valid, please enter your name");
    } else if (name == "         " || crush == "         ") {
      alert("IT is not valid, please enter your name");
    } else if (name == "          " || crush == "          ") {
      alert("IT is not valid, please enter your name");
    } else if (name == "           " || crush == "           ") {
      alert("IT is not valid, please enter your name");
    } else if (name == "            " || crush == "            ") {
      alert("IT is not valid, please enter your name");
    } else if (name == "             " || crush == "             ") {
      alert("IT is not valid, please enter your name");
    } else if (name == "              " || crush == "              ") {
      alert("IT is not valid, please enter your name");
    } else if (name == "               " || crush == "               ") {
      alert("IT is not valid, please enter your name");
    } else {
      function LoveCalc() {
        var LovePercentage = Math.random();
        LovePercentage = LovePercentage * 100;
        LovePercentage = Math.floor(LovePercentage) + 1;
        return LovePercentage;
      }
      document.getElementById("result").innerHTML =
        "Your love percentage is " + LoveCalc() + "%.";
    }
  } else {
    alert("It's ok if you don't want to calculate your love percentage.");
  }
}
