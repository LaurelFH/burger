var connection = require("../config/connection.js");

//need to include helper functions for the syntax or better to hardcode that in?

// // Helper function for SQL syntax.
// function printQuestionMarks(num) {
//   var arr = [];

//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }

//   return arr.toString();
// }

// // Helper function for SQL syntax.
// function objToSql(ob) {
//   var arr = [];

//   for (var key in ob) {
//     if (Object.hasOwnProperty.call(ob, key)) {
//       arr.push(key + "=" + ob[key]);
//     }
//   }

//   return arr.toString();
// }


//methods to exceute the MySQL commands in the controllers/retrive and store data in the burgder_db;
// Object for all our SQL statement functions.
var orm ={

selectAll: function(tableInput, cb){

 var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

//usual insert function from mySQL (like with seeds)
//need all values for the table, col, val and the callback
insertOne: function (table, col, vals, cb){
	var queryString = "INSERT INTO" + table;



},



updateOne: function(table, objColVals, condition, cb){
	var queryString = "UPDATE" + table;




	}


};


module.exports = orm;


//more on objToSQL:  