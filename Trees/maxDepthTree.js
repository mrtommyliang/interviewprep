/*
Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

Input: root = [1,null,3,2,4,null,5,6]
Output: 3

Root is included
*/

/*
PROGRAM START
  IF root doesn't exist, return 0
  INSTANTIATE counter = 0
  INSTANTIATE queue to empty array 



PROGRAM END
*/


const maxDepth = (root) => {
  if(!root) return null

  let depth = 0
  let queue = []
  queue.push(root)

  while(queue.length) {
    let queueSize = queue.length

    for(let i = 0; i < queueSize; i++) {
      let node = queue.shift()
      queue.push(...node.children)
    }
    depth++
  }
  return depth
}