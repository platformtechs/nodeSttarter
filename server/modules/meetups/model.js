import mongoose, {Schema} from 'mongoose';

const MeetupSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    eventDate:{
        type: Date,
    },
    group: {
        type:Schema.Types.ObjectId,
        ref: 'Group'
    }
}, {timestamps: true})

export default mongoose.model('Meetup', MeetupSchema);