let temp=[];
const celsiusInput = document.getElementById("input_celsius");
function registrar(){
    const celsius = parseFloat(celsiusInput.value);
    agregarTemp(celsius);
    mostrarTabla();
    celsiusInput.value ='';
}

function agregarTemp(celsius){
    if (isNaN(celsius)){
        alert("Ingrese una valor numerico");
    } else{
        const fahrenheit = (celsius * 9/5)+32;
        const kelvin = celsius + 273.15;
        temp.push({
            celsius : celsius,
            fahrenheit: fahrenheit,
            kelvin: kelvin,
        });
    }   
}

function mostrarTabla() {
    const tableBody = document.querySelector("#tabla tbody");
    let res = "";
    for (let i = 0; i < temp.length; i++) {
      res += `<tr>
        <td>${temp[i].celsius}</td>
        <td>${temp[i].fahrenheit}</td>
        <td>${temp[i].kelvin}</td>
      </tr>`;
    }
    tableBody.innerHTML = res;
    console.log(temp);
  }

  celsiusInput.addEventListener("keyup", function(event){

    if(event.key === 'Enter' && celsiusInput.value !==''){
        registrar();
    }
})
 