import React, { useEffect, useState } from 'react';
import { Cards } from '../components/Card/Cards';
import { StyledDashboard } from './Dashboard.styled';
import axios from 'axios';
import { Button } from '../components/Button/Button';
import { Account } from './Account';
import Login from './Login';

export const UserContext = React.createContext();

const endpoint = 'https://react-testcao.herokuapp.com';

const Dashboard = () => {
  const [teams, setTeams] = useState([]);
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (!localUser) return;
    setUser(localUser);
    // setUser(localStorage.getItem('user'));

    if (isLoading) {
      (async () => {
        try {
          const response = await axios.get(`${endpoint}/teams`);

          setTeams(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [user]);

  const updateScore = async (id, score, action) => {
    try {
      const response = await axios.put(
        `${endpoint}/team/score/${id}/${user}/${action}`,
        {
          ...score,
        }
      );
      setTeams(response.data.teams);
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandler = (e, id) => {
    const teamScore = teams.filter((team) => team.scores._id === id);
    const clicked = teamScore[0].scores.clicked;

    if (!clicked && e.target.dataset.action === 'increment') {
      console.log(teamScore);

      let score = { score: teamScore[0].scores.score + 1, clicked: true };

      updateScore(id, score, 'increment');
    } else if (clicked && e.target.dataset.action === 'decrement') {
      let score = { score: teamScore[0].scores.score - 1, clicked: false };

      if (score < 0) return;
      updateScore(id, score, 'decrement');
    }
  };

  // const incrementClick = async (e, id) => {
  //   const teamScore = teams.filter((team) => team.scores._id === id);
  //   let score = teamScore[0].scores.score + 1;

  //   try {
  //     updateScore(id, score, 'increment');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const decrementClick = async (e, id) => {
  //   const teamScore = teams.filter((team) => team.scores._id === id);
  //   let score = teamScore[0].scores.score - 1;

  //   if (score < 0) return;

  //   try {
  //     updateScore(id, score, 'decrement');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const logoutHandler = () => {
    localStorage.removeItem('user');
    setUser('');
  };

  return !user ? (
    <UserContext.Provider value={{ setUser }}>
      <Login />
    </UserContext.Provider>
  ) : (
    <Account>
      <StyledDashboard>
        <div className='control'>
          <Button onClick={logoutHandler} accountControl>
            Logout
          </Button>
        </div>
        <Cards
          teams={teams}
          increment={clickHandler}
          decrement={clickHandler}
        />
      </StyledDashboard>
    </Account>
  );
};

export default Dashboard;
