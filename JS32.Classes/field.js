class Field {
    cells; //0 - пусто, 1 - стена, 2 - мина
    m; //длина поля
    n; //ширина поля
    constructor (m,n) {
        this.m = m;
        this.n = n;
        this.cells = Array(m);

        for(let i = 0; i < n; i++) {
            this.cells[i] = Array(n).fill(0);
        }
    };

    addWall(x, y) {
        this.cells[x][y] = 1;
    };
    addMine(x, y) {
        this.cells[x][y] = 2;
    };
    removeMine(x, y) {
        this.cells[x][y] = 0;
    };
    show() {
        console.table(this.cells); //выводит текущее состояние ячейки
    }; 
}

export {Field};