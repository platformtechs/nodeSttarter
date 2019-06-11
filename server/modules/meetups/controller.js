import Meetup from './model';

export const createMeetup = async (req, res) =>{
    const { title, description } = req.body;
    console.log(req.body)
    const newMeetup = new Meetup({title, description});
    console.log(newMeetup);
    try{
        return res.status(201).json({meetup: await newMeetup.save()})
    }catch(e) {
        return res.status(500).json({error:true, message:e.message})
    }
}

export const getAllMeetups = async (req, res) => {
    try {
        return res.status(200).json({allMeetups: await Meetup.find()});
    }catch(e){
        return res.status(500).json({error:true, message:e.message})
    }
}