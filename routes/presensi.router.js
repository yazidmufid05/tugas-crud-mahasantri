const presensiController = require("../controllers/presensi.controller");
const router = require("express").Router();

router.post("/", presensiController.create);
router.get("/:id", presensiController.index);
router.delete("/:id", presensiController.destroy);
router.put("/:id", presensiController.update);

module.exports = router;
