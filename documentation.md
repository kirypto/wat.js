[Back to the readme](README.md)

# Documentation

## Literals

Literals are stored in the root object `_`. The keys are as follows:

*   `0   -->  _._`
*   `1   -->  _.$`
*   `""  -->  _.__`
*   `"," -->  _._$`
*   `"-" -->  _.$_`


### Literal Zero (`_._`)

Code: `_._ = +[]`  
Explanation:  
This results in `0`. No good explanation, just "because javascript"


### Literal One (`_.$`)

Code: `_.$ = ![][{}]-[]`  
Explanation:  
`[][{}]` creates an empty list and index it with an empty object. This is valid in javascript, and results with
`undefined`. `!undefined` (or `![][{}]`) in javscript results in `true`. When you subtract one thing with
another, javascript often tries to *repair* this by converting both to integers. `[]` converts to an empty
string, which converts to an integer resulting in `0`. This now gives us `true - 0 `, which converts `true` to
an integer, giving `1 - 0`, resulting in `1`.


### Literal Empty String (`_.__`)

Code: `_.__ = []+[]`  
Explanation:


### Literal Comma Character (`_._$`)

Code: `_._$ = [[],[]]+[]`  
Explanation:


### Literal Dash Character (`_.$_`)

Code: `_.$_ = ([]-![][{}]+[])[!{}-[]]`  
Explanation:
