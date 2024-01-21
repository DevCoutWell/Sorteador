const listaItens = document.getElementById("ilista");
const buttonSorter = document.getElementById("buttonSorter");


buttonSorter.addEventListener("click", function(){

    if(!listaItens.value){
        alert("Insira os itens no campo!");
    }
    else{

        //transformar em array
            const arrlista = listaItens.value.split(",");
        //sortear item
        const numsorteado = Math.floor(Math.random() * arrlista.length);

        // usar alert para informar qual item foi sorteado
        const itemSorteado = arrlista[numsorteado];
        
        alert(`O item sorteado foi: ${itemSorteado.trim()}!`)


    }



});