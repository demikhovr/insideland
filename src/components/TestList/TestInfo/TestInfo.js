import React from 'react';
import PropTypes from 'prop-types';
import classes from './TestInfo.module.scss';
import TestTable from './TestTable/TestTable';
import TestStats from './TestStats/TestStats';

const TestInfo = ({
  data, location, editor, id,
}) => (
  <div className={classes.TestInfo}>
    <TestTable
      tests={data.quizes}
      location={location}
      editor={editor}
      id={id}
    />
    <TestStats
      {...data.info}
      quizes={data.quizes}
      location={location}
    />
  </div>
);

TestInfo.defaultProps = {
  editor: {},
};

TestInfo.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  editor: PropTypes.instanceOf(Object),
  id: PropTypes.string.isRequired,
};

export default TestInfo;
