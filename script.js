//Função formar array manualmente
function manual() {
  
    ///Atribuição de variáveis
    const nums1 = [];
    var i = 0;
  
    //Inserir números manualmente
    for (let j = 0; j < 10; j++) {
      let nb = prompt("Insira o " + (j + 1) + "º número inteiro: ");
      nums1.push(parseInt(nb));
      
    //Verigicar se o carater inserido é um número inteiro
    if (isNaN(nb)) {
      alert("Por favor insira um número inteiro.")
      return;
    }
  }
  
    //Esconder h3 e h4
    document.querySelector("table").style.display = "none";
  
    //Intervalo de tempo entre outputs
    var interval = setInterval(function() {
      nums1.push();
  
      var output = '';
  
      var n3 = 3;
      var n5 = 5;
  
      if (nums1[i] % n3 == 0 && nums1[i] % n5 == 0) {
        output = "FizzBuzz ";
        document.body.style.backgroundColor = "skyblue";
      }
      else if (nums1[i] % n3 == 0) {
        output = "Fizz ";
        document.body.style.backgroundColor = "green";
      }
      else if (nums1[i] % n5 == 0) {
        output = "Buzz ";
        document.body.style.backgroundColor = "orangered";
      }
      else {
        output = nums1[i] + " ";
        document.body.style.backgroundColor = "white";
      }
  
      document.getElementById("output").innerHTML += output;
      i++;
  
      if (i === 10) {
        clearInterval(interval);
      }
    }, 1000);
  
  }
  
  //Função formar array aleatoriamente
  function aleatorio() {
    //Atribuição de variáveis
    const numb2 = [];
    var i = 0;
  
    //Esconder h3 e h4
    document.querySelector("table").style.display = "none";
  
    //Intervalo de tempo entre outputs
    var interval = setInterval(function() {
      numb2.push(Math.floor(Math.random() * 201) - 100);
  
      var output = '';
  
      var n3 = 3;
      var n5 = 5;
  
      if (numb2[i] % n3 == 0 && numb2[i] % n5 == 0) {
        output = "FizzBuzz ";
        document.body.style.backgroundColor = "skyblue";
      }
      else if (numb2[i] % n3 == 0) {
        output = "Fizz ";
        document.body.style.backgroundColor = "green";
      }
      else if (numb2[i] % n5 == 0) {
        output = "Buzz ";
        document.body.style.backgroundColor = "orangered";
      }
      else {
        output = numb2[i] + " ";
        document.body.style.backgroundColor = "white";
      }
  
      document.getElementById("output").innerHTML += output;
      i++;
  
      if (i === 20) {
        clearInterval(interval);
      }
    }, 1000);
    
  }