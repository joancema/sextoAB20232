import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option'
    }]

});


export const UserModel = mongoose.model('User', userSchema );


