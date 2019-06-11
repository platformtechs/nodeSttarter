import Group from './model';

export const createGroup = async (req, res) => {
    const {
        name,
        description,
        category
    } = req.body;

    if(!name){
        return res.status(400).json({error: true, message:'name must be provided'});
    } else if (typeof name !== 'string'){
        return res.status(400).json({error:true, message: 'name must be string'})
    } else if (name.length < 5) {
        return res.status(400).json({error:true, message:'name must be 5 character long'})
    }
    if(!description){
        return res.status(400).json({error: true, message:'description must be provided'});
    } else if (typeof description !== 'string'){
        return res.status(400).json({error:true, message: 'description must be string'})
    } else if (description.length < 5) {
        return res.status(400).json({error:true, message:'description must be 5 character long'})
    }

    const group = new Group({name, description})
    try{
        return res.status(201).json({error: false, group: await group.save()})
    } catch(e) {
        return res.status(400).json({error:true, message:'Error occurred while creating group'})
    }
}

export const createGroupMeetup = async (req, res) => {
    const {
        title,
        description
    } = req.body

    const { groupId } = req.params

    //Group.addMeetup(groupId, {title, description})

    try{
        const { meetup } = await Group.addMeetup(groupId, {title, description})
        return res.status(201).json({error:false, meetup})
    } catch(e) {
        return res.status(400).json({error:true, message: "error in group creating"})
    }
}