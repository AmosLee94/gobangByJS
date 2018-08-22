class Gobang {
    public layout:number[][];
    public weight:number[][];
    public presentPlayer:number = 1;
    constructor(parameters:any=null) {
        this.layout = [];
        this.weight = [];
        for(let i=18;i>0;i--){
            let newLayoutRow:number[] = [];
            let newWeightRow:number[] = [];
            this.weight.push(newWeightRow);
            this.layout.push(newLayoutRow);
            for(let j=18;j>0;j--){
                newLayoutRow.push(0);
                newWeightRow.push(0);
            }
        }
    }
    public go(x:number, y:number){
        if(this.layout[x][y] == 0){
            this.layout[x][y] = this.presentPlayer;
            this.presentPlayer = this.presentPlayer == 1?2:1;
        }else{
            console.log("error:function go");
        }
    }
}
console.log(new Gobang());