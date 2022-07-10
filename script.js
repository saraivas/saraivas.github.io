let count =1;

let projectsJson = [
    {description:'Descrição1 da pizza em mais de uma linha muito legal bem interessante', language:['HTML','CSS','JS','R'], porcent:['25%', '50%', '75%', '100%'], pag:'1Em breve', link:' ', mobile:'1Não disponivel'},
    {description:'Descrição2 da pizza em mais de uma linha muito legal bem interessante', language:['HTML','CSS','JS','R'], porcent:['25%', '50%', '75%', '100%'], pag:'2Em breve', link:' ', mobile:'2Não disponivel'},
    {description:'Descrição3 da pizza em mais de uma linha muito legal bem interessante', language:['HTML','CSS','JS','R'], porcent:['25%', '50%', '75%', '100%'], pag:'3Em breve', link:' ', mobile:'3Não disponivel'},
    {description:'Descrição4 da pizza em mais de uma linha muito legal bem interessante', language:['HTML','CSS','JS','R'], porcent:['25%', '50%', '75%', '100%'], pag:'4Em breve', link:' ', mobile:'4Não disponivel'}
];

document.getElementById('slide'+count).checked = true
document.getElementById("descricao").innerHTML = projectsJson[count-1].description;
document.getElementById("html").innerHTML = projectsJson[count-1].language[0]+'<p class="margem">'+projectsJson[count-1].porcent[0]+'</p>';
document.getElementById("css").innerHTML = projectsJson[count-1].language[1]+'<p class="margem">'+projectsJson[count-1].porcent[1]+'</p>';
document.getElementById("js").innerHTML = projectsJson[count-1].language[2]+'<p class="margem">'+projectsJson[count-1].porcent[2]+'</p>';
document.getElementById("r").innerHTML = projectsJson[count-1].language[3]+'<p class="margem">'+projectsJson[count-1].porcent[3]+'</p>';
document.getElementById("link").innerHTML = projectsJson[count-1].pag;
document.getElementById("mobile").innerHTML = projectsJson[count-1].mobile;

setInterval(function(){
    
    nextImage();
}, 5000)

function nextImage(){
    count++;
    console.log('auto:'+count);
    if(count>4){ //4 = numero de imagens
        count =1;
    }

    document.getElementById('slide'+count).checked = true
    document.getElementById("descricao").innerHTML = projectsJson[count-1].description;
    document.getElementById("html").innerHTML = projectsJson[count-1].language[0]+'<p class="margem">'+projectsJson[count-1].porcent[0]+'</p>';
    document.getElementById("css").innerHTML = projectsJson[count-1].language[1]+'<p class="margem">'+projectsJson[count-1].porcent[1]+'</p>';
    document.getElementById("js").innerHTML = projectsJson[count-1].language[2]+'<p class="margem">'+projectsJson[count-1].porcent[2]+'</p>';
    document.getElementById("r").innerHTML = projectsJson[count-1].language[3]+'<p class="margem">'+projectsJson[count-1].porcent[3]+'</p>';
    document.getElementById("link").innerHTML = projectsJson[count-1].pag;
    document.getElementById("mobile").innerHTML = projectsJson[count-1].mobile;


}

let el = document.getElementById("manual");
    el.addEventListener('click', function(e){
        count = parseInt(e.target.id);
        document.getElementById('slide'+count).checked = true
        document.getElementById("descricao").innerHTML = projectsJson[count-1].description;
        document.getElementById("html").innerHTML = projectsJson[count-1].language[0]+'<p class="margem">'+projectsJson[count-1].porcent[0]+'</p>';
        document.getElementById("css").innerHTML = projectsJson[count-1].language[1]+'<p class="margem">'+projectsJson[count-1].porcent[1]+'</p>';
        document.getElementById("js").innerHTML = projectsJson[count-1].language[2]+'<p class="margem">'+projectsJson[count-1].porcent[2]+'</p>';
        document.getElementById("r").innerHTML = projectsJson[count-1].language[3]+'<p class="margem">'+projectsJson[count-1].porcent[3]+'</p>';
        document.getElementById("link").innerHTML = projectsJson[count-1].pag;
        document.getElementById("mobile").innerHTML = projectsJson[count-1].mobile;
    });




