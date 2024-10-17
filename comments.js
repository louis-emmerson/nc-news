const express = require("express")
const { getComment, deleteComment } = require("./controllers/comments-controller")
const router = express.Router()


router.get("/:comment_id", getComment)

router.delete("/:comment_id", deleteComment)


module.exports = router