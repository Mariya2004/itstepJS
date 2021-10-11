class Clothes {
    color;
    length;
    material;
    constructor(color, length, material) {
        this.color = color;
        this.length = length;
        this.material = material;
    }
}

class Shorts extends Clothes {
    belt;
    constructor(color, length, material, belt) {
        super(color, length, material);
        this.belt = belt;
    }
}

class Trausers extends Clothes{
    collar;
    constructor(color, length, material, collar) {
        super(color, length, material);
        this.collar = collar;
    }
}

let short = new Shorts("black", 100, "cotton", "belt");
console.log(short);

let trauser = new Trausers("white", 60, "cotton", "collar");
console.log(trauser);
