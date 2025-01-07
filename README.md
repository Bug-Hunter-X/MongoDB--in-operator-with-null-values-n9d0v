# MongoDB $in Operator with Null Values

This repository demonstrates a common issue when using the `$in` operator in MongoDB queries with arrays containing `null` values.

The problem is that when the array passed to `$in` contains a `null` value, the query will not match documents where the field is `null`. This can lead to unexpected results and errors in your application.

## Bug
The `bug.js` file contains the erroneous MongoDB query.  The query attempts to find documents where the field matches 1, 2, or null. However, it incorrectly returns an empty array, excluding documents with a null field.

## Solution
The `bugSolution.js` file shows the correct approach. To correctly handle null values, you must use the `$or` operator which allows you to effectively check if the field is 1, 2, or null.  This ensures accurate results.

## How to reproduce
Clone this repository and run the `bug.js` script. Observe the empty result set. Then, run `bugSolution.js` and see the correct results, including documents where the field value is `null`.