/**
 * Registration handler model 
 */
exports.register = function(req,res){
    // console.log("req",req.body);
    var today = new Date();
    var users={
      "firstname":req.body.firstname,
      "surname":req.body.surname,
      "last6digit":req.body.last6digit,
      "yearofbirth": req.body.yearofbirth,
      "mobile": req.body.mobile,
      "password":req.body.password,
      "created":today,
      "modified":today
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      console.log('The solution is: ', results);
      res.send({
        "code":200,
        "success":"user registered sucessfully"
          });
    }
    });
  }

  /**
   * Login handler model
   */

  exports.login = function(req,res){
    var userId= req.body.userId;
    var password = req.body.password;
    connection.query('SELECT * FROM users WHERE userId = ?',[userId], function (error, results, fields) {
    if (error) {
      // console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      // console.log('The solution is: ', results);
      if(results.length >0){
        if(results[0].password == password){
          res.send({
            "code":200,
            "success":"login sucessfull"
              });
        }
        else{
          res.send({
            "code":204,
            "success":"userId and password does not match"
              });
        }
      }
      else{
        res.send({
          "code":204,
          "success":"userId does not exits"
            });
      }
    }
    });
  }