const Family = require("../../models/familyModel");

async function getIndexPage(req, res) {
    res.render("index")
}


async function renderAllFamily(req, res) {
    try {
        let result = await Family.find({})

        res.render("allFam", { family: result })
    } catch (error) {
        let errorObj = {
            message: "render all family failed",
            payload: error
        }
        console.log(errorObj)

        res.json(errorObj)
    }
}

async function renderOneMember (req, res) {
    try {
        let result = await Family.findOne({ Name: req.params.name }) 

        res.render("oneFam", { oneFam: result })
    } catch (error) {
        let errorObj = {
            message: "render one family member failed",
            payload: error
        }
        console.log(errorObj)

        res.json(errorObj)
    }
}

async function renderCreateFamilyMember (req, res) {
    try {
        res.render("createFam")
    } catch (error) {
        let errorObj = {
            message: "render create family member failed",
            payload: error
        }
        console.log(errorObj)

        res.json(errorObj)
    }
}

async function renderUpdateFamilyMember (req, res) {
    try {
        let result = await Family.findOne({ Name: req.params.name })

        res.render("updateFam", {family: result})
    } catch (error) {
        let errorObj = {
            message: "render update family member failed",
            payload: error
        }
        console.log(errorObj)

        res.json(errorObj)
    }
}

module.exports = {
    getIndexPage,
    renderAllFamily,
    renderOneMember,
    renderCreateFamilyMember,
    renderUpdateFamilyMember
}
