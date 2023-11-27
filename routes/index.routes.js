const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here in MS_Skills");
});

router.get("/test", (req, res, next) => {
  res.json("Test from MS_Skills");
});




module.exports = router;
