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
  let map = new Map()

  // put all values into two map maps
  for (let i = 0; i < pid.length - 1; i++) {
    // set each PID as key and PPID as value
    // if the ppid exists within the map
    if (map.get(ppid[i])) {
      // instantiate child to be each value of the ppid
      let child = map.get(ppid[i])
      child.push(pid[i])
      map.set(ppid[i], child)
    } else {
      let child = []
      child.push(pid[i])
      map.set(ppid[i], child)
    }
  }

  let killList = []
  killList.push(kill)

  let children = []
  if(map.get(kill)) {
    children = map.get(kill)
  }

  // Using a queue, insert each children to kill their processes until they run out
  while(children.length > 0) {
    let newTarget = children.shift()
    killList.push(newTarget)

    if(map.get(newTarget)) {
      let newChildren = map.get(newTarget)

      // Insert each list of newChildren into the existing chilren
      for(let i = 0; i < newChildren.length - 1; i++) {
        children.push(newChildren[i])
      }
    }
  }
  return killList
}

