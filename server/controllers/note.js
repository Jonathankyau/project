import NoteData from '../models/note.js';

export const getNotes = async (req, res) => {
    try {
        const allNotes = await NoteData.find();

        res.status(200).json(allNotes);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

 export const createNote = async (req, res) => {
    const note = req.body;

    const newNote = new NoteData(note);

    try {
        await newNote.save();
        res.status(201).json(newNote);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deleteNote = async (req, res) => {
    const id = req.params.id;

    try {
        await NoteData.findByIdAndRemove(id).exec();
        res.send('Successfully Deleted')
    } catch (error) {
        console.log(error);
    }
}
