const express = require("express")
const { validationResult, matchedData } = require("express-validator")
const db = require("../config/db")
const mastermodal = require("../modal/mastermodal")

exports.taskdetails = async function(req, res){
    const errors = validationResult(req)
    if(!errors.isEmpty){
        const x = matchedData(req)
        return res.send({message : "inavlid value ", status : "invalid", err : errors.mapped()})
    }
    try{
        db.beginTransaction()
        var details = await mastermodal.taskdetails(req.body)
        if(details.insertId){
            db.commit()
            res.status(200).json({message : "Data inserted successfully:---", Data : req.body})
        }
        else{
            db.rollback()
            res.status(400).json({message : "error in inserting details"})
        }
    }catch(error){
        db.rollback()
        res.status(500).json({message : "rollback error"})
    }
}

// exports.getalldetails = async (req, res) => {
//     try {
//       const result = await mastermodal.getalldetails(req.body);
//       res.send({ message: "Data Get sucessfully:--", data: result, data1:req.body });
//     } catch (error) {
//       console.log(error);
//     }
//   };
exports.getalldetails = async function(req, res){
    try{
        db.beginTransaction()
        console.log("data req", req.body)

    var details = await mastermodal.getalldetails()
    if(details.length > 0){
        db.commit()
        res.status(200).json({message : "All details:---", Data : details})
    }
    else{
        db.rollback()
        res.status(404).json({message : "error in getting"})
    } 

    }catch(error)
    {
        db.rollback()
        res.status(500).json({message : "rollback error"})
    }

}

exports.updatedetails = async function(req, res){
    const errors = validationResult(req)
    if(!errors.isEmpty){
        const x = matchedData(req)
        return res.send(400).json({message : "inivalid values", status : "invalid", err : errors.mapped()})
    }
    try{
        db.beginTransaction()
        id = req.params.id
        var updated = await mastermodal.updatedetails(req.body)
        if(updated.affectedRows){
            db.commit()
            res.status(200).json({message : "Details has been updated successfully:---", Data : req.body})
        }
        else{
            db.rollback()
            res.status(404).json({message : "error in updating"})
        }

    }catch(error){
        db.rollback()
        res.status(500).json({message : "rollback error"})
    }
}

exports.inactiveuser = async function(req, res){
    const errors = validationResult(req)
    if(!errors.isEmpty){
        const x = matchedData(req)
        return res.send({message : "invalid values ", status : "invalid", err : errors.mapped()})
    }
    try{
        db.beginTransaction()
        var id = req.params.id
        var inactiveuser = await mastermodal.inactiveuser(id)
        if(inactiveuser.affectedRows){
            db.commit()
            res.status(200).json({message : "User is InActive:--- "})
        }
        else{
            db.rollback()
            res.status(404).json({message : "error in inacive"})
        }
    }catch(error){
        db.rollback()
        res.status(400).json({message : "rollback error"})
    }
}


exports.activeuser = async function(req, res){
    const errors = validationResult(req)
    if(!errors.isEmpty){
        const x = matchedData(req)
        return res.send({message : "invalid values ", status : "invalid", err : errors.mapped()})
    }
    try{
        db.beginTransaction()
        var id = req.params.id
        var activeuser = await mastermodal.activeuser(id)
        if(activeuser.affectedRows){
            db.commit()
            res.status(200).json({message : "Now the user is Active:--- "})
        }
        else{
            db.rollback()
            res.status(404).json({message : "error in inacive"})
        }
    }catch(error){
        db.rollback()
        res.status(400).json({message : "rollback error"})
    }
}