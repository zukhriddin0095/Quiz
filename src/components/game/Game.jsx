import { Fragment } from 'react'
import PropTypes from "prop-types";



import './game.scss'
const Game = ({correct, options}) => {
  return (
    <Fragment>
      <div className="container">
        <div className="game">
          <div className="game__result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>
              Tabrikliman Siz {options.length} ta Savoldan {correct} tasini togri toptingiz 
            </h2>
            <button>
              <a href="/">Takrorlash</a>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Game.propTypes = {
  options: PropTypes.array,
  length: PropTypes.number,
  correct: PropTypes.number,
};

export default Game