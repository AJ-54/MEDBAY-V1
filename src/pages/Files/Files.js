import { Component } from 'react';

import Weavy from '../../weavy/Weavy';
import WeavyApp from '../../weavy/WeavyApp';

export default class App extends Component {
  async getJwt() {
    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWVkYmF5IiwiaXNzIjoiYjlmMDRiY2UtMzlhNC00YmU1LTkyOGQtMDE5MmMyMjQ0NzgzIiwiZXhwIjoyMTIyMTIyMjIzLCJlbWFpbCI6ImlzaGl0YUB3ZWF2eS5jb20iLCJzdWIiOiJpc2hpdGFAd2VhdnkuY29tIiwiY2xpZW50X2lkIjoiYjlmMDRiY2UtMzlhNC00YmU1LTkyOGQtMDE5MmMyMjQ0NzgzIn0.AJEZUIEHLmZfZ9W7hNHQDgR34GXr2rA--XQbhqQlZD4";
    return token;
  }
  

  render() {
    return (
      <Weavy jwt={this.getJwt}>
        <div className="App" style={{marginTop: "70px"}}>
          <WeavyApp
            spaceKey="react-space"
            spaceName="React Space"
            appKey="react-files"
            appName="React Files"
            appType="files"
            height="870px"
            />
        </div>
      </Weavy>
    );
  }
}