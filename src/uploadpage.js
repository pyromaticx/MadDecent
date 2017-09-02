import React, { Component } from 'react';

export default class UploadPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadProgress: 0
        }
    }
    handleFileInput(evt) {
        var file = evt.currentTarget.files[0];
        console.log('file', file)
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.addEventListener('progress', (evt) => {
            console.log(evt)
            var percComplete = evt.total / evt.loaded;
            this.setState({
                uploadProgress: (Math.round(percComplete * 100))
            });
        })
        reader.addEventListener('loadend', () => {
            console.log('File loaded, attempting IPFS hash creation')
            this.uploadToIPFS(file, reader);
        });
    }
    uploadToIPFS(file, reader) {
        const buf = Buffer.from(reader.result);
        console.log(buf.length)
        window.ipfs.add(buf).then((res) => {
            console.log(res);
        });
        
    }
    render() {
        return (
            <div className='page-content'>
                <h3>Create a new resource</h3>
                <input type='file' onChange={(evt) => {this.handleFileInput(evt)}} />
                {this.state.uploadProgress !== 0 ? <p>Progress {this.state.uploadProgress}</p> : ''}
            </div>
        );
    }
}