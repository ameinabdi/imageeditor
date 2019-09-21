import React, { Component } from 'react'
import ImageEditorRc from 'react-cropper-image-editor';
import 'cropperjs/dist/cropper.css';


class Editor extends Component {
    render() {
        return (
            <div style={{ marginLeft: 100 }}>
                <ImageEditorRc
                    ref='cropper'
                    crossOrigin='true'
                    src='https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567__340.jpg'
                    style={{ height: 400, width: 400 }}
                    aspectRatio={16 / 9}
                    className={'your custom class'}
                    guides={true}
                    rotatable={true}
                    aspectRatio={16 / 9}
                    imageName='image name with extension to download'
                    responseType='blob/base64'
                    guides={false} />
            </div>
        )
    }
}

export default Editor;