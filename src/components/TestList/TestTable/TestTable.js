import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './TestTable.module.scss';

const TestTypes = {
  numeric: 'Числовые',
  verbal: 'Вербальные',
  logical: 'Логические',
};

const TestBgColors = {
  numeric: '#edebff',
  verbal: '#e4e4fe',
  logical: '#e4e4fe',
};

const Td = ({ children, to, location }) => {
  const content = to ? (
    <NavLink
      className={classes.content}
      to={{
        pathname: to,
        state: { from: location },
      }}
    >
      {children}
    </NavLink>
  ) : children;

  return (
    <td>
      {content}
    </td>
  );
};

Td.defaultProps = {
  to: null,
  children: [],
};

Td.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  location: PropTypes.instanceOf(Object).isRequired,
};

const TestTable = ({ tests, location }) => {
  const typesMap = new Map();
  const sortedTests = tests.sort((a, b) => {
    const aType = TestTypes[a.type];
    const bType = TestTypes[b.type];
    return aType.localeCompare(bType);
  });

  return (
    <table className={classes.TestsTable} cellSpacing="0">
      <thead>
        <tr>
          <th>Тип</th>
          <th>Название</th>
          <th>Количество вопросов</th>
          <th>Время прохождения</th>
          <th>Пройден</th>
        </tr>
      </thead>
      <tbody>
        {sortedTests.map((test) => {
          let type = '';

          if (!typesMap.get(TestTypes[test.type])) {
            type = TestTypes[test.type];
            typesMap.set(type, true);
          }

          return (
            <tr
              style={{ backgroundColor: type && TestBgColors[test.type] }}
              key={test.id}
            >
              <Td to={`${test.id}`} location={location}>
                {`${type}`}
              </Td>
              <Td to={`${test.id}`} location={location}>
                {`${test.name}`}
              </Td>
              <Td to={`${test.id}`} location={location}>
                {`${test.questionCount}`}
              </Td>
              <Td to={`${test.id}`} location={location}>
                {`${test.time}`}
              </Td>
              <Td to={`${test.id}`} location={location}>
                {test.isFinished !== null
                  ? (
                    <img
                      width="30"
                      height="30"
                      src={test.isFinished ? 'img/icon-tick.svg' : 'img/icon-error.svg'}
                      alt={test.name}
                    />
                  ) : null}
              </Td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TestTable.propTypes = {
  tests: PropTypes.instanceOf(Array).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};

export default TestTable;
