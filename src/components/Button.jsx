import PropTypes from 'prop-types';

const Button = ({label, type}) => {
  let buttonClass =
    'px-4 py-2 rounded-md text-white hover:text-black -mt-2 md:-mt-0 text-sm';

  if (type === 'primary') {
    buttonClass += 'bg-slate-500 hover:bg-blue-900';
  } else if (type === 'secondary') {
    buttonClass += 'bg-red-500 hover:bg-red-500';
  }

 return <button className={buttonClass}>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  place: PropTypes.string,
};

export default Button;