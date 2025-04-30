### 1.
At line 12: "3" gets printed.

### 2.
At line 13: "150" is printed.

### 3.
At line 14: "150" is printed as well.

### 4.
This function returns

### 5. 
A ReferenceError is thrown. This is because "let" is a local/block scoped, and in this case, the 'i' variable is only blocked within the for loop. Therefore throwing an error since we are trying to access it from outside the loop.

### 6.
Similar to question 5, since discountedPrice is declared inside the for loop with let, that means that it is only blocked within the loop therefore it shows the error as not defined.

### 7.
Since finalPrice is declared outside of the for loop, but still in the function, when we edit it and call it we are able to change its value throughout the function and then printout its corresponding value. In this case, we will print out the finalPrice as 150.

### 8.
This function returns a list of values of the discounted prices. So our input is [100, 200, 300] and then the discounted output is [50, 100, 150].

### 9.
A ReferenceError is thrown. This is because we defined i using "let". Again, as stated before, "let" is block scoped.

### 10.
The length of prices is printed, which is 3 because its initialized as a const and we never change it.

### 11.
This function takes in the original prices and then returns an array with the discounted prices of each item. So in this case the discounted prices are 50, 100, and 150 respectively.


## Data Types
### 12.
1. Acessing Name: <br>
    student.name

2. Accessing Grad Year: <br>
    student["Grad Year"]

3. Calling function for Greeting: <br>
    student.greeting()

4. Accessing the name property: <br>
    student['Favorite Teacher'].name

5. Access index zero in array of courseLoad: <br>
    student.courseLoad[0]

### 13.
A.'3' + 2 <br>
output = 
<br>

B. '3' - 2 <br>
output = 
<br>
C. 3 + null <br>

<br>

D. '3' + null
output = 
<br>

E. true + 3

<br>

F. false + null

<br>

G. '3' + undefined

<br>

H. '3' - undefined