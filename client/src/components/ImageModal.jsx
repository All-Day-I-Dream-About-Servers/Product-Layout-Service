import React from 'react'
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import ImagePopup from './ImagePopup.jsx'

const customStyles = {
  content : {
    top                   : '0',
    left                  : '0',
    right                 : '0',
    'background-color' : 'rgba(0,0,0,0.4)',
    'padding-bottom':'20px',
    'padding-left':'0',
    'padding-right':'0',
    'padding-top': '20px',
    'outline:focus': 'none'
  }
};

var counter = 0;

class ImageModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      img: this.props.images[0]
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleThumnail = this.handleThumnail.bind(this);
  }

  handleOpenModal (e) {
    e.preventDefault()
    this.setState({ showModal: true });
  }

  handleCloseModal (e) {
    e.preventDefault()
    this.setState({ showModal: false });
  }

  handlePrev(e){
    e.preventDefault()
    if(counter < this.props.images.length && counter > 0){
      counter -= 1;
    }
    if(counter === 0 ){
      counter = this.props.images.length - 1 ;
    }
    this.setState({img: this.props.images[counter]})
  }

  handleNext(e){
    e.preventDefault()
    if(counter < this.props.images.length && counter >= 0){
      counter += 1;
    }
    if(counter === this.props.images.length){
      counter = 0;
    }
    this.setState({img: this.props.images[counter]})
  }
  handleThumnail(ind){
    // e.preventDefault()
    counter = ind;
    this.setState({img: this.props.images[counter]})
  }


  render () {
    return (
      <div>
        <div id="mainImageContainer">
          <div id="sideContainer">
            {this.props.images.map((sideImg, index)=>{
              var ind = index;
              return(
                <div className="sideImgBox" key={index}>
                  <img className="sideImg" onClick={() => this.handleThumnail(ind)} src={sideImg}/>
                </div>
              )
            })}
          </div>
          <div id="mainImageBox">
            <button id="mainPrev" onClick={this.handlePrev}>
              <div id="mainArrowDiv_prev">
                <svg viewBox="0 0 50 50"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                </svg>
              </div>
            </button>
            <img className="mainImage" src={this.state.img} onClick={this.handleOpenModal}/>
            <button id="mainNext" onClick={this.handleNext}>
              <div id="mainArrowDiv_next">
                <svg viewBox="0 0 50 50"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                </svg>
              </div>
            </button>
          </div>
          <div></div>
        </div>
          <ReactModal isOpen={this.state.showModal} className="modalImage" overlayClassName="Overlay" onRequestClose={this.handleCloseModal}>
            <button onClick={this.handleCloseModal} id="mainModalButton"><span id="closeButton_x">✕</span></button>
            <ImagePopup images={this.props.images}/>
          </ReactModal>
    </div>
    );
  }
}

export default ImageModal;