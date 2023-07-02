  

    const boxUno = document.getElementById("boxUno");
    const boxDos = document.getElementById("boxDos");
    const boxTres = document.getElementById("boxTres");
    const boxCuatro = document.getElementById("boxCuatro");
    const h2Key = document.getElementById("key");
    
    
    const cambiarColor = (box) => {
         box.srcElement.style.backgroundColor ="black";
    
        }

    
    boxUno.addEventListener("click", cambiarColor);
    boxDos.addEventListener("click", cambiarColor); 
    boxTres.addEventListener("click", cambiarColor);
    boxCuatro.addEventListener("click", cambiarColor);



   
    function createDiv(color){
        const newDiv = document.createElement("div")
        newDiv.style.height = "200px";
        newDiv.style.width = "200px";
        newDiv.style.border = "1px solid black";
        newDiv.style.backgroundColor = color;
        document.body.appendChild(newDiv)
    
     
    }



    document.addEventListener('keydown', function (event) {
        if (event.key === 'a') {key.style.backgroundColor = "#ffc0cb"
        /* Cambiar a color 1 */
        } else if (event.key === 's') {key.style.backgroundColor = "#ffa500"
        /* Cambiar a color 2 */
        }
        else if (event.key === 'd') {key.style.backgroundColor = "blue"
        /* Cambiar a color 2 */
        } else if(event.key === "q"){
            createDiv("#ffc0cb")
        }

        else if(event.key === "w"){
            createDiv("#ffa500")
        }

        else if(event.key === "e"){
            createDiv("blue")
        }

        })
 
    
