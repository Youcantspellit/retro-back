const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeetingFormSchema = new Schema ({
    formCreatedAt: {
        type: Date,
        default: Date.now
    },
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
        type: [{ 
            label: {
                type: String,
                unique: true
            }, 
            value: {
                type: String,
                unique: true
            },
            __isNew__: Boolean }]
    }
  });

  module.exports = MeetingFormModel = mongoose.model("MeetingFormModel", MeetingFormSchema)

/* 
const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow')); */