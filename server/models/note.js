import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
    date: Date,
    
    // {
    //     type: Date,
    //     default: Date.now
    // },
    mood: String,
    symptoms: [String],
    solutions: {
        type: [String],
        default: 'Good'
    },
});

const note = mongoose.model('note', noteSchema);

export default note;