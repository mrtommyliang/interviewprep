/*
Given n processes, each process has a unique PID (process id) and its PPID (parent process id).

Each process only has one parent process, but may have one or more children processes. This is just like a tree structure. Only one process has PPID that is 0, which means this process has no parent process. All the PIDs will be distinct positive integers.

We use two list of integers to represent a list of processes, where the first list contains PID for each process and the second list contains the corresponding PPID.

Now given the two lists, and a PID representing a process you want to kill, return a list of PIDs of processes that will be killed in the end. You should assume that when a process is killed, all its children processes will be killed. No order is required for the final answer.

Example 1:
Input:
        c, c, c, c
pid =  [1, 3, 10, 5]

ppid = [3, 0, 5, 3]
        p, p, p, p
kill = 5
Output: [5,10]
Explanation:
           3
         /   \
        1     5
             /
            10
Kill 5 will also kill 10.
*/

/*
Create a map map, linking the ppids (parent process ID) with the pids (process IDs)
Once you haev a starting point and a kill pid, do BFS starting with it and pushing every new child you encounter in a while loop
*/

let pid = [1, 3, 10, 5]
let ppid = [3, 0, 5, 3]
let kill = 5

const killProcess = (pid, ppid, kill) => {
  let tree = {}
  let processesKilled = [kill]

  // add all immediate children to the tree hash
  for (let i = 0; i < pid.length; i++) {
    let curr = pid[i]
    let parent = ppid[i]
    if (!tree[parent]) {
      tree[parent] = [curr]
    } else {
      tree[parent].push(curr)
    }
  }

  // if the node to kill has no children, end here
  if (!tree[kill]) return processesKilled

  // else, DFS it's children
  let children = tree[kill]
  while (children.length) {
    let toKill = children.pop()
    processesKilled.push(toKill)
    if (tree[toKill]) {
      children = [...children, ...tree[toKill]]
    }
  }
  return processesKilled
}

