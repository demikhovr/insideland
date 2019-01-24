import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import classes from './TestItemInfoModal.module.scss';

const DEFAULT_IMAGE_SRC = 'img/default.png';
const DEFAULT_IMAGE_ALT = 'Default image';
const FOCUS_INPUT_TIMEOUT = 400;
const INITIAL_DATA = {
  image: '',
  name: '',
  title: '',
  description: '',
};

class TestItemInfoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSaving: false,
      data: {},
      imageFile: null,
    };

    this.nameRef = React.createRef();

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.nameRef.current.focus(), FOCUS_INPUT_TIMEOUT);
    const { props } = this;

    if (props.data) {
      const data = {
        ...props.data,
      };

      this.setState({ data });
    }
  }

  onChange({ target }) {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [target.name]: target.value,
      },
    }));
  }

  async onSubmit(evt) {
    evt.preventDefault();
    const { state, props } = this;

    this.setState({
      isSaving: true,
    });

    try {
      console.log(state.data, state.imageFile);
      await props.onAddItem(state.data, state.imageFile);
      this.reset();
      this.setState({
        isSaving: false,
      });
    } catch (e) {
      console.log(e);
    }
  }

  onReset() {
    this.reset();
  }

  removeImage() {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        image: '',
      },
      imageFile: null,
    }));
  }

  reset() {
    this.setState({
      data: INITIAL_DATA,
      imageFile: null,
    });
  }

  handleFiles(files) {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        image: files.base64,
      },
      imageFile: files.fileList[0],
    }));
  }

  render() {
    const { state } = this;
    const { data } = state;
    const imgSrc = data.image || DEFAULT_IMAGE_SRC;
    const imgAlt = data.image || DEFAULT_IMAGE_ALT;

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
            {data.image && data.image.base64 !== DEFAULT_IMAGE_SRC
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
            value={data.name || ''}
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
            value={data.title || ''}
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
            value={data.description || ''}
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

export default TestItemInfoModal;
