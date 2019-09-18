const express =require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');
const MeetingFormModel = require('../../models/SetUpMeetingData')


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

    try {
      await setMeetingInfo.save()
      res.status(200).json({ success: true, message: 'Meeting has been created.' })
    } catch (error) {
      res.status(500).json({ success: false, error: 'Unexpected server error.' })
      console.error(error)
    }

    
 })

 module.exports = router;