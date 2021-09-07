import mongoose from 'mongoose';
const { Schema } = mongoose;

const ScoreSchema = Schema({
  score: {
    type: Number,
    required: true,
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Score = mongoose.model('Score', ScoreSchema);

export default Score;
