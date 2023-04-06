//Criando uma classe com dois atributos

class Caneta{
    static cor(valor){
        this.cor = cor;
    }

    static carga(valor) {
        this.carga = carga;
    }

}


// Criando duas classes herdeiras

class Bic extends caneta{
    static vazando(valor){
        this.vazando = vazando;
    }
    cor = "azul";
    carga = 100;
}

class Mitsubishi extends caneta{
    static tampada(valor){
        this.tampada = tampada;
    }
    cor = "preto";
    carga = 100;
}

class Stabilo extends caneta{
    static tipo(valor){
        this.tipo = tipo;
    }
}


// Instanciando 3x o objeto declarado


// #1
let minhaBic = new Bic;
minhaBic.carga(100);
minhaBic.cor = "azul";
minhaBic.vazando = false;

// #2
let canetaFavorita = new Mitsubishi;
canetaFavorita.carga(100);
canetaFavorita.cor = "preta";
canetaFavorita.tampada = true;

// #3
let minhaStabilo = new Stabilo;
minhaStabilo.carga = 100;
minhaStabilo.cor = "verde";
minhaStabilo.tipo = "brush";