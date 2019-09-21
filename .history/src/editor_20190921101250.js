import React, { Component } from 'react'
import ImageEditorRc from 'react-cropper-image-editor';
import { Modal, Button } from 'antd';


class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: {},
            visible: false
        }
    }

    saveImage = (image) => {
        console.log("image")
        this.setState({
            image
        })
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        console.log("hel", this.state.image)
        return (
            <div style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <ImageEditorRc
                    ref='cropper'
                    crossOrigin='true'
                    src='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    style={{ height: 500, width: 500 }}
                    aspectRatio={16 / 9}
                    guides={true}
                    rotatable={true}
                    aspectRatio={16 / 9}
                    saveImage={(data) => this.setState({
                        image: data,
                        visible: true,
                    })}
                    imageName='image name with extension to download'
                    responseType='blob/base64'
                    guides={false}
                />

                <Modal
                    title="Preview"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={600}
                >
                    <img src={this.state.image} width={500} height={500} />
                </Modal>
            </div>
        )
    }
}

export default Editor;