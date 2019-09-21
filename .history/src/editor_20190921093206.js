import React, { Component } from 'react'
import ImageEditorRc from 'react-cropper-image-editor';
import 'cropperjs/dist/cropper.css';


class Editor extends Component {


    saveImage = () => {

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
                    saveImage={this.saveImage}
                    imageName='image name with extension to download'
                    responseType='blob/base64'
                    guides={false} />
            </div>
        )
    }
}

export default Editor;