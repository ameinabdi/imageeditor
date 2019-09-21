import React from 'react';
import './App.css';
import ImageEditorRc from 'react-cropper-image-editor';
import 'cropperjs/dist/cropper.css';

function App() {
  return (
    <div className="App">
      <ImageEditorRc
        ref='cropper'
        crossOrigin='true'
        src={image source}
      style={{ height: 400, width: 400 }}
      aspectRatio={16 / 9}
      className={'your custom class'}
      guides={true}
      rotatable={true}
      aspectRatio={16 / 9}
      imageName='image name with extension to download'
        saveImage={functionToSaveImage} // it has to catch the returned data and do it whatever you want
      responseType='blob/base64'
        guides={false}/>
    </div>
  );
}

export default App;
