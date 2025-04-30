### 1.
Line 9 Prints: "values added:  20"

### 2.
Line 13 Prints: "final result:  20"

### 3.
You should not use var because as mentioned before earlier in the lab that var is function scoped meaning that its visible to the entire function if declared anywhere.

### 4.
Line 9 still prints: "values added:  20"

### 5.
Line 13 throws an error this time though.
The error is a Reference Error saying that "result is not defined". This error is returned because "let" is block scoped, meaning it only lives in the within the pair of brackets its been declared in.

### 6.
Line 9 returns an error. This is because we are declaring result as a constant and then trying to change it with addition, which doesnt work.

### 7.
And we never get to line 13 because of the error thrown at line 9.

