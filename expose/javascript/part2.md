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
output = '32'
This is because we are concatenating a string with an integer.
<br>

B. '3' - 2 <br>
output = 1
Now this only works with numbers because it tries to squish both together to numbers.
<br>

C. 3 + null <br>
output = 3
In this case null = 0, therefore 3+0 = 3
<br>

D. '3' + null
output = '3null'
This is string concatenation because '3' is a string and then it considers 'null' as a string, ultimately giving us '3null'
<br>

E. true + 3
output = 4
Here, true = 1, and then we add 1 + 3 to get 4.
<br>

F. false + null
output = 0
Here, false = 0, and null = 0, therefore 0+0=0.
<br>

G. '3' + undefined
output = '3undefined'
This is once again triggering string concatenation.
<br>

H. '3' - undefined
output = NaN
This output is because it is tring to convert both to numbers, so it works for 3 but doesnt for undefined because undefined is doesn't mean anything, therefore giving us NaN.


### 14.

1. '2' > 1
output = true
This is because 2 is turned into a number.

2. '2' < '12'
output = false
This is because both are considered as strings in this case, and when compared using the dictionary, the 2 comes after the 1 when we compare by character.

3. 2 == '2'
output = true
This is essentially integer equality

4. 2 === '2'
output = false
Now this operator is the strict equality therefore there is no coercion and comparing an integer to a string is false.

5. true == 2
output = false
True is coerced to the integer 1 which is not equal to 2.

6. true === Boolean(2)
output = true
This is because this is a strict equality and the value of Boolean(2) is true therefore true === true.


### 15.
The difference between == and === is that:
== is equality with coercion. This means that it will try to make both operands to be of the same type if possible.
whereas === is the strict equality symbol which means that it will compare both operands as is.


### 16.
Check part2-question16.js

### 17.
Calling the given function with the parameters **modifyArray([1,2,3], doSomething)** will result in the output of **[2,4,6]**.
I came to this result by the following process.
First, we are calling *modifyArray* with the values [1,2,3] and *doSomething* (which is a function), and then within that *modifyArray*, we loop through the values of the array we passed. While looping through the values, we then call the *doSomething* function, which doubles the value of the input. And then we push this doubled value into our newArray in the *modifyArray* function. Once all values have been iterated through and doubled, we return the new array with all doubled values.

### 18.
Check part2-question18.js

### 19.
Output of the given code is:
1 <br> 4 <br> 3 <br> 2