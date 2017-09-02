import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import MainLayout from './mainlayout';
import SettingsPage from './settingspage';
import SearchPage from './searchpage';
import AboutPage from './aboutpage';
import UploadPage from './uploadpage';
var ipfsApi = {}

window.ipfs = window.IpfsApi('localhost', '5001');
console.log(window.ipfs)
/*if(window.Ipfs) {
  window.ipfs = new window.Ipfs({
    init: true,
    start: true,
    repo: 'MadDecentralized',
    config: {
      Bootstrap: [
        "/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd",
      "/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3",
      "/dns4/sfo-3.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM",
      "/dns4/sgp-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu",
      "/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm",
      "/dns4/nyc-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64",
      "/dns4/wss0.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmZMxNdpMkewiVZLMRxaNxUeZpDUb34pWjZ1kZvsd16Zic",
      "/dns4/wss1.bootstrap.libp2p.io/tcp/443/wss/ipfs/Qmbut9Ywz9YEDrz8ySBSgWyJk41Uvm2QJPhwDJzJyGFsD6"
      ]
    }
  });
  window.ipfs.on('ready', () => {
    console.log('IPFS Node ready');
    
  });
  window.ipfs.on('error', (err) => {
    console.log('IPFS err', err);
  });
} else {
  console.log("IPFS not connected");
}
*/


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={MainLayout}>
            <Route path='/about' component={AboutPage} />
            <Route path='/search' component={SearchPage} />
            <Route path='/settings' component={SettingsPage} />
            <Route path='/upload' component={UploadPage} />
        </Route>
      </Router>
    )
  }
}

export default App