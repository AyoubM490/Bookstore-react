import React, { useState, useEffect } from 'react';
import {
  CircularProgressbar,
  buildStyles,
} from 'react-circular-progressbar';
import PropTypes from 'prop-types';

export default function Progress(props) {
  const { percent } = props;
  const [percentage, setPercentage] = useState(50);
  useEffect(() => {
    setPercentage(percent);
  }, [percent]);

  return (
    <div className="flex gap-2 h-full justify-center items-center">
      <div className="h-20 w-20 flex items-center justify-center">
        <CircularProgressbar
          circleRatio={1}
          value={percentage}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: 'butt',
            textSize: '24px',
            pathTransitionDuration: 1,
            pathColor: 'rgb(3 105 161)',
            trailColor: 'lightgray',
            backgroundColor: 'red',
          })}
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-2xl">{`${percentage}%`}</span>
        <span>Completed</span>
      </div>
    </div>
  );
}

Progress.propTypes = {
  percent: PropTypes.number.isRequired,
};
