/**
 * Settings.
 */
import React from 'react';
import { remote } from 'electron';
const dialog = remote.require('electron').dialog;

// Settings
class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Select path
  selectPath() {
		dialog.showOpenDialog({
      properties: [ 'openDirectory', 'createDirectory' ]
		},
		(filePath) => {
      this.setState({ path: filePath });
		});
  }

  // Submit form
  submit() {

  }

  // Render
  render() {
    return (
      <div class="center-box-container">
        <div class="center-box">
          <h1>Settings</h1>
          <form>
            <div class="form-group">
              <label for="name">Your name</label>
              <input type="text" class="form-control" id="name" placeholder="Your name" value={ this.state.name } />
            </div>

            <div class="form-group">
              <label for="path">Your files</label>
              <div class="input-group">
                <input type="text" class="form-control" id="path" placeholder="Select path" value={ this.state.path } readOnly />
                <button class="btn btn-default" onClick={ this.selectPath.bind(this) }><i class="fa fa-folder"></i></button>
              </div>
            </div>

            <button type="submit" class="btn btn-primary" onClick={ this.submit.bind(this) }>Save</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Settings;
