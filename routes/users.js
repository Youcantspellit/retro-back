var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async(req, res) => {
  try {
    const meetingInfo = await SetMeetingInfo.find()
    res.json(meetingInfo)
  } catch (err) {
      res.status(500).json({ message: err.message})
  }

});

router.post("/", async(req,res)=> {
  currentMeeting =  new SetMeetingInfo({
    meetingTitle: req.body.meetingTitle,
    meetingTime: req.body.meetingTime,
    isCommentMode: req.body.isCommentMode,
    commentMode: req.body.commentMode,
    isReviewMode: req.body.isReviewMode,
    reviewMode: req.body.reviewMode
  })
  try {
    const newMeeting = await currentMeeting.save()
    res.status(201).json(newMeeting)
  } catch (err) {
    res.status(400).json({message: err.message})
  }

})

module.exports = router;
