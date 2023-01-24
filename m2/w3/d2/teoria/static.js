// METODI  e  PROPRIETÀ STATICI nelle classi
//un metodo o una proprietà statici all'interno di una classe sono diem etodi
//e delle proprietà non accessibili dalle ISTANZE della classe, ma solamente
//all'interno della classe stessa

// anteponendo la keyword "static" rendiamo un metodo o una proprietà statici

class Article{
    constructor(title,author) {
        this.title = title
        this.author = author
    }
     
    static isSameAuthor(articleA,articleB){
        return articleA.author === articleB.author
    }
}

let myArticle = new Article("L'importanza delle mantidi religiose","John Doe")
//myArticle è un'ISTANZA di Article

let article =[
    new Article("HTML today","Jill Valentine"),
    new Article("Modern CSS","Chris Redfield"),
    new Article("Future JS","Albert Wesker")
]
console.log(Article.isSameAuthor(article[0],article[2]))

