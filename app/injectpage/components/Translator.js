import React from 'react';
import './Translator.css';

const App = React.createClass({
  getInitialState(){
    return {
    }
  },
  render() {

    if( !this.props.q ) return null

    const url = `http://dict.hjenglish.com/jp/jc/${encodeURIComponent(this.props.q)}`

    return <div className='translator hujiang'>
      <div className="result">
        <iframe src={url} />
      </div>
    </div>
  },
});

export default App;
