const express = require("express");
const User = require("../models/mongooseUserDB");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("signup", { userVisibility: "hidden", passVisibility: "hidden" });
});

router.post("/", async (req, res) => {
  const { username, password, firstname, lastname, gender } = req.body;

  if (!username || !password || !firstname || !lastname) {
    return errResponse()
  }else (userChecker(username))

   function userChecker(username) {
    if(username.length < 2) return err400Response()
     User.findOne({username: username}, (err, userExist) => {
      if(err)  return err500Response()
      if(userExist) return err406Response()
      passwordChecker(password)
    })
  }
  function passwordChecker(password) {
    if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/)) return err400Response()
    firstNameChecker(firstname)
  }
   
  function firstNameChecker(firstname) {
    if(firstname.length < 2 || firstname.length > 30) return err400Response()
    lastNameChecker(lastname)
  }

  function lastNameChecker(lastname) {
    if(lastname.length < 2 || lastname.length > 30) return err400Response()
    createNewUser()
  }

  function createNewUser() {
    const NEW_USER = new User({
      username: username, 
      firstname: firstname, 
      lastname: lastname, 
      password: password,
      gender: gender,
    })
      
    NEW_USER.save((err, user) => {
      
      if (err) {
        console.log(err);
        return err500Response()
      }
        res.json(user) 
    })
  }

  // ==== errors_1
  function err400Response() {
    return res.status(400).json({success: false, msg: 'Not Acceptable'})
  }
  function err406Response() {
    return res.status(406).json({success: false, msg: 'User Already exist'})
  }
  function err500Response() {
    return res.status(500).json({success: false, msg: 'Something went wrong!'})
  }
});

module.exports = router;
