// Each item in a graph is called a node or a vertex
// Nodes are connected with edges

class Graph {
  constructor() {
    this.numberOfNodes = 0
    this.adjacentList = {}
  }

  addVertex(node) {
    // adding KEY to the object that we wanna add
    // adjacentList is the object above
    this.adjacentList[node] = []
    // increment numberOfNodes
    this.numberOfNodes++
  }
  addEdge(node1, node2) {
    /*undirected graph means that each connection is a two way connection
    example of whats happening below 
    this.adjacentList['3']
    this.adjacentList['3'].push('1')  STEP 1
    this.adjacentList['1'].push('3')  STEP 2
    this.adjacentList = { 
      0: [], 
      1: [ '3' ], ****                STEP 2
      2: [], 
      3: [ '1' ], ****                STEP 1
      4: [], 
      5: [], 
      : [] 
    }
    */
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 

// adjacentList = 
//   {
//     0: ['1', '2'],
//     1: ['3', '2', '0'],
//     2: ['4', '1', '0'],
//     3: ['1', '4'],
//     4: ['3', '2', '5'],
//     5: ['4', '6'],
//     6: ['5']
//   }