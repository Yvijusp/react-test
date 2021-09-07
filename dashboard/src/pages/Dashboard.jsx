import React, { useEffect, useState } from 'react';
import { Cards } from '../components/Card/Cards';
import { StyledDashboard } from './Dashboard.styled';
import axios from 'axios';
import { Button } from '../components/Button/Button';
import { Account } from './Account';
import Login from './Login';

export const UserContext = React.createContext();

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
          const response = await axios.get(
            'https://react-testcao.herokuapp.com/teams'
          );

          setTeams(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [user]);

  const updateScore = async (id, score, action) => {
    const response = await axios.put(
      `https://react-testcao.herokuapp.com/team/score/${id}/${user}/${action}`,
      {
        score,
      }
    );

    setTeams(response.data.teams);
  };

  const incrementClick = async (e, id) => {
    const teamScore = teams.filter((team) => team.scores._id === id);
    let score = teamScore[0].scores.score + 1;
    let clicked = false;

    if (!clicked) {
      try {
        updateScore(id, score, 'increment');
        clicked = true;
      } catch (error) {
        console.log(error);
      }
    }
  };

  const decrementClick = async (e, id) => {
    if (isLoading) return;

    const teamScore = teams.filter((team) => team.scores._id === id);
    let score = teamScore[0].scores.score - 1;

    if (score < 0) return;

    let clicked = false;

    if (!clicked) {
      try {
        clicked = true;
        updateScore(id, score, 'decrement');
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          increment={incrementClick}
          decrement={decrementClick}
        />
      </StyledDashboard>
    </Account>
  );
};

export default Dashboard;
