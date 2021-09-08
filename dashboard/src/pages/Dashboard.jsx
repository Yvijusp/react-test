import React, { useEffect, useState } from 'react';
import { Cards } from '../components/Card/Cards';
import { StyledDashboard } from './Dashboard.styled';
import axios from 'axios';
import { Button } from '../components/Button/Button';
import { Account } from './Account';
import Login from './Login';

export const UserContext = React.createContext();

const endpoint =
  'http://localhost:5000' || 'https://react-testcao.herokuapp.com';

const Dashboard = () => {
  const [teams, setTeams] = useState([]);
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState();
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (!localUser) return;
    setUser(localUser);
    // setUser(localStorage.getItem('user'));

    const data = userData?.reduce((a, v) => {
      a = v.teams.reduce((a, v) => {
        a.push(v);

        return a;
      }, []);

      return a;
    }, []);

    setClicked(data);

    if (isLoading) {
      (async () => {
        try {
          const response = await axios.get(`${endpoint}/teams`);
          const userData = await axios.get(`${endpoint}/userdata`);

          setTeams(response.data);
          setIsLoading(false);
          setUserData(userData.data.userData);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [user, userData]);

  const loginUser = async (user) => {
    try {
      const response = await axios.post(`${endpoint}/login`, {
        ...user,
      });

      localStorage.setItem('user', JSON.stringify(response.data.user));

      setUser(response.data.user);
      setUserData(response.data.userData);
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (user) => {
    try {
      const response = await axios.post(`${endpoint}/register`, {
        ...user,
      });

      localStorage.setItem('user', JSON.stringify(response.data.user));

      setUser(response.data.user);
      setUserData(response.data.userData);
    } catch (error) {
      console.log(error);
    }
  };

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
    const clickedCheck = clicked?.find((click) => click.scores === id);

    if (!clickedCheck.clicked && e.target.dataset.action === 'increment') {
      let score = { score: teamScore[0].scores.score + 1, clicked: true };

      updateScore(id, score, 'increment');
      clickedCheck.clicked = true;
    } else if (
      clickedCheck.clicked &&
      e.target.dataset.action === 'decrement'
    ) {
      let score = { score: teamScore[0].scores.score - 1, clicked: false };

      if (score < 0) return;
      updateScore(id, score, 'decrement');
      clickedCheck.clicked = false;
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem('user');
    setUser('');
  };

  return !user ? (
    <UserContext.Provider value={{ loginUser, registerUser }}>
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
