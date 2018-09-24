import reducer from '../reducer';
import {restartGame, makeGuess, generateAuralUpdate} from '../actions';

describe('Reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});

        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.auralStatus).toEqual('');
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });


  describe('restartGame', () => {
          it('Should restart a new game', () => {
            let initialState = {
                guesses: [5,10,15],
                feedback: 'Cold as Ice',
                correctAnswer: 40
            };
            const correctAnswer = 60;
              state = reducer(state, restartGame(correctAnswer));
              expect(state.guesses).toEqual([]);
              expect(state.feedback).toEqual('Make your guess!');
              expect(state.correctAnswer).toEqual(correctAnswer);
              expect(state.auralStatus).toEqual('');
          });
  });

  describe('makeGuess', () => {
          it('give you feedback based on your guess', () => {
            let initialState = {
                guesses: [],
                feedback: 'Make your guess!',
                correctAnswer: 10
            };
              state = reducer(state, makeGuess(20));
              expect(state.guesses).toEqual(25);
              expect(state.feedback).toEqual("You're Cold...");

              state = reducer(state, makeGuess(50));
              expect(state.guesses).toEqual([25, 50]);
              expect(state.feedback).toEqual("You're Ice Cold...");

              state = reducer(state, makeGuess(20));
              expect(state.guesses).toEqual([25, 50, 20]);
              expect(state.feedback).toEqual("You're Warm.");

              state = reducer(state, makeGuess(11));
              expect(state.guesses).toEqual([25, 50, 20, 11]);
              expect(state.feedback).toEqual("You're Hot!");

              state = reducer(state, makeGuess(10));
              expect(state.guesses).toEqual([25, 50, 20, 11, 10]);
              expect(state.feedback).toEqual('You got it!');
          });
  });

  describe('generateAuralUpdate', () => {
          it('Give an aural update', () => {
            let initialState = {
                guesses: [10, 90, 40],
                feedback: "You're Warm.",
                correctAnswer: 50
            };
              state = reducer(state, generateAuralUpdate());
              expect(state.auralStatus).toEqual("Here's the status of the game right now: You're Warm. You've made 3 guesses. In order of most- to least-recent, they are: 10, 90, 40"
              );
          });
  });
});
