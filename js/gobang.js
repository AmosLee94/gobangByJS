"use strict";
var Gobang = /** @class */ (function () {
    function Gobang(parameters) {
        if (parameters === void 0) { parameters = null; }
        this.presentPlayer = 1;
        this.layout = [];
        this.weight = [];
        for (var i = 18; i > 0; i--) {
            var newLayoutRow = [];
            var newWeightRow = [];
            this.weight.push(newWeightRow);
            this.layout.push(newLayoutRow);
            for (var j = 18; j > 0; j--) {
                newLayoutRow.push(0);
                newWeightRow.push(0);
            }
        }
    }
    Gobang.prototype.go = function (x, y) {
        if (this.layout[x][y] == 0) {
            this.layout[x][y] = this.presentPlayer;
            this.presentPlayer = this.presentPlayer == 1 ? 2 : 1;
        }
        else {
            console.log("error:function go");
        }
    };
    return Gobang;
}());
console.log(new Gobang());
//# sourceMappingURL=gobang.js.map