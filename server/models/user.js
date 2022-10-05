import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ({
    username: String,
    name: String,
    googleId: String,
    secret: String
})


userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model('User', userSchema);

export default User;