import React from 'react';
import PropTypes from 'prop-types';
import ChapterProgress from '../chapter-progress/chapter-progress';
import Progress from '../progress/progress';

export default function BookProgress(props) {
  const { percent, chapter } = props;
  return (
    <div className="flex gap-24">
      <Progress percent={percent} />
      <div className="border-l-2" />
      <ChapterProgress chapter={chapter} />
    </div>
  );
}

BookProgress.propTypes = {
  percent: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};
