import PropTypes from 'prop-types';

import s from './Button.module.css'

function Button({ buttonName, onClick}) {

    return (
        <button onClick={onClick} className={s.button} type="button">
        {buttonName}
      </button>
    );
  }

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;