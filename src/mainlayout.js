import React, { Component } from 'react';
import ToolBar from './toolbar';

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state ={
            loggedIn: false
        }
    }
    componentDidMount() {
        this.checkWeb3()
    }
    checkWeb3() {
        if(web3.eth) {
            web3.eth.getCoinbase((err, cb) => {
                console.log(cb)
               if(cb === null) {
                   console.log('again',cb)
                   this.setState({
                       loggedIn: false
                   });
               } else {
                   console.log('Connected to ethereum network');
                   this.setState({
                       loggedIn: true
                   });
               }
            });
        } else {
            this.setState({
                loggedIn: false
            });
        }
    }
    render() {
        if(this.state.loggedIn) {
            return (
                <div className='page-wrapper'>
                    <ToolBar />
                    {this.props.children}
                    
                </div>
            );
        } else {
            return (
                <h3>You must have access to the Ethereum Network in order to use this site. Please enable metamask in order to continue</h3>
            );
        }
    }
}