const mongoose = require('mongoose');

var setMeetingSchema = new mongoose.Schema({
    meetingTitle: {
        type: String

    },
    meetingTime: {
        type: String,
        required: true

    },
    isCommentMode:{
        type: Boolean,
        required: true

    },
    commentMode:{
        type: String,
        required: true
    },
    isReviewMode:{
        type: Boolean,
        required: true

    },    
    reviewMode:{
        type: String,
        required: true

    },
    testId:{
        default: Date.now
    }
  })

  module.exports = mongoose.model('SetMeetingInfo', setMeetingSchema)