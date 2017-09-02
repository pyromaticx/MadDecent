import React, { Component } from 'react';
import {browserHistory} from 'react-router';

import base64Img from './base64Img';
export default class ToolBar extends Component {
    constructor(props) {
        super(props) 
        this.state ={}
    }
    toolbarAction(action) {
        switch (action) {
            case 'search': {
                browserHistory.push('/search');
                break;
            }
            case 'settings': {
                browserHistory.push('/settings');
                break;
            }
            case 'upload': {
                browserHistory.push('/upload');
                break;
            }
            default: {
                browserHistory.push('/');
                break;
            }
        }
    }
    render() {
        return (
            <div className='toolbar-wrapper'>
                <div onClick={(evt) => {this.toolbarAction('toolbar')}} className='toolbar-icon'>
                    <img src={base64Img.burgerbar} />
                </div>
                <div onClick={(evt) => {this.toolbarAction('search')}} style={{marginTop: '20px'}} className='toolbar-icon'>
                    <img src={base64Img.search} />
                </div>
                <div onClick={(evt) => {this.toolbarAction('upload')}} className='toolbar-icon'>
                    <img src={base64Img.upload} />
                </div>
                <div onClick={(evt) => {this.toolbarAction('settings')}} className='toolbar-icon'>
                    <img src={base64Img.settings} />
                </div>
            </div>    
        );
        
    }
}