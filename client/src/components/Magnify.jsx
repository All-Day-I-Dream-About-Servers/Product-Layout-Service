import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';

export default class Manify extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }

    }

    render() {
        const smallImg = this.props.image;
        const largeImg = this.props.image;

        return (
            <div className="fluid">
                <div className="fluid__image-container">
                    <ReactImageMagnify {...{
                        smallImage: {
                            src: smallImg,
                            isFluidWidth: true
                        },
                        largeImage: {
                            src: largeImg,
                            width: 1600,
                            height: 1600,
                        },
                        imageStyle: { height: '600px' },
                        enlargedImagePosition: 'over',
                        lensStyle: {backgroundColor: 'rgba(0,0,0,.6)'}
                    }}/>
                </div>
            </div>
        );
    }
}