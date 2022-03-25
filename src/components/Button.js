import PropTypes from 'prop-types';

const Button = (props) => {
  const { label } = props;
  return (
    <button className="button" type="submit">
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
