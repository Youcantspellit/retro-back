const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/* db.MeetingFormSchema.createIndex( { label: 1 } , { sparse: true } ) */

const MeetingFormSchema = new Schema ({
/*     formCreatedAt: {
        type: Date,
        default: Date.now
    }, */
    meetingTitle: {
        type: String
        /* required: true */
    } ,
    meetingDate: {
        type: Date,
        /* required: true */
    },
    meetingTime: {
        type: Date
        /* required: true */
    },
    isCommentMode: {
        type: Boolean
        /* required: true */
    },
    commentMode: {
        type: Number
    },
    isReviewMode: {
        type: Boolean
        /* required: true */
    },
    reviewMode: {
        type: Number
    },
    isVoteMode: {
        type: Boolean
        /* required: true */
    },
    voteMode: {
        type: Number
    },
    template: {
        type: String
        /* required: true */
    },
    guests: {
        type: Array
/*         type: [{
            label: {
                type: String
            }, 
            value: {
                type: String
            },
            __isNew__: Boolean }] */
    }
  });

  module.exports = MeetingFormModel = mongoose.model("MeetingFormModel", MeetingFormSchema)
