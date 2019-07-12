class Graph {
    constructor(numNodes, graphFrom, graphTo, ids, val){
        this.val = val
        this.nodes = [];
        for(let i = 0; i < numNodes; i++){
            this.nodes.push(new GraphNode(i+1, ids[i]))
        };
        for(let i = 0; i < graphFrom.length; i++){
            this.nodes[graphFrom[i]-1].addPath(this.nodes[graphTo[i]-1]);
            this.nodes[graphTo[i]-1].addPath(this.nodes[graphFrom[i]-1]);
        }
    }

    lookForValue(){
        const nodesToStartFrom = [];
        for(let i = 0; i < this.nodes.length; i++){
            if(this.nodes[i].color === this.val){
                nodesToStartFrom.push(this.nodes[i]);
            }
        }
       const paths = nodesToStartFrom.map((node) => {
           return this.breadthFirstSearch(node,this.val)
       })
       const filter = paths.filter(val => val !== 0);
       
       if(filter.length > 0){
           return Math.min.apply(null, filter)
       }
       return -1
    }

    depthFirstSearch(){
        const rootNode = this.nodes[0];
        const stack = [];
        stack.push(rootNode);

        while(stack.length > 0){
            const currentNode = stack.pop();
            currentNode.visited = true;
            currentNode.adjacentPaths.reverse().map((node) => {
                if(node.visited === false){
                    stack.push(node);
                }
            })
            console.log(currentNode)
        }
    }

    breadthFirstSearch(nodeToSearchFrom, val){
        this.nodes.map((node) => {
            node.visited = false;
        })
        const rootNode = nodeToSearchFrom;
        const node = {};
        const queue = [];
        let count = 0;
        let found = false;
        queue.push(rootNode);
        while(queue.length > 0){
            const currentNode = queue.shift();
            currentNode.visited = true;
            currentNode.adjacentPaths.reverse().map((node) => {
                if(node.visited === false){
                    if(node.color !== val && found === false){
                        count += 1;
                    } else {
                        found = true;
                    }
                    queue.push(node);
                }
            })
            //console.log(currentNode)            
        }
        if(found === false){
            return 0
        }
        return count + 1;
    }


}

class GraphNode {
      constructor(number, color){
          this.number = number;
          this.color = color
          this.adjacentPaths = [];
          this.visited = false
      }

      addPath(path){
          this.adjacentPaths.push(path)
      }

}





//
function runAnswer(graphNodes, graphFrom, graphTo, ids, val){
    const MyGraph = new Graph(graphNodes, graphFrom, graphTo, ids, val);
    const value = MyGraph.lookForValue();
    return value
    //MyGraph.breadthFirstSearch();
    
    
}

// 

// Expected Output === 1
runAnswer(4, [1,1,4], [2,3,2],[1,2,1,1], 1);

// 1 has a an edge to 2 and 3. Vice versa. 2 has an edge to 4, vice versa.
//1 has a path to 2, 3, and 4.
// [1 ,1 ,4]
// [2 ,3, 2]

// Depth First Search
// visted = 1, 3
// stack = [1] node pop off 1
// node = 1, we add all children of 1 into the stack
// stack = [2,3] pop off the top === 3
// node = 3, we all children of 3 into the stack
// stack = [2] pop off the top ===2
// node = 2, we add all children 2 into the stack
// stack = [4] pop of the top === 4
// node = 4 , we add all children of 4 into the stack
// stack = []
// We finished depth first search