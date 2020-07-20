# BFS vs. DFS

## BFS
- Goes down the root, going from left to right
- ``9 -> 6 -> 12 -> 1 -> 4 -> 34 -> 45``
```
      9
    /   \
   6    12
  / \   / \
 1   4 34  45
```
- Uses additional memory because it also needs to track the child nodes 
- Track every node + child node

# Traversal
- If you know a solution is not far from the root of the tree:
  - BFS
- If the tree is very deep and solutions are rare, 
  - BFS (may use a lot of memory)
  - DFS will take long time
  - Goes all the way down (DFS uses recursive functions so it will take a long time)
- If the tree is very wide:
  - DFS (BFS will need too much memory)
- If solutions are frequent but located deep in the tree
  - DFS
- determining whether a path exists between two nodes
  - DFS
- Finding the shortest path
  - BFS