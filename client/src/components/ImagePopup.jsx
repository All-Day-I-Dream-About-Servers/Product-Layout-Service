import React from 'react'
import Magnify from './Magnify.jsx'
import ReactImageMagnify from 'react-image-magnify';

class ImagePopup extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      zoomOn : false
    }
    this.zoomClickHandle = this.zoomClickHandle.bind(this)
  }

  zoomClickHandle(e){
    e.preventDefault()
    this.setState({
      zoomOn : !this.state.zoomOn
    }, ()=> console.log(this.state.zoomOn))
  }

  render(){
    const smallImg = this.props.images;
    const largeImg = this.props.images;

    return (
      <div>
        <section className="carousel">
          <ol className="carousel__viewport">
            <li id="carousel__slide1" tabIndex="0" className="carousel__slide" >
              <div onClick={this.zoomClickHandle}>
              {this.state.zoomOn ? (
                <Magnify image={this.props.images[0]} onClick={this.zoomClickHandle}/>
              ) : (
              <div className="fluid">
                <div className="fluid__image-container">
                <img className="CImage" src={this.props.images[0]} onClick={this.zoomClickHandle}/>
                </div>
              </div>
              )}
              </div>
              <button className="carousel__snapper_prev">
                <a href="#carousel__slide4" className="carousel__prev">
                  <div id="mar_carousel_prev">
                    <svg viewBox="-6 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                    </svg>
                  </div>
                Go to last slide
                </a>
              </button>
              <button className="carousel__snapper_next">
                <a href="#carousel__slide2" className="carousel__next">
                  <div id="mar_carousel_next">
                    <svg viewBox="-9 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                    </svg>
                  </div>
                Go to next slide</a>
              </button>
            </li>
            <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
              <div onClick={this.zoomClickHandle}>
                {this.state.zoomOn ? (
                    <Magnify image={this.props.images[1]} onClick={this.zoomClickHandle}/>
                  ) : (
                  <div className="fluid">
                    <div className="fluid__image-container">
                    <img className="CImage" src={this.props.images[1]} onClick={this.zoomClickHandle}/>
                    </div>
                  </div>
                )}
              </div>
                <div className="carousel__snapper_prev">


                <a href="#carousel__slide1" className="carousel__prev">
                  <div id="mar_carousel_prev">
                    <svg viewBox="-6 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                    </svg>
                  </div>
                  {/* <div id="mar_carousel_prev"></div> */}

                Go to last slide</a>
                </div>
                <div className="carousel__snapper_next">
                <a href="#carousel__slide3" className="carousel__next"><div id="mar_carousel_next">
                    <svg viewBox="-9 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                    </svg>
                  </div>Go to next slide</a>
                </div>
            </li>
            <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
              <div onClick={this.zoomClickHandle}>
                {this.state.zoomOn ? (
                  <Magnify image={this.props.images[2]} onClick={this.zoomClickHandle}/>
                ) : (
                <div className="fluid">
                  <div className="fluid__image-container">
                  <img className="CImage" src={this.props.images[2]} onClick={this.zoomClickHandle}/>
                  </div>
                </div>
                )}
              </div>
                <div className="carousel__snapper_prev">
                <a href="#carousel__slide2" className="carousel__prev"><div id="mar_carousel_prev">
                    <svg viewBox="-6 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                    </svg>
                  </div>Go to last slide</a>
                </div>
                <div className="carousel__snapper_next">
                <a href="#carousel__slide4" className="carousel__next"><div id="mar_carousel_next">
                    <svg viewBox="-9 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                    </svg>
                  </div>Go to next slide</a>
                </div>
            </li>
            <li id="carousel__slide4" tabIndex="0" className="carousel__slide">
              <div onClick={this.zoomClickHandle}>
              {this.state.zoomOn ? (
                <Magnify image={this.props.images[3]} onClick={this.zoomClickHandle}/>
              ) : (
              <div className="fluid">
                <div className="fluid__image-container">
                <img className="CImage" src={this.props.images[3]} onClick={this.zoomClickHandle}/>
                </div>
              </div>
              )}
              </div>
              <div className="carousel__snapper_prev">
              <a href="#carousel__slide3" className="carousel__prev"><div id="mar_carousel_prev">
                    <svg viewBox="-6 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                    </svg>
                  </div>Go to last slide</a>
              </div>
              <div className="carousel__snapper_next">
              <a href="#carousel__slide5" className="carousel__next"><div id="mar_carousel_next">
                    <svg viewBox="-9 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                    </svg>
                  </div>Go to next slide</a>
              </div>
            </li>
            <li id="carousel__slide5" tabIndex="0" className="carousel__slide">
              <div onClick={this.zoomClickHandle}>
              {this.state.zoomOn ? (
                  <Magnify image={this.props.images[4]} onClick={this.zoomClickHandle}/>
                ) : (
                <div className="fluid">
                  <div className="fluid__image-container">
                  <img className="CImage" src={this.props.images[4]} onClick={this.zoomClickHandle}/>
                  </div>
                </div>
                )}
              </div>
                <div className="carousel__snapper_prev">
                <a href="#carousel__slide4" className="carousel__prev"><div id="mar_carousel_prev">
                    <svg viewBox="-6 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                    </svg>
                  </div>Go to last slide</a>
                </div>
                <div className="carousel__snapper_next">
                <a href="#carousel__slide1" className="carousel__next"><div id="mar_carousel_next">
                    <svg viewBox="-9 -8 40 40"> <path d="M17.59 7l5 5-5 5M0 12h22" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"></path>
                    </svg>
                  </div>Go to next slide</a>
                </div>
            </li>
          </ol>
        </section>
      </div>
    )
  }
}


export default ImagePopup;