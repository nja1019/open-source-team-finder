import React from 'react';

export default class MainFeedFilter extends React.Component {
  render() {
    return (
      <div>
        <div className="row navbar main-feed-header">
          <h6> FILTERS: </h6>
          <div className="checkbox">
            <span className="glyphicon glyphicon-paperclip"></span>
          </div>
          <div className="checkbox">
            <span className="glyphicon glyphicon-folder-open"></span>
          </div>
          <div className="checkbox">
            <span className="glyphicon glyphicon-eye-open"></span>
          </div>
        </div>
      </div>
    )
  }
}
