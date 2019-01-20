import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import classes from './EditItemModal.module.scss';

const DEFAULT_IMAGE_SRC = 'img/default.png';
const DEFAULT_IMAGE_ALT = 'Default image';

class EditItemModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      name: '',
      title: '',
      description: '',
    };

    this.nameRef = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.nameRef.current.focus(), 400);
    const { props } = this;

    if (props.data) {
      setTimeout(() => {
        this.setState({
          image: {
            base64: props.data.image || DEFAULT_IMAGE_SRC,
            fileList: [{}],
          },
          name: props.data.name,
          title: props.data.title,
          description: props.data.description,
        });
      });
    }
  }

  onChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  onSubmit(evt) {
    evt.preventDefault();
    const { state, props } = this;
    this.setState({
      isSaving: true,
    });
    props.onAddItem(state)
      .then(() => {
        this.reset();
        this.setState({
          isSaving: false,
        });
      });
  }

  onReset() {
    this.reset();
  }

  removeImage() {
    this.setState({
      image: '',
    });
  }

  reset() {
    this.setState({
      image: '',
      name: '',
      title: '',
      description: '',
    });
  }

  handleFiles(files) {
    this.setState({
      image: files,
    });
  }

  render() {
    const { state } = this;
    const imgSrc = state.image ? state.image.base64 : DEFAULT_IMAGE_SRC;
    const imgAlt = state.image ? state.image.fileList[0].name : DEFAULT_IMAGE_ALT;

    return (
      <form
        className={classes.AddNewItemForm}
        onSubmit={this.onSubmit}
        autoComplete="off"
      >
        {state.isSaving && <div className={classes.AddNewItemPicSpinner} />}
        <div className={classes.AddNewItemPic}>
          <div className={classes.AddNewItemImgWrapper}>
            <img
              src={imgSrc}
              alt={imgAlt}
            />
          </div>
          <div className={classes.AddNewItemPicBtns}>
            <ReactFileReader
              handleFiles={this.handleFiles}
              base64
              multipleFiles={false}
            >
              <button className={classes.AddNewItemBtnAddPic} type="button">Выбрать</button>
            </ReactFileReader>
            {state.image && state.image.base64 !== DEFAULT_IMAGE_SRC
            && (
              <button
                className={classes.AddNewItemBtnDeletePic}
                type="button"
                onClick={this.removeImage}
              >
                Удалить
              </button>
            )}
          </div>
        </div>
        <label className={classes.AddNewItemLabel} htmlFor="name">
          <input
            ref={this.nameRef}
            className={classes.AddNewItemInput}
            type="text"
            id="name"
            name="name"
            value={state.name || ''}
            onChange={this.onChange}
            placeholder="Название"
            spellCheck="false"
            required
          />
          <span className={classes.AddNewItemInputBorder} />
        </label>
        <label className={classes.AddNewItemLabel} htmlFor="title">
          <input
            className={classes.AddNewItemInput}
            type="text"
            id="title"
            name="title"
            value={state.title || ''}
            onChange={this.onChange}
            placeholder="Заголовок"
            spellCheck="false"
            required
          />
          <span className={classes.AddNewItemInputBorder} />
        </label>
        <label className={classes.AddNewItemLabel} htmlFor="description">
          <input
            className={classes.AddNewItemInput}
            type="text"
            id="description"
            name="description"
            value={state.description || ''}
            onChange={this.onChange}
            placeholder="Описание"
            spellCheck="false"
            required
          />
          <span className={classes.AddNewItemInputBorder} />
        </label>
        <div className={classes.AddNewItemActions}>
          <button className={classes.AddNewItemActionBtn} type="submit">Submit</button>
          <button className={classes.AddNewItemActionBtn} type="button" onClick={this.onReset}>Reset</button>
        </div>
      </form>
    );
  }
}

export default EditItemModal;
