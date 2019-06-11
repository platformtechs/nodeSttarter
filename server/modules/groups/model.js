import mongoose, { Schema } from 'mongoose';

const groupSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Name must be 5 charactor long']
    },
    description:{
        type: String,
        required: true,
        minlength: [10,'description must be 10 character long']
    },
    category: {
        type: String,
        // required: true
    },
    meetups:[{
        type: Schema.Types.ObjectId,
        ref: 'Meetup'
    }]
}, {timestamps: true})

groupSchema.statics.addMeetup = async function (id, args){
    const Meetup = mongoose.model('Meetup');
    const meetup = await new Meetup({ ...args, group:id});
    await this.findByIdAndUpdate(id, {$push:{meetups:meetup.id}});
    return {
        meetup:await meetup.save(),
    }
}

export default mongoose.model('Group', groupSchema)