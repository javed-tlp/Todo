const express = require("express")
const mastercontroller = require("../controller/mastercontroller")
const router = express.Router()

router.post("/taskdetails", mastercontroller.taskdetails)
router.get("/getalldetails", mastercontroller.getalldetails)
router.post("/updatedetails/:id", mastercontroller.updatedetails)
router.post("/removeuser/:id", mastercontroller.inactiveuser)
router.post("/adduser/:id", mastercontroller.activeuser)

module.exports = router
