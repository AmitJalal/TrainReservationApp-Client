import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type, message }) => {
  const getAlertClasses = () => {
    let classes = 'px-4 py-2 rounded-md inline-block relative';

    switch (type) {
      case 'success':
        classes += ' bg-green-500 text-white';
        break;
      case 'error':
        classes += ' bg-red-500 text-white';
        break;
      case 'warning':
        classes += ' bg-yellow-500 text-black';
        break;
      default:
        classes += ' bg-blue-500 text-white';
        break;
    }

    return classes;
  };

  return (
    <div className="relative inline-block">
      <div className={getAlertClasses()}>{message}</div>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-500 text-white rounded-md text-xs opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
        {message}
      </div>
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning']),
  message: PropTypes.string.isRequired,
};

Alert.defaultProps = {
  type: 'info',
};

export default Alert;
