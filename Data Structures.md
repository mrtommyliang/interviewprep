
## Balanced BST
 - lookup O(log N)
 - insert O(log N)
 - delete O(log N)

  

## Unbalanced BST - worst case

 - Bad because of slow look up, it increases from O(log N) to O(N)
 -   A tree's biggest advantage is it's hierarchy structure, the way it
   maintains parent-child node relationship
 - lookup O(n)
-   insert O(n)
-  delete O(n)

				1O5 								1
	    	/		 |		\
	      101  	102		144 					3
						      \
					    	  231 					1

## BST rules and info

- Aren't the fastest for everything

- Array or object may have faster time

Pros:

-	Better than O(N)

-	Ordered

-	Flexible Size

-	Inserts and delete will be faster unless they are going to the beginning or the end

Cons:

- No O(1) operations - will require some sort of traversal

- Compared to an array, a lookup will be much faster in a BST versus an entire array if its not sorted

All nodes on the right of side of the tree must be larger than ones on the left

        101, 105, 144
        33, 37

All nodes on the left side of the tree must be smaller than the ones on the left

        101, 33, 9
        105, 54

-   BST is fast because you can search for a node using conditionals

-   No Need to iterate through every value

Finding 37:
-   Is 37 larger than 101?
    -   No -> go down left tree
        -   Is 33 larger than 37?
            - Yes -> go down right tree

  
```
1O1             1

/    \

33    105       2

/ \   /  \

9 37 54 144     4
```