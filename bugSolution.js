```javascript
// Correct use of $or operator to handle null values
db.collection.find({$or: [{field: 1}, {field: 2}, {field: null}]})
```