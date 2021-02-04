import React, {Component} from 'react';

import PropTypes from 'prop-types';

import './Modal.css';

export default class Modal extends Component {

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }

  componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
      console.log(e);
      if (e.code === 'Escape') {
          this.props.onClose();
      }
  }

  overlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  }

  trigger = () => {
    this.setState({loading: false})
  }

  render () {
    const {largeImageURL} = this.props;
      return (
        <div className="Overlay" onClick={this.overlayClick}>
          <div className="Modal">
            <img src={largeImageURL} alt="" />
          </div>
        </div>
      )
  }
}

