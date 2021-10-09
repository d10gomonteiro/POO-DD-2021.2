var Entity = (function () {
    function Entity(x, y, step, image) {
        this.x = x;
        this.y = y;
        this.step = step;
        this.image = image;
    }
    Entity.prototype.draw = function () {
        image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);
    };
    return Entity;
}());
var Board = (function () {
    function Board(nc, nl, step, background) {
        this.nc = nc;
        this.nl = nl;
        this.step = step;
        this.background = background;
    }
    Board.prototype.draw = function () {
        image(this.background, 0, 0, this.nc * this.step, this.nl * this.step);
        for (var x = 0; x < this.nc; x++) {
            for (var y = 0; y < this.nl; y++) {
                noFill();
                stroke(0);
                strokeWeight(2);
                rect(x * this.step, y * this.step, this.step, this.step);
            }
        }
    };
    return Board;
}());
var wolf_img;
var wolf_imgin;
var rabbit_img;
var board_img;
var wolf;
var rabbit;
var board;
function loadImage(path) {
    return loadImage(path, function () { return console.log("loading " + path + "sucesso"); }, function () { return console.log("loading " + path + "falhou"); });
}
function preload() {
    wolf_img = loadImage("../sketch/lobo.png");
    wolf_imgin = loadImage("../sketch/loboinv.png");
    rabbit_img = loadImage("../sketch/coelho.png");
    board_img = loadImage("../sketch/arena1.jpg");
}
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        wolf.x--;
        wolf.image = wolf_imgin;
    }
    else if (keyCode === RIGHT_ARROW) {
        wolf.x++;
        wolf.image = wolf_img;
    }
    else if (keyCode === UP_ARROW) {
        wolf.y--;
    }
    else if (keyCode === DOWN_ARROW) {
        wolf.y++;
    }
    if (keyCode === "A".charCodeAt(0)) {
        rabbit.x--;
    }
    else if (keyCode === "D".charCodeAt(0)) {
        rabbit.x++;
    }
    else if (keyCode === "W".charCodeAt(0)) {
        rabbit.y--;
    }
    else if (keyCode === "S".charCodeAt(0)) {
        rabbit.y++;
    }
}
function setup() {
    var size = 100;
    wolf = new Entity(2, 2, size, wolf_img);
    rabbit = new Entity(1, 1, size, rabbit_img);
    board = new Board(5, 6, size, board_img);
    createCanvas(board.nc * size, board.nl * size);
}
function draw() {
    board.draw();
    wolf.draw();
    rabbit.draw();
    borda();
    function borda() {
        if (wolf.y <= 0)
            wolf.y = 0;
        if (wolf.y >= board.nl)
            wolf.y = board.nl - 1;
        if (wolf.x <= 0)
            wolf.x = 0;
        if (wolf.x >= board.nc)
            wolf.x = board.nc - 1;
    }
}
//# sourceMappingURL=build.js.map