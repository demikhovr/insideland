import React from 'react';
import PropTypes from 'prop-types';
import classes from './TestInfo.module.scss';
import TestTable from '../TestList/TestTable/TestTable';
import TestStats from '../TestList/TestStats/TestStats';

const TestInfo = ({ data, location }) => (
  <div className={classes.TestInfo}>
    <TestTable tests={data.quizes} location={location} />
    <TestStats
      image={data.image}
      name={data.name}
      title={data.title}
      description={data.description}
      isFavorite={data.isFavorite}
      location={location}
    />
  </div>
);

TestInfo.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default TestInfo;
