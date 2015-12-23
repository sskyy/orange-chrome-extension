import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Translator from './components/Translator';

@connect(state => state)
export default class InjectApp extends Component {
  constructor(){
    super()
    this.state = {
      q : ''
    }
  }

  componentDidMount(){
    window.addEventListener('mouseup', ()=>{
      const selection = window.getSelection()
      const q = selection.toString()

      console.log( q )

      if( /^\s*$/.test(q) ) return

      this.setState({q})
    })
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { dispatch } = this.props;
    // const actions = bindActionCreators(/* Actions */, dispatch);

    if( /^\s*$/.test(this.state.q) ) return null

    return (
      <div style={{}}>
        <Translator q={this.state.q} />

      </div>
    );
  }
}