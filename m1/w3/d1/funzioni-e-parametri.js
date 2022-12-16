function saluta(){
    console.log("Ciao");
    console.log("Mondo");
    //possono essere infinite le operazioni da eseguire
    console.log("il mio nome è:")
    console.log("Dario")
}
//quindi abbiamo creato/definito una funzione 
//ma se non la utilizziamo,questa funzione non verrà applicata

//UTLIZZO:se si richiama la funzione, verrà applicata
saluta()

//Con un ciclo lo ripeterà per x volte,in questo esempio 10
for (let i= 0; i <10; i++){
    saluta()
}

//PARAMETRI DI UNA FUNZIONE:variabili temporanee che posso utilizzare all'interno della funzione
//come parametro si possono utilizzare TUTTO:numeri,array,oggetti
function salutaQualcuno(qualcuno){
    console.log("ciao" , qualcuno)
}

salutaQualcuno("Samuele");//il parametro qualcuno avrà valore Samuele
salutaQualcuno("Gaetano");//il parametro qualcuno avrà valore Gaetano
salutaQualcuno("Vincenzo");
salutaQualcuno()//il parametro qualcuno avrà valore UNDEFINED
//quando si richiama la funzione quindi si può definire il parametro a scelta


//ESEMPIO 2
function quadrato(x){
    console.log("il quadrato è:", x * x );
}
//richiamando la funzione utlizziamo il parametro a scelta nostra
quadrato(2);
quadrato(4);
quadrato(100);

//FUNZIONI CON PIù PARAMETRI
function somma(addendo1, addendo2){
    return("la somma dei due numeri è:", addendo1+addendo2)
}
somma(10, 30)//richiamo la funzione determinando i due parametri


//ESEMPIO 3
const arrayDiNumeri =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//usiamo un for per ciclare l'array
for (let i = 0; i < array.length; i++) {
    const element = arrayDiNumeri[i];
    console.log("elemento corrente:",element)
    quadrato(element)//utlizziamo una funzione esistente all'interno di questa funzione
    
}

//ESEMPIO 4 RICHIAMO DI FUNZIONI NELLE FUNZIONI
function quadratoECubo(x){
    console.log("Il numero passato è", x)
    quadrato(x)
    cubo(x)
}
quadratoECubo(20)//quindi x=20

//CONCETTO DI RETURN

//si può utlizzare il return per richiamare il nome della variabile

function somma(x, y){
    const risultato = x + y;
    return risultato//senza return il console.log darà udefined quindi è importante definire cosa ritorna
}
const sommaDuePiuDue = somma(2, 2)//se la funzione ha un valore di ritorno;posso memorizzare quel valore in una variabile
console.log(sommaDuePiuDue)