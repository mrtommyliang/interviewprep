# Which sorting is best for what situation?
- Insertion sort
  - Used only with a few items and mostly sorted
  - Uses very little space and easy to implement
- Bubble Sort
  - Rarely used
- Selection Sort
  - Rarely used
- Merge Sort (*most used*)
  - Harder to implement
  - Divide and conquer
    - O(N log(n)) best case + worst case 
    - Expensive space complexity O(N)
- Quick Sort (*most used*)
  - Harder to implement
  - If pivot point is not chosen properly, a very slow sort is possible

# Sorting Exercise

- Sort 10 schools around your house by distance
  - Insertion sort (few items and mostly sorted)
- eBay sorts listings by the current Bid amount
  - Radix or counting sort 
    - always numbers that need to be sorted
    - integers that probably won't be $100M
- Sport scores on ESPN
  - Quick sort
- Massive database (can't fit all into memory) needs to sort through past year's user data
  - Merge sort (divide and conquer principle)
- Almost sorted Udemy review data needs to update and add 2 new reviews
  - Insertion sort (mostly sorted already)
- Temperature Records for the past 50 years in Canada
  - Radix or counting sort (if there were no decimal places)
  - Quick sort (if there are decimal places)
- Large user name database needs to be sorted. Data is very random
  - Merge sort if enough memory or inexpensive
  - Quick sort if not worried about worst case (choose a good pivot)
- You want to teach sorting for the first time
  - Bubble sort, selection sort