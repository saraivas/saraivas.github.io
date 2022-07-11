let count =1;

let projectsJson = [
    {description:'Plataforma desenvolvida durante uma iniciação científica em conjunto com um grupo de pesquisa hídrico da UFPel', language:['HTML','CSS','JS','R'], porcent:['60.6%', '8.4%', '0%', '31.0%'], pag:'Em breve', mobile:'Não disponivel', local:" ", gif:'/assets/gifs/idf.gif'},
    {description:'Sistema de gerenciamento de uma pizzaria', language:['HTML','CSS','JS','R'], porcent:['22.3%', '45.0%', '32.7%', '0%'], pag:'Click Aqui', mobile:'Disponível', local:"./assets/paginas/pizza-main/index.html", gif:'/assets/gifs/pizza.gif'},
    {description:'Uma página para uma agência médica', language:['HTML','CSS','JS','R'], porcent:['69.6%', '30.4%', '0%', '0%'], pag:'Click Aqui', mobile:'Disponível', local:"./assets/paginas/Medicenter-master/index.html", gif:'/assets/gifs/medicenter.gif'},
    {description:'Este foi o meu primeiro projeto com o intuito de representar uma página de viagens', language:['HTML','CSS','JS','R'], porcent:['54.9%', '45.1%', '0%', '0%'], pag:'Click Aqui', mobile:'Disponível', local:"./assets/paginas/page-viagem-main/index.html", gif:'/assets/gifs/page-viagem'},
    {description:'Cópia do site da Tesla', language:['HTML','CSS','JS','R'], porcent:['33.2%', '66.8%', '0%', '0%'], pag:'Click Aqui', mobile:'Não disponivel', local:"./assets/paginas/copy-tesla-master/index.html", gif:'/assets/gifs/tesla.gif'},
    {description:'Cópia do site do Google', language:['HTML','CSS','JS','R'], porcent:['40.7%', '59.3%', '0%', '0%'], pag:'Click Aqui', mobile:'Não disponivel', local:"./assets/paginas/google-copy-master/index.html", gif:'/assets/gifs/google-copy.gif'},
    {description:'Template de um Iphone', language:['HTML','CSS','JS','R'], porcent:['43.8%', '56.2%', '0%', '0%'], pag:'Click Aqui', mobile:'Não disponivel', local:"./assets/paginas/template-iphone-master/index.html", gif:'/assets/gifs/iphone.gif'},
    {description:'Site de uma loja com um carrinho de compras(ainda não finalizado)', language:['HTML','LESS','JS','R'], porcent:['63.6%', '36.4%', '0%', '0%'], pag:'Click Aqui', mobile:'Não disponivel', local:"./assets/paginas/shop-website-master/index.html", gif:'/assets/gifs/shopping.gif'},
    {description:'Formulário para Sign-In', language:['HTML','LESS','JS','R'], porcent:['54.0%', '46.0%', '0%', '0%'], pag:'Click Aqui', mobile:'Não disponivel', local:"./assets/paginas/Sign-In-main/formulario/index.html", gif:'/assets/gifs/form.gif'},
];

attSlider()

setInterval(function(){
    
    nextImage();
}, 10000)

function nextImage(){
    count++;
    console.log('auto:'+count);
    if(count>9){ //4 = numero de imagens
        count =1;
    }

    attSlider()


}

let el = document.getElementById("manual");
    el.addEventListener('click', function(e){
        count = parseInt(e.target.id);
        console.log('manual:'+count);
        document.getElementById('slide'+count).checked = true

        attSlider()
    });

    function attSlider(){
        document.getElementById('slide'+count).checked = true
        document.getElementById("descricao").innerHTML = projectsJson[count-1].description;
        document.getElementById("html").innerHTML = projectsJson[count-1].language[0]+'<p class="margem">'+projectsJson[count-1].porcent[0]+'</p>';
        document.getElementById("css").innerHTML = projectsJson[count-1].language[1]+'<p class="margem">'+projectsJson[count-1].porcent[1]+'</p>';
        document.getElementById("js").innerHTML = projectsJson[count-1].language[2]+'<p class="margem">'+projectsJson[count-1].porcent[2]+'</p>';
        document.getElementById("r").innerHTML = projectsJson[count-1].language[3]+'<p class="margem">'+projectsJson[count-1].porcent[3]+'</p>';
        document.getElementById("link").innerHTML = projectsJson[count-1].pag;
        //document.getElementById("gif").src = projectsJson[count-1].gif;
        document.getElementById("link").href = projectsJson[count-1].local;
        document.getElementById("mobile").innerHTML = projectsJson[count-1].mobile;
    }




