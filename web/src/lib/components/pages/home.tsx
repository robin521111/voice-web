import { h, Component } from 'preact';
import Validator from '../validator';
import API from '../../api';

interface Props {
  api: API;
  active: string;
  navigate(url: string): void;
}

export default class Home extends Component<Props, void> {
  render() {
    return <div id="home-container" className={this.props.active}>
      <h1 id="home-title">Project Common Voice</h1>
      <div id="home-layout">
        <div className="left-column">
          <p>Voice is natural, voice is human. That’s why we’re fascinated with creating usable voice technology for our machines. But most of that technology is locked up in a few big corporations and isn’t available to the majority of developers. We think that stifles innovation so we’re launching Project Common Voice, a project to help make voice recognition open to everyone. Now you can donate your voice to help us build an open-source voice recognition engine that anyone can use to make innovative apps for devices and the web.</p>

          <p>Read a sentence to help our machine learn how real people speak. Check its work to help it improve. It’s that simple.</p>
        </div>
        <div className="right-column">
          <p class="strong">You can also help by validating donations!</p>
        </div>
        <div id="donate">
          <button onClick={evt => {
            this.props.navigate('/record')}}>Donate your voice!</button>
        </div>
      </div>
      <div id="try-it-container">
        <h1>Try it!</h1>
        <p id="help-home" class="strong">Help us validate&nbsp;<span>5 sentences</span></p>
        <Validator api={this.props.api} />
      </div>
    </div>;
  }
}