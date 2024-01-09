const router = require('express').Router();

const {
    getAllFamily,
    getOneMember,
    createOneFamilyMember,
    deleteFamilyMember,
    updateFamilyMember
} = require("../../controllers/api/familyController")

// localhost:3000/api/family/allFamily
router.get("/allFamily", getAllFamily)

// localhost:3000/api/family/oneFam/:name
router.get("/oneFam/:name", getOneMember);

// localhost:3000/api/family/createOneFamilyMember
router.post("/createOneFamilyMember", createOneFamilyMember)

// localhost:3000/api/family/deleteFamilyMember/:name
router.delete("/deleteFamilyMember/:name", deleteFamilyMember);

// localhost:3000/api/family/updateFam/:name
router.put("/updateFam/:name", updateFamilyMember)
module.exports = router