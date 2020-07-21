class Node {
  left = null
  right = null
  constructor(value) {
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {
          // left
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          // right
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false
    }
    let currentNode = this.root
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (currentNode.value === value) {
        return currentNode
      }
      return false
    }
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {

            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesn't have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {

            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now left most's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  depthFirstSearchInOrder() {
    return traverseInOrder(this.root, [])
  }
  depthFirstSearchPostOrder() {
    return traversePostOrder(this.root, [])

  }
  depthFirstSearchPreOrder() {
    return traversePreOrder(this.root, [])

  }
}

const traverseInOrder = (node, list) =>{
  // if the starting node has a left node, go all the way down until the currentNode has no more children, insert it
  if (node.left) {
    traverseInOrder(node.left, list)
  }
  list.push(node.value)

  if (node.right) {
    traverseInOrder(node.right, list)
  }
  return list
}

const traversePreOrder = (node, list) => {
  list.push(node.value)
  if (node.left) {
    traversePreOrder(node.left, list)
  }

  if (node.right) {
    traversePreOrder(node.right, list)
  }
  return list
}

const traversePostOrder = (node, list) => {
  if (node.left) {
    traversePostOrder(node.left, list)
  }
  
  if (node.right) {
    traversePostOrder(node.right, list)
  }
  list.push(node.value)
  return list
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(15)
tree.insert(170)
tree.insert(1)
tree.depthFirstSearchInOrder()
tree.depthFirstSearchPostOrder()
tree.depthFirstSearchPreOrder()
// tree.lookup(9)
// console.log(tree.lookup(9))
// console.log(tree.lookup(90)) // false

const traverse = (node) => {
  const tree = {
    value: node.value
  };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

// JSON.stringify(traverse(tree.root))
console.log(JSON.stringify(traverse(tree.root)))

//     9
//  4     20
//1  6  15  170
/*
-In order:
  -[1, 4, 6, 9, 15, 20, 170] -
  Pre order:
  -[9, 4, 1, 6, 20, 15, 170] -
  (useful
    for recreating a tree) -
  Post order:
  -[1, 6, 15, 170, 4, 20, 9]
*/