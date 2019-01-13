import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './TestList.module.scss';

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

const Td = ({ children, to }) => {
  const content = to ? (
    <NavLink
      className={classes.content}
      to={to}
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
};

Td.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

const TestList = ({ tests }) => {
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
              <Td to={`${test.id}`}>
                {`${type}`}
              </Td>
              <Td to={`${test.id}`}>
                {`${test.name}`}
              </Td>
              <Td to={`${test.id}`}>
                {`${test.questionCount}`}
              </Td>
              <Td to={`${test.id}`}>
                {`${test.time}`}
              </Td>
              <Td to={`${test.id}`}>
                <img
                  width="30"
                  height="30"
                  src={test.isFinished ? 'img/icon-tick.svg' : 'img/icon-error.svg'}
                  alt={test.name}
                />
              </Td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TestList.propTypes = {
  tests: PropTypes.instanceOf(Array).isRequired,
};

export default TestList;
