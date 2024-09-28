import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

      username:{
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3, // Minimum length for username
            maxlength: 30, // Maximum length for username
            validate: {
              validator: function(v) {
                return /^[a-zA-Z0-9_]+$/.test(v); // Only allows alphanumeric and underscore characters
              },
              message: props => `${props.value} is not a valid username!`
            }
      },
      email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
      },
      password: {
        type: String,
        required: true,
        minlength: 6, // Minimum length for the password
      },


},{timestamps:true});

const User = mongoose.model('User', userSchema)

export default User;