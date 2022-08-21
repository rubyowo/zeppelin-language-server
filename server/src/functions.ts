export interface TagFunction {
  name: string;
  description: string;
  arguments: string[];
  returnValue: string;
  signature?: string;
  examples?: string[];
}

export const functions: TagFunction[] = [
  {
    name: "if",
    description: "Checks if a condition is true or false and returns the corresponding ifTrue or ifFalse",
    returnValue: "boolean",
    arguments: ["condition", "ifTrue", "ifFalse"],
    examples: ['if(user.bot, "User is a bot", "User is not a bot")'],
  },
  {
    name: "and",
    description: "Checks if all provided conditions are true",
    returnValue: "boolean",
    arguments: ["condition1", "condition2", "..."],
    examples: ["and(user.bot, user.verified)"],
  },
  {
    name: "or",
    description: "Checks if atleast one of the provided conditions is true",
    returnValue: "boolean",
    arguments: ["condition1", "condition2", "..."],
    examples: ["or(user.bot, user.verified)"],
  },
  {
    name: "not",
    description: "Checks if the provided condition is false",
    returnValue: "boolean",
    arguments: ["condition"],
    examples: ["not(user.bot)"],
  },
  {
    name: "concat",
    description: "Concatenates several arguments into a string",
    returnValue: "string",
    arguments: ["argument1", "argument2", "..."],
    examples: ['concat("Hello ", user.username, "!")'],
  },
  {
    name: "concatArr",
    description: "Joins a array with the provided separator",
    returnValue: "string",
    arguments: ["array", "separator"],
    examples: ['concatArr(["Hello", "World"], " ")'],
  },
  {
    name: "eq",
    description: "Checks if all provided arguments are equal to each other",
    returnValue: "boolean",
    arguments: ["argument1", "argument2", "..."],
    examples: ['eq(user.id, "106391128718245888")'],
  },
  {
    name: "gt",
    description: "Checks if the first argument is greater than the second",
    returnValue: "boolean",
    arguments: ["argument1", "argument2"],
    examples: ["gt(5, 2)"],
  },
  {
    name: "gte",
    description: "Checks if the first argument is greater or equal to the second",
    returnValue: "boolean",
    arguments: ["argument1", "argument2"],
    examples: ["gte(2, 2)"],
  },
  {
    name: "lt",
    description: "Checks if the first argument is smaller than the second",
    returnValue: "boolean",
    arguments: ["argument1", "argument2"],
    examples: ["lt(2, 5)"],
  },
  {
    name: "lte",
    description: "Checks if the first argument is smaller or equal to the second",
    returnValue: "boolean",
    arguments: ["argument1", "argument2"],
    examples: ["lte(2, 2)"],
  },
  {
    name: "slice",
    description: "Slices a string argument at start and end",
    returnValue: "string",
    arguments: ["string", "start", "end"],
    examples: ['slice("Hello World", 0, 5)'],
  },
  {
    name: "lower",
    description: "Converts a string argument to lowercase",
    returnValue: "string",
    arguments: ["string"],
    examples: ['lower("Hello World")'],
  },
  {
    name: "upper",
    description: "Converts a string argument to uppercase",
    returnValue: "string",
    arguments: ["string"],
    examples: ['upper("Hello World")'],
  },
  {
    name: "upperFirst",
    description: "Converts the first character of a string argument to uppercase",
    returnValue: "string",
    arguments: ["string"],
    examples: ['upperFirst("hello World")'],
  },
  {
    name: "rand",
    description: "Returns a random number between from and to, optionally using seed",
    returnValue: "number",
    arguments: ["from", "to", "seed"],
    examples: ["rand(1, 10)"],
  },
  {
    name: "round",
    description: "Rounds a number to the given decimal places",
    returnValue: "number",
    arguments: ["number", "decimalPlaces"],
    examples: ["round(1.2345, 2)"],
  },
  {
    name: "add",
    description: "Adds two or more numbers",
    returnValue: "number",
    arguments: ["number1", "number2", "..."],
    examples: ["add(1, 2)"],
  },
  {
    name: "sub",
    description: "Subtracts two or more numbers",
    returnValue: "number",
    arguments: ["number1", "number2", "..."],
    examples: ["sub(3, 1)"],
  },
  {
    name: "mul",
    description: "Multiplies two or more numbers",
    returnValue: "number",
    arguments: ["number1", "number2", "..."],
    examples: ["mul(2, 3)"],
  },
  {
    name: "div",
    description: "Divides two or more numbers",
    returnValue: "number",
    arguments: ["number1", "number2", "..."],
    examples: ["div(6, 2)"],
  },
  {
    name: "cases",
    description: "Returns the argument at position",
    returnValue: "any",
    arguments: ["position", "argument1", "argument2", "..."],
    examples: ['cases(1, "Hello", "World")'],
  },
  {
    name: "choose",
    description: "Returns a random argument",
    returnValue: "any",
    arguments: ["argument1", "argument2", "..."],
    examples: ['choose("Hello", "World", "!")'],
  },
];