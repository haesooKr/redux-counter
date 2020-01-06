import React from 'react';
import PropTypes from 'prop-types'
import './Counter.css'


const Counter = ( { number, color, onIncrement, onDecrement, onSetColor }) => {
  return (
    <div className="Counter"
    onClick={onIncrement}
    onDoubleClick={onSetColor}
    onContextMenu={(e) => {
      e.preventDefault();
      onDecrement();
    }}
    style={{
      backgroundColor: color
    }}>
      {number}
    </div>
  )
}

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func,
}

Counter.defaultProps = {
  number: 0,
  color: 'black',
  onIncrement: () => console.warn("onIncrement Not defined"),
  onDecrement: () => console.warn("onDecrement Not defined"),
  onSetColor: () => console.warn("onSetColor Not defined")
}

export default Counter