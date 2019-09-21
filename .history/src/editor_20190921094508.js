import React, { Component } from 'react'
import ImageEditorRc from 'react-cropper-image-editor';
import 'cropperjs/dist/cropper.css';


class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: {}
        }
    }

    saveImage = (image) => {
        console.log("image")
        this.setState({
            image
        })
    }

    render() {
        return (
            <div style={{ marginLeft: 500, marginTop: 100 }}>
                <ImageEditorRc
                    ref='cropper'
                    crossOrigin='true'
                    src='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    style={{ height: 500, width: 500 }}
                    aspectRatio={16 / 9}
                    className={'your custom class'}
                    guides={true}
                    rotatable={true}
                    aspectRatio={16 / 9}
                    saveImage={(data) => this.setState({
                        image: data
                    })}
                    imageName='image name with extension to download'
                    responseType='blob/base64'
                    guides={false} />


                <image src={this.state.image} width={500} height={500} />
            </div>
        )
    }
}

export default Editor;