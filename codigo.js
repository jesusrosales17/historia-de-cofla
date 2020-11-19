let tp="100 minutos de hacer trabajos practicos";
let estudio="100 minutos de estudio";
let trabajo="240 minutos de trabajo";
let homework="30 minutos de cosas de la casa";
let descanso="10 minutos de descanso";
console.log("tareas");
for(i=0;i<14;i++){
    if(i==0){
        console.group("semana 1");
    }
 console.groupCollapsed(`dia ${i+1}:`);
 console.log(tp);
 console.log(estudio);
 console.log(trabajo);
 console.log(homework);
 console.log(descanso); 
 console.groupEnd();  
 if(i==6){
     
         console.groupEnd();
         console.group("semana 2");
     
 }
}
