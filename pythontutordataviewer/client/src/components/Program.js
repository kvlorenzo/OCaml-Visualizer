import React, {Component} from 'react';
import Differ from 'react-differ';

class Program extends Component {
  render() {
    return (
      <div className="Program">
        <div className="BadCode">
          <label><strong>Before</strong></label><br />
          <Differ from={this.props.program.bad} to={"\0"} />
        </div><br /><br /><br />
        <div className="FixedCode">
          <label><strong>After</strong></label><br />
          <Differ from={this.props.program.bad} to={this.props.program.fix} />
        </div><br /><br /><br />
      </div>
    );
  }
}

export default Program;
