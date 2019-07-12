// Solving using graphs

class Graph {
    constructor(nodes){
        this.graphNodes = [];
        nodes.map((value, index) => {
            let type = this.handleType(value);
            this.graphNodes.push(new GraphNode(index, type))
        });
        this.addPaths(nodes);
    }

    handleType(value){
        let type;
        if(value === 0){
            type = Graph.CLOUD;
        }
        if(value === 1){
            type = Graph.THUNDER_STORM
        }
        return type;
    };

    logGraphs(){
        this.graphNodes.map((node) => {
            node.printValue();
        })
    };

    addPaths(array){
        array.map((node, index) => {
            const graphNode = this.graphNodes[index];
            if (index + 1 < this.graphNodes.length) {
                graphNode.addPath(this.graphNodes[index+1]);
            }
            if (index + 2 < this.graphNodes.length) {
                graphNode.addPath(this.graphNodes[index+2]);
            }
        })
    };

    DepthFirstSearch(){
        const stack = [];
        let count = 0;
        let currentNode = this.graphNodes[0];
        stack.push(currentNode);
        while(stack.length > 0){
            currentNode = stack.pop();
            count +=1;
            currentNode.visited = true;
            currentNode.paths.map((node, index) => {
                if(index === 0 && currentNode.paths[1].type !== Graph.THUNDER_STORM){
                    return
                }
                if(node.visited === false && node.type !== Graph.THUNDER_STORM){
                    stack.push(node);
                }
            });
        }
        return count-1
    }
}
Graph.CLOUD = 'CLOUD'
Graph.THUNDER_STORM = "THUNDER_STORM"

class GraphNode {
    constructor(value, type){
        this.value = value;
        this.type = type;
        this.visited = false;
        this.paths = [];
    }


    printValue(){
        console.log(`Graph Node: ${this.value} of type: ${this.type} followed by PATHS`);
        console.log(this.paths)
    };

    addPath(graphNode){
        this.paths.push(graphNode)
    }

}

function countingClouds(clouds){
    const CountingGraph = new Graph(clouds);
    const numberOfSteps = CountingGraph.DepthFirstSearch();
    console.log(`Number of Steps Taken: ${numberOfSteps}`)
}

countingClouds([0, 0, 1, 0, 0, 1, 0]);

// My solution

function jumpingOnClouds(c) {
    let minimalJumps = 0;

    //Loop through the array and check arr[i + 2].
    let i = 0;
    while (i < c.length - 1) {
        if (isValidJump(2, i)) {
            i += 2;
            minimalJumps += 1;
        } else if (isValidJump(1, i)) {
            i += 1;
            minimalJumps += 1;
        } else {
            console.log('finished')
        }
    }
    // Check if arr[i + 2] === 1, if not it's a valid jump

    function isValidJump(jumpDistance, index) {
        const jumpToPosition = jumpDistance + index;
        const path = [];
        if (jumpToPosition < c.length - 1) {
            if (c[jumpToPosition] === 1) {
                console.log(`Can't jump to ${jumpToPosition}`)
                return false
            } else {
                console.log(`Jumping To ${jumpToPosition}`)
                path.push(`Jump to index: ${jumpDistance}`);
                return true
            }
        } else {
            path.map((string) => console.log(string));
            return true;
        }
    }

    console.log(minimalJumps);
    //return minimalJumps
    return minimalJumps;
}

