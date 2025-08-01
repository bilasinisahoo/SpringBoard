//Create a utils directory. Within the utils directory, create individual
// modules: stringUtils.mjs for string manipulation functions and numberUtils.mjs for numeric operations
  //that export various utility functions. Implement the index.mjs, which aggregates and re-exports all utility functions
  // from the utils directory, 
//facilitating a single point of import.

export const uppercase = (s) => s.charAt(0).toUpperCase() ;
