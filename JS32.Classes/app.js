class Ellipse {
    a = 0;
    b = 0;

    constructor (a, b) {
        if (a <= 0) {
            console.log("Error value a");
            return;
        }
        if (b <= 0) {
            console.log("Error value b");
            return;
        }

        this.a = a;
        this.b = b;
    }

    getSquare() {
        return Math.PI*this.a*this.b;
    }
}

let ellipse1 = new Ellipse(3, 4);
console.log(ellipse1.getSquare());

class Ellipsoid extends Ellipse {
    c;

    constructor (a, b, c) {
        if (a <= 0) {
            console.log("Error value a");
            return;
        }
        if (b <= 0) {
            console.log("Error value b");
            return;
        }
        if(c <= 0) {
            console.log("Error value c");
            return;
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getSquare() {
        return Math.PI*this.a*this.b;
    }   

    getVolume() {
        return 4/3*Math.PI*this.a*this.b*this.c;
    }
}

let ellipsoid1 = new Ellipsoid(3,4,5);
console.log(ellipsoid1.getVolume());