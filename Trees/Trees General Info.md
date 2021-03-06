- lookup - O(log N)
- insert - O(log N)
- delete - O(log N)

```const BinaryTreeNode(value) {
  this.value = value
  this.left = null
  this.right = null
}
```

## Calculating the number of nodes:
  - Level 0 - 2^level (2^0) = 1
  - Level 1 - 2^level (2^1) = 2
  - Level 2 - 2^level (2^2) = 4
  - Level 3 - 2^level (2^3) = 8

## Number of nodes =  2^h-1 (height) 
  - 2^l - 1 (level)
  - log nodes = height
  - log 100 = 2 (10^2)

# Trees: 0 or more child nodes
  - A node can only point to a child node
  - Root:     1
  - Parent:   1, 3
  - Child:    2, 3, 4, 6, 7
  - Leaf:     2, 4, 6, 7 (very end of a tree data structure)
  - Sibling:  2, 3, 4, 6, 7
  - Sub Tree: 3, 6, 7
  - Hierarchal structure
  ```
             1              
           / | \ 
          2  3  4           
            / \   
           6   7 
```

# Perfect Binary Tree
  - Very efficient and desirable
  - Each child node has two children nodes
  - Bottom layer is completely filled and nothing is missing
    - The number of nodes double as we move down each tree 
    - The sum of the lowest level is total of all nodes above it plus 1
```
            1O1              1
           /   \ 
          33   105           2
         / \   / \
        9  10 54  144        4 
```

# Full Binary Tree
Priority Queue
-  Top down
-  Starting from left to right on each layer
- A node has either 0 or 2 but never 1
```
             O
           /   \
          O     O
         / \  
        O   O
           / \
          O   O
```
