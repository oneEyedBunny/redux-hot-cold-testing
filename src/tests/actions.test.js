import React from 'react';
import {restartGame, makeGuess, generateAuralUpdate} from '../actions'
import {RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE} from '../actions'

describe('restartGame', () => {
  it('Restart a new game', () => {
      const correctAnswer = 20;
      const action = restartGame(correctAnswer);
      expect(action.type).toEqual(RESTART_GAME);
      expect(action.correctAnswer).toEqual(correctAnswer);
  });
});

describe('makeGuess', () => {
  it('should return the action', () => {
      const guess = 15;
      const action = makeGuess(guess);
      expect(action.type).toEqual(MAKE_GUESS);
      expect(action.guess).toEqual(guess);
  });
});

describe('generateAuralUpdate', () => {
  it('give an auditory update', () => {
      const action = generateAuralUpdate();
      expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
  });
});
