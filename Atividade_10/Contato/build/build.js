var Bubble = (function () {
    function Bubble(x, y, letter, speed) {
        this.alive = true;
        this.x = x;
        this.y = y;
        this.letter = letter;
        this.speed = speed;
    }
    Bubble.prototype.update = function () {
        this.y += this.speed;
    };
    Bubble.prototype.draw = function () {
        fill(random(255), random(255), random(255));
        stroke(random(256));
        circle(this.x, this.y, 2 * Bubble.radius);
        fill(0);
        stroke(0);
        textSize(15);
        text(this.letter, this.x - 5, this.y + 5);
    };
    Bubble.radius = 20;
    return Bubble;
}());
var Board = (function () {
    function Board() {
        this.timeout = 30;
        this.timer = 0;
        this.hits = 0;
        this.mistakes = 0;
        this.bubbles = [new Bubble(100, 100, "a", 1)];
        this.bubbles.push(new Bubble(200, 100, "b", 2));
        this.bubbles.push(new Bubble(300, 100, "c", 3));
    }
    Board.prototype.update = function () {
        this.checkBubbleTime();
        this.markOutsideBubble();
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var bubble = _a[_i];
            bubble.update();
        }
        this.removeDeadBubble();
    };
    Board.prototype.draw = function () {
        stroke("white");
        fill("white");
        textSize(30);
        text("hits: " + this.hits + " Mistakes: " + this.mistakes, 30, 30);
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var bubble = _a[_i];
            bubble.draw();
        }
    };
    Board.prototype.removeDeadBubble = function () {
        this.bubbles = this.bubbles.filter(function (b) { return b.alive; });
    };
    Board.prototype.removeByHit = function (code) {
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var bubble = _a[_i];
            if (bubble.letter[0].toUpperCase().charCodeAt(0) == code)
                bubble.alive = false;
        }
        this.hits++;
    };
    Board.prototype.markOutsideBubble = function () {
        for (var _i = 0, _a = this.bubbles; _i < _a.length; _i++) {
            var bubble = _a[_i];
            if (bubble.y + 2 * Bubble.radius >= height)
                bubble.alive = false;
        }
        this.mistakes++;
    };
    Board.prototype.checkBubbleTime = function () {
        this.timer -= 1;
        if (this.timer <= 0) {
            this.addBubble();
            this.timer = this.timeout;
        }
    };
    Board.prototype.addBubble = function () {
        var x = random(0, width - 2 * Bubble.radius);
        var y = -2 * Bubble.radius;
        var letter = random(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
        var speed = random(1, 5);
        var bubble = new Bubble(x, y, letter, speed);
        this.bubbles.push(bubble);
    };
    return Board;
}());
var Game = (function () {
    function Game() {
        this.board = new Board();
        this.activeState = this.gamePlay;
    }
    Game.prototype.gamePlay = function () {
        this.board.update();
        background(0, 124, 90);
        this.board.draw();
        if (this.board.mistakes > 5)
            this.activeState = this.gameOver;
    };
    Game.prototype.gameOver = function () {
        background(255, 0, 0);
        fill(random(256), random(256), random(256));
        textSize(100);
        text("Game Over", 50, 300);
    };
    return Game;
}());
var game;
function setup() {
    createCanvas(800, 600);
    frameRate(30);
    game = new Game();
}
function draw() {
    game.activeState();
}
function keyPressed() {
    game.board.removeByHit(keyCode);
}
//# sourceMappingURL=build.js.map