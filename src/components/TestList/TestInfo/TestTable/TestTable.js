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

const Td = ({
  children, to, location, id,
}) => {
  const content = to ? (
    <NavLink
      className={classes.content}
      to={{
        pathname: to,
        state: { from: location, parentId: id },
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
  id: PropTypes.string.isRequired,
};

const TestTable = ({
  tests, location, editor, id,
}) => {
  const typesMap = new Map();
  let testsData;

  if (!tests) {
    testsData = [];
  } else {
    testsData = Object.keys(tests)
      .map((key) => {
        const test = tests[key];
        test.id = key;
        return test;
      }).sort((a, b) => {
        const aType = TestTypes[a.type];
        const bType = TestTypes[b.type];
        return aType.localeCompare(bType);
      });
  }

  const isEditable = !!Object.keys(editor).length;

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
        {isEditable
          ? (
            <tr>
              <td className={classes.NewItemBtnWrapper} colSpan="5">
                <button
                  className={classes.NewItemBtn}
                  type="button"
                  onClick={editor.onAdd}
                />
              </td>
            </tr>
          )
          : null}
        {testsData.map((test) => {
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
              <Td to={`${test.id}`} location={location} id={id}>
                {`${type}`}
              </Td>
              <Td to={`${test.id}`} location={location} id={id}>
                {`${test.name}`}
              </Td>
              <Td to={`${test.id}`} location={location} id={id}>
                {`${test.questionCount}`}
              </Td>
              <Td to={`${test.id}`} location={location} id={id}>
                {`${test.time || ''}`}
              </Td>
              <Td>
                {test.isPassed !== null && test.isPassed !== undefined
                  ? (
                    <img
                      width="30"
                      height="30"
                      src={test.isPassed ? 'img/icon-tick.svg' : 'img/icon-error.svg'}
                      alt={test.name}
                    />
                  ) : null}
                {editor.isEditable ? (
                  <button
                    className="btn"
                    style={{
                      display: 'block',
                      width: 60,
                      height: 20,
                      margin: '0 auto',
                      padding: 5,
                      textAlign: 'center',
                      fontSize: 10,
                      lineHeight: '10px',
                    }}
                    type="button"
                    onClick={() => editor.onRemove(test.id)}
                  >
                    Удалить
                  </button>
                ) : null}
              </Td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TestTable.defaultProps = {
  tests: {},
  editor: null,
};

TestTable.propTypes = {
  tests: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object).isRequired,
  editor: PropTypes.instanceOf(Object),
  id: PropTypes.string.isRequired,
};

export default TestTable;
