function openCloseNavBar () {
    var width = document.getElementById("mySidenav").style.width;
    if (width === "0px") {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("mySidenav").style.paddingLeft = "20px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    else {
        document.getElementById("mySidenav").style.width = "0px";
        document.getElementById("mySidenav").style.paddingLeft = "0px";
        document.getElementById("main").style.marginLeft = "0px";
    }
}

function contentInicio () {
    document.getElementById("inicio").style.display = "block";
    document.getElementById("intro").style.display = "none";
    document.getElementById("desafios").style.display = "none";
    document.getElementById("classificacao").style.display = "none";
    document.getElementById("gaf").style.display = "none";
    document.getElementById("leach").style.display = "none";
    document.getElementById("conclusao").style.display = "none";
    document.getElementById("bibliografia").style.display = "none";
}

function contentIntro () {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("intro").style.display = "block";
    document.getElementById("desafios").style.display = "none";
    document.getElementById("classificacao").style.display = "none";
    document.getElementById("gaf").style.display = "none";
    document.getElementById("leach").style.display = "none";
    document.getElementById("conclusao").style.display = "none";
    document.getElementById("bibliografia").style.display = "none";
}

function contentDesafios () {    
    document.getElementById("inicio").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("desafios").style.display = "block";
    document.getElementById("classificacao").style.display = "none";
    document.getElementById("gaf").style.display = "none";
    document.getElementById("leach").style.display = "none";
    document.getElementById("conclusao").style.display = "none";
    document.getElementById("bibliografia").style.display = "none";
}

function contentClassificacao () {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("desafios").style.display = "none";
    document.getElementById("classificacao").style.display = "block";
    document.getElementById("gaf").style.display = "none";
    document.getElementById("leach").style.display = "none";
    document.getElementById("conclusao").style.display = "none";    
    document.getElementById("bibliografia").style.display = "none";
}

function contentGAF () {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("desafios").style.display = "none";
    document.getElementById("classificacao").style.display = "none";
    document.getElementById("gaf").style.display = "block";
    document.getElementById("leach").style.display = "none";
    document.getElementById("conclusao").style.display = "none";
    document.getElementById("bibliografia").style.display = "none";
}

function contentLEACH () {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("desafios").style.display = "none";
    document.getElementById("classificacao").style.display = "none";
    document.getElementById("gaf").style.display = "none";
    document.getElementById("leach").style.display = "block";
    document.getElementById("conclusao").style.display = "none";
    document.getElementById("bibliografia").style.display = "none";
}

function contentConclusao () {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("desafios").style.display = "none";
    document.getElementById("classificacao").style.display = "none";
    document.getElementById("gaf").style.display = "none";
    document.getElementById("leach").style.display = "none";
    document.getElementById("conclusao").style.display = "block";
    document.getElementById("bibliografia").style.display = "none";
}

function contentBibliografia () {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("desafios").style.display = "none";
    document.getElementById("classificacao").style.display = "none";
    document.getElementById("gaf").style.display = "none";
    document.getElementById("leach").style.display = "none";
    document.getElementById("conclusao").style.display = "none";
    document.getElementById("bibliografia").style.display = "block";
}

function openImage () {
    document.getElementById("overlay").style.display = "block";
}