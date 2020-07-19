# Binary Heap
## Pros:
-    Better than O(N)
-    Priority
-    Flexible Size
-    Fast insert
## Cons:
-    Slow lookup
-    Values can bubble up

# General Info

-  Can be used in any algorithm where ordering is important
-  Left and right nodes can be any value as long as its less than the parent node
-  Really great at comparative operations
     -  Looking for values over 33 for example
-  Used a lot if:
   -  Data storage
   - Priority queues
   - Sorting algorithms

###  lookup O(n)
   - If we're looking for "1" node in the below example:
     - 101 is greater than 1 so we traverse down to both children nodes and look at 72 and 33
     - 72 and 33 are greater than one so we continue to traverse down and look at those children nodes: 2, 45, 5, 1
###  insert O(log N)
  -  Best case O(1)
  -  Worst case O(log N)
  -  Values bubble upwards
     -  If a root node is 91 with right child of 62 and another right child of 51, adding a 100 node can start as a child of 51, and make its way up
``` 
      91                  91                  91                  100*
        \                   \                  \                   \
        62                  62                  100*                 91
          \                   \                  \                   \
          51                  100*                62                  62
            \                   \                  \                   \
            100*                 51                 51                  51
  delete O(log N)
```

-  Max Heap:
   -  Root node is largest, goes it descending order
   -  Every parent node is larger than their child nodes
```
            1O1            
           /   \ 
          72   33        
         / \   / \
        2  45 5   1       
```

##  Min Heap:
-  Root node is the smallest

## Priority Queue
  -  Top down
  -  Starting from left to right on each layer