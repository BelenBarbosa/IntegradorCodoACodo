
  function costoEntradas() {
    let numeroDeEntradas,
      total,
      categoria,
      entradaEstudiante,
      entradaTrainee,
      entradaJunior,
      entradaGeneral;
  

    numeroDeEntradas = document.getElementById('inputNumeroDeEntradas').value;
    categoria = document.getElementById('inputCategoria').value;
  
  

    //Calculo precio de entradas
    entradaEstudiante = 200 - (200 * 80) / 100;
    entradaTrainee = 200 - (200 * 50) / 100;
    entradaJunior = 200 - (200 * 15) / 100;
    entradaGeneral = 200;
  
   
    if (numeroDeEntradas > 0 && !isNaN(numeroDeEntradas) && numeroDeEntradas % 1 == 0) {
    
      if (categoria == 'Estudiante') {
        total = entradaEstudiante * numeroDeEntradas;
        document.getElementById('precioFinal').innerHTML =
          'Total a Pagar: \u0024' + total;
      } else if (categoria == 'Trainee') {
        total = entradaTrainee * numeroDeEntradas;
        document.getElementById('precioFinal').innerHTML =
          'Total a Pagar: \u0024' + total;
      } else if (categoria == 'Junior') {
        total = entradaJunior * numeroDeEntradas;
        document.getElementById('precioFinal').innerHTML =
          'Total a Pagar: \u0024' + total;
      } else if (categoria == 'General') {
        total = entradaGeneral * numeroDeEntradas;
        document.getElementById('precioFinal').innerHTML =
          'Total a Pagar: \u0024' + total;
      }
    } else {
      window.alert('Debe ingresar la cantidad de entradas en números enteros');
    }
  }
  
  function borrar() {
    document.getElementById('inputNombre').value = ' ';
    document.getElementById('inputApellido').value = ' ';
    document.getElementById('inputEmail').value = ' ';
    document.getElementById('inputNumeroDeEntradas').value = ' ';
    document.getElementById('inputCategoria').value = 'Estudiante';
    document.getElementById('precioFinal').innerHTML = 'Total a Pagar: \u0024';
  }