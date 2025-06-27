let input = document.getElementById("input");
let output = document.getElementById("output");
let converter = document.getElementById("converter");

converter.addEventListener("click", (e) => {
  e.preventDefault();
  let valorEmBits = 0;

  if (!/^[01]+$/.test(input.value)) {
    alert("Digite apenas numeros binarios");
  } else {
    for (let i = 0; i < input.value.length; i++) {
      if (input.value[i] === "1") {
        valorEmBits += Math.pow(2, input.value.length - 1 - i);
      }
    }

    output.textContent = valorEmBits;
    console.log(input.value);
  }
});
