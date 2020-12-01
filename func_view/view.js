class Graph {
    constructor(x, y, func) {
        let positions = Array();
        let line;
        for(let j = y; j >= 0; j--) {
            for(let i = 0; i <= x; i++) {
                line = {
                    xy: [i, j],
                    content: "_"
                }
                positions.push(line);
            }     
        }
        this.positions = positions
        this.funcX = func
        this.xlength = x
        this.setContent()
    }

    funcX = this.funcX

    setContent() {
        for(let item of this.positions) {
            if(this.funcX(item.xy[0]) == item.xy[1]) {
                item.content = "x";
            }
        }
        this.show()
    }

    show() {

        let line = ""
        // let y = this.positions[0].xy[1]
        let y = this.positions[0].xy[1]
        
        for(let item of this.positions) {
            if(item.xy[1] == y) {
                line += item.content
            } else {
                console.log(line)
                y = item.xy[1]
                line = ""
            }
        }
    }
}

const gr = new Graph(50, 40, function (x) {
    return x ** 2 - 10
});