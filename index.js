let fecha = document.getElementById('fecha')
let enviar = document.getElementById('enviar')
let tempMin = document.getElementById('tempMin')
let tempMax = document.getElementById('tempMax')
let fechareg = document.getElementById('fechareg')
let clima = document.getElementById('clima')
let clima2 = document.getElementById('clima2')
let clima3 = document.getElementById('clima3')
let clima4 = document.getElementById('clima4')
let nuevo = document.getElementById('nuevo')
let conditions = document.getElementById('conditions')

var today = new Date().toISOString().slice(0,10);


nuevo.addEventListener('click',function(evento){
    enviar.disabled = false
    fecha.innerHTML = "";
    tempMin.innerHTML = "";
    tempMax.innerHTML = "";
    fechareg.innerHTML = "";
    clima.innerHTML = "";
    clima2.innerHTML = "";
    clima3.innerHTML = "";
    clima4.innerHTML = "";
    conditions.innerHTML ="";
    }
)


enviar.addEventListener('click',function(evento){
    evento.preventDefault();
   if (fecha.value === today)
    {
        setTimeout(()=>{
    fechareg.innerHTML = fecha.value
    const climas = ['Despejado &#xf00d;','Nublado &#xf001;','Lluvioso &#xf017;'];
    const climaM = climas[Math.floor(Math.random() * climas.length)];
    const climaT= climas[Math.floor(Math.random() * climas.length)];
    const climaN = climas[Math.floor(Math.random() * climas.length)];
    const newclimaM = climaM.substring(0, climaM.indexOf('&'));
    const newclimaM0 = climaM.substring(climaM.indexOf('&'));
    const newclimaT = climaT.substring(0, climaT.indexOf('&'));
    const newclimaT0 = climaT.substring(climaT.indexOf('&'));
    const newclimaN = climaN.substring(0, climaN.indexOf('&'));
    const newclimaN0 = climaN.substring(climaN.indexOf('&'));
    clima.innerHTML = "Mañana " + newclimaM;
    clima3.innerHTML = "Tarde " + newclimaT;
    clima2.innerHTML = "Noche " + newclimaN;
    conditions.innerHTML = newclimaM0 + " " + newclimaT0 + " " + newclimaN0;
        function randomTempMax(){
            var min = 9;
            var max = 30;
            return Math.floor(Math.random()*(+max - +min) + +min);
        }
    tempMax.innerHTML = "Max " + randomTempMax() +"°C"
        function randomTempMin(){
            var min = 5;
            var max = 8;
            return Math.floor(Math.random()*(+max - +min) + +min);
        }
    tempMin.innerHTML = "Min " + randomTempMin() +"°C"
        },1000)
        enviar.disabled = true}
    
    else if(fecha.value != today)
        {
            setTimeout(()=>{
        fechareg.innerHTML = fecha.value;
        const climas = ['Despejado &#xf00d;','Nublado &#xf001;','Lluvioso &#xf017;'];
        const climaM1 = climas[Math.floor(Math.random() * climas.length)];
        const newclimaM1 = climaM1.substring(0, climaM1.indexOf('&'));
        const newclimaM2 = climaM1.substring(climaM1.indexOf('&'));
        clima4.innerHTML = "Mañana " + newclimaM1;
        conditions.innerHTML = newclimaM2;
        function randomTempMax(){
            var min = 9;
            var max = 30;
            return Math.floor(Math.random()*(+max - +min) + +min);
        }
        tempMax.innerHTML = "Max " + randomTempMax() +"°C"
        function randomTempMin(){
            var min = 5;
            var max = 8;
            return Math.floor(Math.random()*(+max - +min) + +min);
        }
        tempMin.innerHTML = "Min " + randomTempMin() +"°C"
                
        },1000)
      
        
        enviar.disabled = true}

        else if(fecha.value == undefined || fecha.value == null || fecha.value == false
        || fecha.value == "" || fecha.value == 0  || fecha.value == -0  || fecha.value == 0n
        || fecha.value == Nan )
    {
        setTimeout(()=>{
        
            enviar.disabled = true
    },1000)
    }      
    
}

)




