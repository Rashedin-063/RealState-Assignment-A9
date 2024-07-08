import PropTypes from 'prop-types';

const Button = ({label, type, onClick}) => {
  let buttonClass =
    'px-4 py-2 rounded-md text-white hover:text-black -mt-2 md:-mt-0 text-sm';

   if (type === 'primary') {
     buttonClass += ' bg-blue-600 hover:bg-blue-300';
   } else if (type === 'secondary') {
     buttonClass += ' bg-yellow-600 hover:bg-yellow-300';
  }

 return (
   <button className={buttonClass} onClick={onClick}>
     {label}
   </button>
 );
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;