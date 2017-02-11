Knapsack
--------

url: https://www.hackerrank.com/challenges/unbounded-knapsack

Given a list of  integers, , and another integer,  representing the expected sum. Select zero or more numbers from  such that the sum of these numbers is as near as possible, but not exceeding, to the expected sum ().

Note

Each element of  can be selected multiple times.
If no element is selected then the sum is 0.
Input Format

The first line contains  the number of test cases. 
Each test case comprises of two lines. First line contains two integers,  , representing the length of list  and expected sum, respectively. Second line consists of  space separated integers, , representing the elements of list .

Constraints 
 
 
 

Output Format

Output  lines, the maximum sum for each test case which is as near as possible, but not exceeding, to the expected sum (k).

Sample Input

2
3 12
1 6 9
5 9
3 4 4 4 8
Sample Output

12
9
Explanation

In the first test case, one can pick {6, 6}. In the second, we can pick {3,3,3}.