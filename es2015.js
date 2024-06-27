var PI = 3.14;
PI = 42;

// the ES2015 Global Constants version of this would look something like this...

let PI = 3.14;
PI = 42;

//- What is the difference between VAR and LET?

//--You can reassign and redeclare with VAR but you cannot redeclare using the LET keyword
//--You can access a hoisted variable with VAR, LET creates block scope

//- What is the difference between VAR and CONST?

//--you can reassign and redeclare with VAR, but you can not redeclare or reassign using the CONST keyword.
//--You can access a hoisted variable with VAR. CONST creates block scope

//- What is the difference between LET and CONST?

//--You can reassign with LET, but you can not redeclare or reassign using the CONST keyword

//- What is hoisting?

//--it is the way that we explain how the JS compiler works. Variables are lifting or "hoisted" to the top of the scope they are declared in.
//--When using VAR, you can access the variable name and it's undefined value before it is used later on.
//--Function declarations are also hoisted and can be invoked "before" they are defined in a codebase
