import React from 'react';
import { Button } from '../Button/Button';
import { StyledCards } from './Cards.styled';

export const Cards = ({ increment, decrement, teams }) => {
  return (
    <StyledCards>
      {teams.length < 1 ? (
        <p>Loading...</p>
      ) : (
        teams?.map((team) => (
          <div className='card' key={team._id}>
            <img src={team.img} alt='' />
            <div className='card-body'>
              <h3>Score: {team.scores.score}</h3>
            </div>
            <div className='card-buttons'>
              <Button onClick={(e) => increment(e, team.scores._id)} increment>
                +
              </Button>
              <Button onClick={(e) => decrement(e, team.scores._id)} decrement>
                -
              </Button>
            </div>
          </div>
        ))
      )}
    </StyledCards>
  );
};
