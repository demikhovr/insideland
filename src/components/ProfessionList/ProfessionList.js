import React from 'react';
import PropTypes from 'prop-types';
import Profession from './Profession/Profession';

const ProfessionList = ({ data, editor }) => (
  <React.Fragment>
    {data.map(profession => (
      <Profession
        key={profession.id}
        id={profession.id}
        isEditable={editor.isEditable}
        isFavorite={profession.isFavorite}
        image={profession.image}
        name={profession.name}
        title={profession.title}
        description={profession.description}
        onRemoveBtnClick={editor.onRemove}
        onFavoriteBtnClick={editor.onAddToFavorites}
        onEditBtnClick={editor.onEdit}
      />
    ))}
  </React.Fragment>
);

ProfessionList.defaultProps = {
  editor: {},
};

ProfessionList.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  editor: PropTypes.instanceOf(Object),
};

export default ProfessionList;
