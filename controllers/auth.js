const User=require("../models/user.js")
const bcrypt=require('bcrypt')

const authCtrl={}

authCtrl.signup=async (request,response)=>{
    const {firstName,lastName,email,password}=request.body;
    const user=new User({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
    })
    try{
        user.password=bcrypt.hashSync(user.password, 10)
        const newUser=await user.save()
        response.send({message:"User created successfully",newUser})
    }
    catch(exception){
        console.log(exception)
        response.status(500).send({error:"Internal Server Error"})
    }
    //response.send("Hey!,you've signed in successfully")
}

module.exports=authCtrl