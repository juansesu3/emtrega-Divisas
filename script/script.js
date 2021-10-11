  //1. capturar entradas/inputs
  //2. validar entradas/inputs
  //3. logica - algoritmo
  //4. resultados del punto 3. (imprimir or retornar)

function convertorDivisas() {

  // capturar
  let cantidadDinero = Number(document.getElementById("cantidad-dinero").value);
  let divisaOrigen = document.getElementById("elige-moneda1").value;
  let divisaDestino = document.getElementById("elige-moneda2").value;

  //validar
  if (divisaOrigen == "elegir") {
    document.getElementById('resultado').value = 'Seleccione divisa origen ';
    //alert("ingrese divisa origen");
  }
  if (divisaDestino == "elegir") {
    document.getElementById('resultado').value = 'Seleccione divisa destino ';
  }
  if (Number.isNaN(cantidadDinero)) {
    document.getElementById('resultado').value = 'La cantida a convertir debe ser numerica.';
  }
  if (cantidadDinero==0){
    document.getElementById('resultado').value = 'Ingrese monto a cambiar ';
  }

//algoritmo
let res = convertor(cantidadDinero, divisaOrigen, divisaDestino);
function convertor(valor, origen, destino) {
  let trc = [1, 3828, 20.49, 0.86, 0.74];
  let resu;

  if (origen == "usd" && destino == "usd") {
    resu = (valor / 1) * trc[0] + ". usd";
  }
  if (origen == "usd" && destino == "cop") {
    resu = (valor / 1) * trc[1] + ". cop";
  }
  if (origen == "usd" && destino == "mex") {
    resu = (valor / 1) * trc[2] + ". mex";
  }
  if (origen == "usd" && destino == "euro") {
    resu = (valor / 1) * trc[3] + ". euro";
  }
  if (origen == "usd" && destino == "pound") {
    resu = (valor / 1) * trc[4] + ". pound";
  }

  if (origen == "cop" && destino == "usd") {
    resu = (valor / 3828) * trc[0] + ". usd";
  }
  if (origen == "cop" && destino == "cop") {
    resu = (valor / 1) * trc[0] + ". cop";
  }
  if (origen == "cop" && destino == "mex") {
    resu = (valor / 3828) * trc[2] + ". mex";
  }
  if (origen == "cop" && destino == "euro") {
    resu = (valor / 3828) * trc[3] + ". euro";
  }
  if (origen == "cop" && destino == "pound") {
    resu = (valor / 3828) * trc[4] + ". pound";
  }

  if (origen == "mex" && destino == "usd") {
    resu = (valor / 20.49) * trc[0] + ". usd";
  }
  if (origen == "mex" && destino == "cop") {
    resu = (valor / 20.49) * trc[1] + ". cop";
  }
  if (origen == "mex" && destino == "mex") {
    resu = (valor / 1) * trc[0] + ". mex";
  }
  if (origen == "mex" && destino == "euro") {
    resu = (valor / 20.49) * trc[3] + ". euro";
  }
  if (origen == "mex" && destino == "pound") {
    resu = (valor / 20.49) * trc[4] + ". pound";
  }

  if (origen == "euro" && destino == "usd") {
    resu = (valor / 0.86) * trc[0] + ". usd";
  }
  if (origen == "euro" && destino == "cop") {
    resu = (valor / 0.86) * trc[1] + ". cop";
  }
  if (origen == "euro" && destino == "mex") {
    resu = (valor / 0.86) * trc[2] + ". mex";
  }
  if (origen == "euro" && destino == "euro") {
    resu = (valor / 1) * trc[0] + ". euro";
  }
  if (origen == "euro" && destino == "pound") {
    resu = (valor / 0.86) * trc[4] + ". pound";
  }

  if (origen == "pound" && destino == "usd") {
    resu = (valor / 0.74) * trc[0] + ". usd";
  }
  if (origen == "pound" && destino == "cop") {
    resu = (valor / 0.74) * trc[1] + ". cop";
  }
  if (origen == "pound" && destino == "mex") {
    resu = (valor / 0.74) * trc[2] + ". mex";
  }
  if (origen == "pound" && destino == "euro") {
    resu = (valor / 0.74) * trc[3] + ". euro";
  }
  if (origen == "pound" && destino == "pound") {
    resu = (valor / 1) * trc[0] + ". pound";
  }

  return resu;
}
//resultado
let resultInput = document.getElementById("resultado");
resultInput.value = res;
}


  

