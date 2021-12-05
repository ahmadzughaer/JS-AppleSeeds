function Square(a,b,c,d) {
    this.a = a;
    this.b = b;
    this.c = c ;
    this.d = d;
}

Square.prototype.isSquare =  () => {
    return (  this.a === this.c && this.b === this.d )
}

let mySquare = new Square(2,2,1,1)

console.log(mySquare.isSquare())