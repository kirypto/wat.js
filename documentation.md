[Back to the readme](README.md)

# Documentation

## Contents

-   Literals
    -   `0`    -->  `_._`   [*link*](#literal-zero)
    -   `1`    -->  `_.$`   [*link*](#literal-one)
    -   `""`   -->  `_.__`  [*link*](#literal-empty-string)
    -   `","`  -->  `_._$`  [*link*](#literal-comma-character)
    -   `"-"`  -->  `_.$_`  [*link*](#literal-dash-character)
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
-   Operators
    -   Ternary Operator  -->  `$.__(conditional, trueVal, falseVal)` [*link*](#ternary-operator)  
        *Summary*: Returns either `trueVal` or `falseVal` based on the value of `conditional`  
        *Parameters*:
        -   `conditional` :: `boolean`  | used to determine return value
        -   `trueVal`     :: `any type` | the value returned if conditional is true
        -   `falseVal`    :: `any type` | returned if conditional is false
        *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
    -   Iteration Function  -->  `$.$$(startVal, targetVal, comparator, mutator, item, extractor, joiner, baseVal)`
        [*link*](#iteration-function)  
        *Summary*: General case iteration function, designed to handle any loop requiring situation  
        *Parameters*:
        -   `startVal`   :: `any type`                     | the initial value of the loop
        -   `targetVal`  :: `any type`                     | the terminating value of the loop
        -   `comparator` :: `func(currVal, targetVal)`     | a function that, given the current loop value and the
            target loop value, returns true if the loop should continue and false otherwise
        -   `mutator`    :: `func(currVal)`                | a function that, given the current loop value, returns the
            value for the next iteration of the loop
        -   `item`       :: `any type`                     | an item to iterate over *(null can be used if
            unnecessary)*
        -   `extractor`  :: `func(item, currVal)`          | a function that, given the item param and the current loop
            value, returns the desired value for the current iteration *(if the item is null, just return the currVal)*
        -   `joiner`     :: `funct(currVal, recursiveVal)` | a function that, given the current loop value and the next
            loop value (built recursively upwards), joins the two values *(add them, insert into list, etc.)*
        -   `baseVal`    :: `any type`                     | the value to return once the comparator returns false
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
-   Types
    -   Array  -->  `$$._()` [*link*](#array)
        -   Constructor  -->  `$$._()`
        -   Lenth        -->  `$$._._(arr)` or `arr._()`
        -   Insert At    -->  `$$._.__(arr, index, value)` or `arr.__(index, value)`
        -   Prepend      -->  `$$._.___(arr, value)` or `arr.___(value)`
        -   Append       -->  `$$._.__$(arr, value)` or `arr.__$(value)`

*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
## Literals

### Literal Zero

 (`_._`)

Code: `_._ = +[]`  
Explanation:  
This results in `0`. No good explanation, just "because javascript"


### Literal One

Code: `_.$ = ![][{}]-[]`  
Explanation:  
`~` is the bitwise not operator. `~[]` appears to cast consider the empty list to be `0`, thus giving `~0`. This
results in `-1`. Multiplying that by negative one (`-~[]`) results in one.


### Literal Empty String

Code: `_.__ = []+[]`  
Explanation:Explanation:
`TODO`


### Literal Comma Character

Code: `_._$ = [[],[]]+[]`  
Explanation:
`TODO`


### Literal Dash Character

Code: `_.$_ = ([]-![][{}]+[])[!{}-[]]`  
Explanation:
`TODO`


*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
## Operators

### Ternary Operator

Code: `$.__ = ($_$,$_$_,$_$$)=>([$_$_][$_$-_.$]||$_$$)`  
Explanation:
`TODO`

### Iteration Function

Code: `$.$$ = ($_$,$_$_,$_$$,$_$__,$_$_$,$_$$_,$_$$$,$_$_$_)=>(($.__($_$$($_$,$_$_),()=>($_$$$($_$$_($_$_$,$_$),$.$$(
$_$__($_$),$_$_,$_$$,$_$__,$_$_$,$_$$_,$_$$$,$_$_$_))),()=>($_$_$_)))())`  
Explanation:
`TODO`


*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
## Types

### Array

-   Constructor  -->  `$$._()`
-   Lenth        -->  `$$._._(arr)` or `arr._()`
-   Insert At    -->  `$$._.__(arr, index, value)` or `arr.__(index, value)`
-   Prepend      -->  `$$._.___(arr, value)` or `arr.___(value)`
-   Append       -->  `$$._.__$(arr, value)` or `arr.__$(value)`
