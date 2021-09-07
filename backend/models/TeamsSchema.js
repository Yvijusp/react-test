import mongoose from 'mongoose';
const { Schema } = mongoose;

const TeamSchema = Schema({
  img: {
    type: String,
    required: true,
  },
  scores: {
    type: Schema.Types.ObjectId,
    ref: 'Score',
  },
});

const Team = mongoose.model('Team', TeamSchema);

export default Team;
