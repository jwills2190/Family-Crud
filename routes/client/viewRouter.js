const router = require("express").Router();
const {
    getIndexPage,
    renderAllFamily,
    renderOneMember,
    renderCreateFamilyMember,
    renderUpdateFamilyMember
} = require("../../controllers/client/viewController");

// localhost:3000
router.get("/", getIndexPage)

// localhost:3000/allFam
router.get("/allFam", renderAllFamily);

// localhost:3000/oneMember/:name
router.get("/oneFam/:name", renderOneMember);

// localhost:3000/createFamilyMember
router.get("/createFamilyMember", renderCreateFamilyMember)

router.get("/updateFam/:name", renderUpdateFamilyMember)

module.exports = router;