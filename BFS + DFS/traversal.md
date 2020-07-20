# BFS vs. DFS `O(N)` for both

## BFS
- Goes down the root, going from left to right
- Higher memory requirement (when visiting a parent node, it has to keep track of child node so it can go back to it later)
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
### Pros 
- Good for finding shortest path
- Closer nodes
### Cons
- Requires more memory

## DFS
- As deep as possible, starting from the left then going right
- Depth first
- Follows one branch all the way down until the target is found or the end is reached
- When the target can't be found, it goes to the nearest ancestor with an unexplored child
- ``9 -> 6 -> 1 -> 4 -> 12 -> 34 -> 45``
```
      9
    /   \
   6    12
  / \   / \
 1   4 34  45
```
### Pros 
- Less memory
- Does the path exist? Source node to target node
### Cons
- Can get slow
- Lower memory requirement

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