import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Team',
    },
  ],
});

const User = mongoose.model('User', UserSchema);

export default User;
