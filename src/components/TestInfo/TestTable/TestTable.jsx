import React from 'react';
import PropTypes from 'prop-types';
import classes from './TestTable.module.scss';
import Td from './Td/Td';

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

const TestTable = ({
  quizes,
  location,
  editor,
  id,
}) => {
  const typesMap = new Map();
  let quizesData;
  if (!Object.keys(quizes).length) {
    quizesData = [];
  } else {
    quizesData = quizes;
    // .sort((a, b) => {
    //   const aType = TestTypes[a.type];
    //   const bType = TestTypes[b.type];
    //   return aType.localeCompare(bType);
    // });
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
          {!editor.isEditable ? <th>Пройден</th> : <th>Редактор</th>}
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
        {quizesData.map((quiz) => {
          let type = '';

          if (!typesMap.get(TestTypes[quiz.type])) {
            type = TestTypes[quiz.type];
            typesMap.set(type, true);
          }

          return (
            <tr
              style={{ backgroundColor: type && TestBgColors[quiz.type] }}
              key={quiz.id}
            >
              <Td to={`${quiz.id}`} location={location} id={id}>
                {`${type}`}
              </Td>
              <Td to={`${quiz.id}`} location={location} id={id}>
                {`${quiz.name}`}
              </Td>
              <Td to={`${quiz.id}`} location={location} id={id}>
                {`${quiz.questionCount}`}
              </Td>
              <Td to={`${quiz.id}`} location={location} id={id}>
                {`${quiz.time || ''}`}
              </Td>
              <Td>
                {!editor.isEditable && quiz.isPassed !== null && quiz.isPassed !== undefined
                  ? (
                    <img
                      width="30"
                      height="30"
                      src={quiz.isPassed ? 'img/icon-tick.svg' : 'img/icon-error.svg'}
                      alt={quiz.name}
                    />
                  ) : null}
                {editor.isEditable ? (
                  <span className={classes.BtnWrapper}>
                    <button
                      className={[classes.Btn, classes.BtnEdit].join(' ')}
                      type="button"
                      title="Изменить"
                      onClick={() => editor.onEdit(quiz.id)}
                    />
                    <button
                      className={[classes.Btn, classes.BtnCopy].join(' ')}
                      type="button"
                      title="Копировать"
                      onClick={() => editor.onCopy(quiz.id)}
                    />
                    <button
                      className={[classes.Btn, classes.BtnRemove].join(' ')}
                      type="button"
                      title="Удалить"
                      onClick={() => editor.onRemove(quiz.id)}
                    />
                  </span>
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
  quizes: {},
  editor: {},
};

TestTable.propTypes = {
  quizes: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object).isRequired,
  editor: PropTypes.instanceOf(Object),
  id: PropTypes.string.isRequired,
};

export default TestTable;
