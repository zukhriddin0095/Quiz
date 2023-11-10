import { Fragment } from "react";
import PropTypes from "prop-types";

import "./quiz.scss";
const Quiz = ({ options, question, onClickVariant, step }) => {
  const percentage = Math.round((step / options.length) * 100);

  return (
    <Fragment>
      <div className="container">
        <div className="quiz">
          <div className="quiz__header">
            <div
              style={{ width: `${percentage}%` }}
              className="quiz__header__app"
            ></div>
          </div>

          <div className="quiz__question">
            <h1 className="quiz__question__title">{question.title}</h1>
          </div>
          <div className="quiz__options">
            {question.variants.map((variant, i) => (
              <h3 onClick={() => onClickVariant(i)} key={variant}>
                {variant}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Quiz.propTypes = {
  options: PropTypes.array,
  question: PropTypes.shape({
    title: PropTypes.string,
    variants: PropTypes.arrayOf(PropTypes.string).isRequired,
    length: PropTypes.number.isRequired,
  }).isRequired,
  onClickVariant: PropTypes.func,
  step: PropTypes.number,
};

export default Quiz;
