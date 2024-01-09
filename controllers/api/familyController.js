const Family = require("../../models/familyModel");

async function getAllFamily (req, res) {
    try {
        let result = await Family.find({}) // .find returns an object

        res.json({
            message: "success",
            payload: result
        })
    } catch (error) {
        let errorObj = {
            message: "get all family failed",
            payload: error
        }
        // server-side error log
        console.log(errorObj);

        // client-side error log
        res.json(errorObj);
    }
}

async function getOneMember(req, res) {
    try {
        let result = await Family.findOne
        ({ Name: req.params.name })

        res.json({
            message: "Success",
            payload: result
        })
    } catch (error) {
        let errorObj = {
            message: "get one member failed",
            payload: error
        }
        // server-side error log
        console.log(errorObj);

        // client-side error log
        res.json(errorObj);
    }
}

async function createOneFamilyMember (req, res) {
    try {
        let newFamilyMember = {
            Name: req.body.Name,
            Relation: req.body.Relation,
            Age: req.body.Age,
            City: req.body.City,
            Birthplace: req.body.Birthplace,
            Lived_In: req.body.Lived_In.split(", ")

        }

        await Family.create(newFamilyMember)

        // res.json({
        //     message: "success",
        //     payload: newFamilyMember
        // })
        res.redirect(`/oneFam/${newFamilyMember.Name}`)
    } catch (error) {
        let errorObj = {
            message: "create one family member failed",
            payload: error
        }
        // server-side error log
        console.log(errorObj);

        // client-side error log
        res.json(errorObj);
    }
}

async function deleteFamilyMember (req, res) {
    try {
        await Family.deleteOne({Name: req.params.name})

        // res.json({
        //     message: "success",
        //     payload: `deleted ${req.params.name}`
        // })

        res.redirect("/allFam")
    } catch (error) {
        let errorObj = {
            message: "delete family member failed",
            payload: error
        }
        // server-side error log
        console.log(errorObj);

        // client-side error log
        res.json(errorObj);
    }
}

async function updateFamilyMember (req, res) {
    try {
        let targetFamilyMember = Family.findOne({ Name: req.params.Name })

        let updatedFamilyMember = {
            Name: req.body.Name ? req.body.Name : targetFamilyMember.Name,
            Relation: req.body.Reation ? req.body.Relation : targetFamilyMember.Relation,
            Age: req.body.Age ? req.body.Age : targetFamilyMember.Age,
            City: req.body.City ? req.body.City : targetFamilyMember.City,
            Birthplace: req.body.Birthplace ? req.body.Birthplace : targetFamilyMember.Birthplace,
            Lived_In: req.body.Lived_In ? req.body.Lived_In.split(", ") : targetFamilyMember.Lived_In,
        }

        await Family.updateOne(
            { Name: req.params.name },
            { $set: updatedFamilyMember },
            {upser: true }
        )

        // res.json({
        //     message: "success",
        //     payload: updatedFamilyMember
        // })
        res.redirect(`/oneFam/${updatedFamilyMember.Name}`)

    } catch (error) {
        let errorObj = {
            message: "update family member failed",
            payload: error
        }
        // server-side error log
        console.log(errorObj);

        // client-side error log
        res.json(errorObj);
    }
}

module.exports = {
    getAllFamily,
    getOneMember,
    createOneFamilyMember,
    deleteFamilyMember,
    updateFamilyMember
}