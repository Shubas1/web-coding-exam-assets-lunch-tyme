import React, { Component } from 'react';
import './navigatorStyles.css';
import fontStyles from '../../styles/fontStyles';

class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.showMenu,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      isChecked: nextProps.showMenu,
    });
  }
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }
  render() {
    return (
      <div style={{width:'100%', height:'100%'}}>
        <input
          checked={this.state.isChecked}
          type="checkbox"
          id="drawer-toggle"
          name="drawer-toggle"
          onChange={() => this.toggleChange()}
          />
        <label htmlFor="drawer-toggle" id="drawer-toggle-label"></label>
        <header style={fontStyles.appHeader}>{this.props.appName}</header>
        <nav id="drawer">
          <ul>
             {this.props.children.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </nav>
        <div id="page-content">
          <div id="content-box" style={{background:'#FFFFFF'}}>
            {this.props.contentPane}
          </div>
        </div>
      </div>
    );
  }
}

export default Navigator;
