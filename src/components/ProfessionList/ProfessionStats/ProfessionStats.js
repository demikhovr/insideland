import React from 'react';
import PropTypes from 'prop-types';
import classes from './ProfessionStats.module.scss';

const DEFAULT_IMAGE_SRC = 'img/default.png';

const ProfessionStats = ({ stats, tests }) => (
  <section className={classes.ProfessionStats}>
    <div className={classes.ProfessionStatsInner}>
      <div className={classes.ProfessionStatsPic}>
        <img src={stats.image || DEFAULT_IMAGE_SRC} alt={stats.title} />
      </div>
      <h3 className={classes.ProfessionStatsTitle}>{stats.title}</h3>
      <p className={classes.ProfessionStatsDescription}>{stats.description}</p>
      <div className={classes.ProfessionStatsSuccessPercent}>
        {stats.successPercent || '25%'}
        <svg className={classes.speed__range} viewBox="0 0 32 32">
          <circle className={classes.circle1} r="16" cx="16" cy="16" />
          <circle className={classes.circle2} r="16" cx="16" cy="16" strokeDasharray={`${stats.successPercent || 25} 100`} />
        </svg>
      </div>
      <div className={classes.ProfessionStatsTests}>
        <div className={classes.ProfessionStatsTestsPassed}>
          <span>
            {tests.filter(test => test.isFinished).length}
          </span>
          &nbsp;пройдено
        </div>
        <div className={classes.ProfessionStatsTestsAll}>
          <span>
            {tests.length}
          </span>
          &nbsp;всего
        </div>
      </div>
    </div>
  </section>
);

ProfessionStats.propTypes = {
  stats: PropTypes.instanceOf(Object).isRequired,
  tests: PropTypes.instanceOf(Object).isRequired,
};

export default ProfessionStats;
