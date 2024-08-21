const express = require("express")
const moment = require("moment")
const db = require("../config/db")

var User = function(data){

}
User.taskdetails = async function(postdata){
    return new Promise(function(resolve, reject){
        var nowDateTime = moment(Date()).format("DD-MM-YYYY HH:mm:ss")
        var insertedata = {
            firstname : postdata.firstname ? postdata.firstname : "",
            surname : postdata.surname ? postdata.surname : "",
            designation : postdata.designation ? postdata.designation : "",
            created_at : nowDateTime,
            updated_at : nowDateTime
 
        }

        var querystring = "insert into tg_tasks1 set ?"
        db.query(querystring, insertedata, function(err, res){
            if(err){
                console.log("error:--", err)
                return reject(err)
            }
            else{
                console.log("response:---", res)
                return resolve(res)
            }
        })
    })

}

User.getalldetails = async function(postdata){
    return new Promise(function(resolve, reject){
        var querystring = "select * from tg_tasks1 WHERE status = 1"
        db.query(querystring, function(err, res){
            if(err){
                console.log("Error", err)
            }
            else{
                console.log("response", res)
                return resolve(res)
            }
        })
    })
}

User.updatedetails = async function(postdata){
    return new Promise(function(resolve, reject){
        var nowDateTime = moment(Date()).format("DD-MM-YYYY HH:mm:ss")
        var updatedvalues = {
            firstname : postdata.firstname ? postdata.firstname : "",
            surname : postdata.surname ? postdata.surname : "",
            designation : postdata.designation ? postdata.designation : "",
            created_at : nowDateTime,
            updated_at : nowDateTime
        }
        
        var querystring = "update tg_tasks1 set ? where id = ?"
        var filetr = [updatedvalues, id]
        
        db.query(querystring, filetr, function(err, res){
            if(err){
                console.log("Error",err)
                return reject(err)
            }
            else{
                console.log("response",res)
                return resolve(res)
            }
        })
    })
}

User.inactiveuser = async function(postdata){
    return new Promise(function(resolve, reject){
        var querystring = "update tg_tasks1 set status = 0 where id = ?"
        db.query(querystring, postdata, function(err, res){
            if(err){
                console.log("Error",err)
                return reject(err)
            }
            else{
                console.log("response",res)
                return resolve(res)
            }
            
        })
    })
}

User.activeuser = async function(postdata){
    return new Promise(function(resolve, reject){
        var querystring = "update tg_tasks1 set status = 1 where id = ?"
        db.query(querystring, postdata, function(err, res){
            if(err){
                console.log("Error",err)
                return reject(err)
            }
            else{
                console.log("response",res)
                return resolve(res)
            }
            
        })
    })
}




module.exports = User