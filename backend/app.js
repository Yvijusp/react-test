import express, { response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Models
import Team from './models/TeamsSchema.js';
import Score from './models/ScoreSchema.js';
import User from './models/UserSchema.js';
// Database connection

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((response) =>
    app.listen(process.env.PORT, () => console.log('Server is running'))
  );

// Get all teams
app.get('/teams', async (req, res) => {
  const data = await Team.find()
    .select('img score')
    .populate('scores', 'score clicked')
    .exec();

  res.send(data);
});

// POST teams
app.post('/admin/teams/add', async (req, res) => {
  const body = req.body;

  const newTeam = new Team(body);
  const newScore = new Score({ score: 0 });

  await newScore.save();
  newTeam.scores = newScore._id;

  const data = await newTeam.save();

  res.send({ message: 'Team added', data });
});

// Update team score
app.put('/team/score/:scoreId/:userId/:action', async (req, res) => {
  const scoreId = req.params.scoreId;
  const userId = req.params.userId;
  const action = req.params.action;

  if (!req.body) return res.status(401).send({ message: 'No such team' });

  const score = await Score.findById(scoreId);

  const existingUser = score.user.some((item) => '' + item._id === userId);

  if (action === 'increment') {
    if (!existingUser) {
      const newScore = await Score.findByIdAndUpdate(scoreId, req.body);

      newScore.user.push({ ...newScore.user, _id: userId });

      newScore.save();

      const teams = await Team.find()
        .select('img score')
        .populate('scores', 'score clicked')
        .exec();

      res.send({ message: 'Score added', teams });
    }
  } else {
    if ('' + score._id === scoreId) {
      if (existingUser) {
        const filteredUser = score.user.filter(
          (item) => '' + item._id !== userId
        );

        const decrementScore = await Score.findByIdAndUpdate(scoreId, req.body);

        decrementScore.user = filteredUser;

        decrementScore.save();

        const teams = await Team.find()
          .select('img score')
          .populate('scores', 'score clicked')
          .exec();

        res.send({ message: 'Minus score', teams });
      }
    } else {
      res.send({ message: 'oops' });
    }
  }
});

// POST register user
app.post('/register', async (req, res) => {
  if (!req.body)
    return res.status(401).send({ message: 'Error wrong data input' });

  const newUser = new User(req.body);
  const teamData = await Team.find();

  teamData.reduce((a, v) => {
    a.push(v._id);

    return a;
  }, []);

  newUser.teams.push(...teamData);

  const response = await newUser.save();

  res.send({ message: 'Registered successfully', user: response._id });
});

app.post('/login', async (req, res) => {
  if (!req.body) return res.status(404).send({ message: "User doesn't exist" });

  const userId = await User.find();

  const filteredUser = userId.filter(
    (user) => user.username === req.body.username
  );

  const { _id } = filteredUser[0];

  const response = await User.findById('' + _id);

  res.send({ user: response._id });
});
