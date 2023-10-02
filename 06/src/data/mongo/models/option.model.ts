import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
  

});


export const OptionModel = mongoose.model('Option', optionSchema );


