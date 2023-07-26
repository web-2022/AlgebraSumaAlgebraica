//Este desafío trata de crear 1000 ejercicios de suma algebraica de 2 números aleatorios con ayuda del while y for
// Creo una función para que al dar click en el boton, ejecute la operación
function practiquemos() {

    let peticion = prompt("Deseas practicar con 100 ejercicios. Escribe si o no. O tienes miedo")

    //Mientras el estudiante escriba SI
    while (peticion == "si") {
        document.write("<b>Practiquemos con los siguientes ejercicios resueltos:</b>" + "<br>" + "<br>")


        //Creo 1000 ejercicios para que el estudiante practique    
        for (let i = 1; i < 501; i++) {
            //Creo un número aleatorio entero menor a 10 (puede ser cualquier número) 
            let l = Math.floor(15 * Math.random())

            //Creo un número aleatorio entero menor a 10 (puede ser cualquier número) 
            let h = Math.floor(10 * Math.random())

            //Creo una variable para que reciba al resultado del ejercicio
            let j = -l - h

            //Creo una variable que recibirá un valor que será parte de la solución que se explica
            let k = l + h

            //Imprimo los ejercicios y la explicación de la solución
            document.write("Ejercicio " + i + ":" + "<br>" + "-" + l + " - " + h + " = " + "....." + " " + "; Solución: tenemos 2 números negativos " + " : " + "-" + l + " y " + "-" + h + ". ENTONCES SIGNOS IGUALES, SE SUMAN. " + l + " y " + h + ", suman " + k + " y le colocamos el mismo signo (-) por delante, obteniendo: " + j + "<br>" + "<br>")

        }

        //Agrego un comentario al final de los 100 ejercicios generados

        document.write("<br>" + "<b>¡Felicitaciones por haber llegado al final!</b>")


        break
    }

}

function ejerciciosCaso1 (){
    location.href = "ejerciciosCaso1.html"
}




function otroEjercicio (){
   
 
    for(i=2;i<5;i++){
    // Creando los ejercicios


         //Creo un número aleatorio entero menor a 10 (puede ser cualquier número) 
         let l = Math.floor(15 * Math.random())

         //Creo un número aleatorio entero menor a 10 (puede ser cualquier número) 
         let h = Math.floor(10 * Math.random())

         //Creo una variable para que reciba al resultado del ejercicio
         let j = -l - h

        // 1. Ejercicio
            const etiquetaH5 = document.createElement("h5");
            etiquetaH5.textContent = "Ejercicio "+i;
            etiquetaH5.classList.add("card-title");
            
            const parrafo = document.createElement("p");
            parrafo.textContent = "l";
            parrafo.classList.add("card-text");
            
            const div = document.createElement("div");
            div.classList.add("card-body");

            div.appendChild(etiquetaH5);
            div.appendChild(parrafo);
            
        // 2. Solución
        
            const etiquetaLi1 = document.createElement("li");
            etiquetaLi1.textContent = "Solución ";
            etiquetaLi1.classList.add("list-group-item");
            

            const etiquetaLi2 = document.createElement("li");
            etiquetaLi2.textContent = "Tenemos 2 números con signos iguales l y h ";
            etiquetaLi2.classList.add("list-group-item");
            

            const etiquetaLi3 = document.createElement("li");
            etiquetaLi3.textContent = "ENTONCES SIGNOS IGUALES, SE SUMAN l +  y  + h + , suman K";
            etiquetaLi3.classList.add("list-group-item");
            

            const etiquetaLi4 = document.createElement("li");
            etiquetaLi4.textContent = "y le Colocamos el mismo signo (-) por delante ";
            etiquetaLi4.classList.add("list-group-item");
            

            const etiquetaLi5 = document.createElement("li");
            etiquetaLi5.textContent = "obteniendo:"+"k";
            etiquetaLi5.classList.add("list-group-item");

            const lista = document.createElement("ul");
            lista.classList.add("list-group", "list-group-flush");

            lista.appendChild(etiquetaLi1);
            lista.appendChild(etiquetaLi2);
            lista.appendChild(etiquetaLi3);
            lista.appendChild(etiquetaLi4);
            lista.appendChild(etiquetaLi5);

        // 3. enlaces
            const etiquetaA1 = document.createElement("a");
            etiquetaA1.src = "href=#";
            etiquetaA1.textContent = "Ver teoría";
            etiquetaA1.classList.add("card-link");
            
            const etiquetaA2 = document.createElement("a");
            etiquetaA2.src = "href=#";
            etiquetaA2.textContent = "Dame una ayuda";
            etiquetaA2.classList.add("card-link");
           
            const div2 = document.createElement("div");
            div2.classList.add("card-body");

            div2.appendChild(etiquetaA1);
            div2.appendChild(etiquetaA2);
            
            // Crear el card
            const div3 = document.createElement("div");
            div3.classList.add("card");
            


            div3.appendChild(div);
            div3.appendChild(lista);
            div3.appendChild(div2);

            // Insertando todo en el HTML

            const contentTotal = document.querySelector(".card-group");

            contentTotal.appendChild(div3);
       
        
    }
}

























function volver (){
    location.href = "index.html"
}


function practiquemos2() {

    let peticion = prompt("Deseas practicar con 100 ejercicios. Escribe si o no. O tienes miedo")

    //Mientras el estudiante escriba SI
    while (peticion == "si") {
        document.write("<b>Practiquemos con los siguientes ejercicios resueltos:</b>" + "<br>" + "<br>")


        //Creo 1000 ejercicios para que el estudiante practique    
        for (let i = 1; i < 501; i++) {
            //Creo un número aleatorio entero menor a 10 (puede ser cualquier número) 
            let l = Math.floor(15 * (Math.random()-0.5))
            let absL = Math.abs(l)


            //Creo un número aleatorio entero menor a 10 (puede ser cualquier número) 
            let h = Math.floor(15 * (Math.random()-0.5))
            let absH = Math.abs(h)

            //Creo una variable para que reciba al resultado del ejercicio
            let j = l + h

            //Identifico entre l y j quien es el numero mayor y será igual a M

            let max = Math.max(absH,absL)
            let min = Math.min(absH,absL)
            let resta=max-min

            //Identifico el signo del numero mayor
            let signoM=Math.sign(max)
           // let signoM = Math.sign(M)

   //Imprimo los ejercicios y la explicación de la solución
          
         if(l!=h){
            document.write("Ejercicio " + i + ":" + "<br>" + l +h+" = " + "....." + " " + "; Solución: tenemos 2 números con signos diferentes " + " : " +  l + " y " + h + ". ENTONCES SIGNOS DIFERENTES, SE RESTAN DE MAYOR A MENOR. "+ max  +"-"+ min + ", la resta es " + resta + " y le colocamos el mismo signo del número mayor por delante, en este caso el número mayor entre"+absL+"y"+absH+"es"+max+"y su signo es"+"entonces colocamos este signo por delante de la resta, obteniendo: " + j + "<br>" + "<br>")

         }else{
            
         }
           

           

            
           
        }

        //Agrego un comentario al final de los 100 ejercicios generados

        document.write("<br>" + "<b>¡Felicitaciones por haber llegado al final!</b>")


        break
    }

}


