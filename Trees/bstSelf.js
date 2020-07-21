/*
Pseudo code

INSTANTIATE Node class to have DRY code
  LEFT value will equal null
  RIGHT value will equal null
  VALUE will equal user's input value
END class

PROGRAM START
  INSTANTIATE class constructor 
    ROOT will equal null to start
  END class constructor

  INSTANTIATE insert method that takes in value
    CALL Node class constructor
    
    IF root doesn't exist
      INITIATE root to equal first input
    END IF
      ELSE assign a current node variable to equal the root to start off the tree
        ITERATE 
          IF the user input value is LESS THAN the current Node's value,
            IF there is no left value on the current Node
              ASSIGN left value of current node to value of user input
              RETURN to end iteration
            END IF
          END IF
          IF user input is GREATER than current Node's value
            IF there is no right value on current Node
              ASSIGN right value of current node to value of user input
              RETURN TO END ITERATION
            END IF
          END IF
        END ITERATE
      END ELSE
  END insert method

  INSTANTIATE lookup method to take in a value 
    IF the root value doesn't exist
      return false
    END IF
    
    INSTANTIATE currentNode value to start at root
    WHILE currentNode exists
      IF the value is less than the currentNode's value
        MOVE left
      END IF // ELSE IF value is greater than the currentNode's value, go right
      END IF // ELSE IF currentNode's value is equal to value,
        return currentNode
      END IF // return currentNode
      OTHERWISE return false
    END WHILE
  END Method
PROGRAM END
*/


// function to print tree
const traverse = (node) => {
  const tree = {
    value: node.value
  }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}


class Node {
  // variables on top
  right = null
  left = null

  // create constructor to take value input
  constructor(value) {
    this.value = value
  }
}

class BinarySearchTree {
    root = null

  insert(value) {
    const newNode = new Node(value)
    // if this.root doesn't have any value, assign teh first "insert" to be the root
    if (this.root === null) {
      this.root = newNode
    } else {
      // if a root node exists, assign the root node to be the current value, letting the insert method where to start
      let currentNode = this.root
      // just keep looping but we need to add an exit to the loop by adding a return
      while(true) {
        // starts at the root node and compares against value
        // if the value is less than the current value, go left (part of BST rules)
        if (value < currentNode.value) {
          // LEFT LOGIC
          // is there any element on the left of the root node?
          // if there isn't, assign currentNode.left to equal the users input value
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          //if there is something already to the left
          //update and shift over for example, if 9 already exists, we'll update whats to the left of 9 which at the moment of entering the loop is null, so null will equal newNode or updated user input
          currentNode = currentNode.left
        } else {
          // RIGHT LOGIC
          // is there any element on the right of the root node?
          // if there isn't, assign currentNode.right to equal the users input value
          if(value > currentNode.value) {
            if (!currentNode.right) {
              currentNode.right = newNode
              return this
            }
            //if there is something already to the right
            //update and shift over for example, if 9 already exists, we'll update whats to the right of 9 which at the moment of entering the loop is null, so null will equal newNode or updated user input
            currentNode = currentNode.right
          }
        }
      }
    }
  }

    lookup(value) {
      // does root node exist? if not, don't run anything else
      // (this.root === null)
      if (!this.root) {
        return false
      }
      let currentNode = this.root
      // traverse through the tree, and stop whenever the currentNode no longer exists or we no longer have a node to go through once we've gone through our BST, and it's null, we didn't find what we're looking for 
      while (currentNode) {
        // check to see if the value we're looking for is LESS than the value we're currently at, if it is, we traverse down the left side of the tree since the left side of the tree since LEFT is LESS than right side
        if (value < currentNode.value) {
          currentNode = currentNode.left
          // check to see if the value we're looking for is GREATER than the value we're currently at, if it is, we traverse down the right side of the tree since the right side of the tree since RIGHT is GREATER than left side
        } else if (value > currentNode.value) {
        currentNode = currentNode.right
        // check to see if currentNode's value is the same as our input. if it is, return it
      } else if (currentNode.value === value) {
        return currentNode
      }
    }
    return false
  } // closes lookup method
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(15)
tree.insert(170)
tree.insert(1)
tree.lookup(9)
tree.lookup(171)

// JSON.stringify(traverse(tree.root))
console.log(JSON.stringify(traverse(tree.root)))
//     9
//  4     20
//1  6  15  170