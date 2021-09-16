function meuScopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    
    function recebeEventForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobreNome = form.querySelector('.sobreNome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.Value,
            sobreNome: sobreNome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobreNome.value}`+ `<p>
        ${peso.value}`+`<p> ${altura.value}`
    }
   form.addEventListener('submit', recebeEventForm)
}
meuScopo();