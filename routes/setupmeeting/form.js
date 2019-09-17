const express =require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');
const MeetingFormModel = require('../../models/SetUpMeetingData')


/* const MeetingForm = new MeetingFormModel({}) */

 router.post("/",  [
   check('meetingTitle', "Please add a meeting title.").isString().bail().not().isEmpty(),
   check('meetingDate').not().isEmpty(),
   check('meetingTime').not().isEmpty(),
   check('isCommentMode').isBoolean(),
   check('commentMode'),
   check('isReviewMode').isBoolean(),
   check('reviewMode'),
   check('isVoteMode').isBoolean(),
   check('voteMode'),
   check('template').isString().not().isEmpty(),
   check('guests').isArray() 
 ], async (req,res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      console.log(errors)
      return res.status(422).json({errors: errors.array()})
    }
    const {meetingTitle, meetingDate, meetingTime, isCommentMode, commentMode, isReviewMode, reviewMode, isVoteMode, voteMode, template, guests }= req.body
    setMeetingInfo = new MeetingFormModel({
      meetingTitle,
      meetingDate,
      meetingTime,
      isCommentMode,
      commentMode,
      isReviewMode,
      reviewMode,
      isVoteMode,
      voteMode,
      template,
      guests
    })
    await setMeetingInfo.save()
    console.log(req.body)
    res.send("form respons")
 })

 module.exports = router;