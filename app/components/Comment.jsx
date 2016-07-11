import React from 'react'

export default class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      isAbusive: false
    };
  }

  render() {
    let commentBody;
    if (!this.state.isAbusive) {
      commentBody = this.props.body;
    } else {
      commentBody = <em>Content marked as abusive</em>;
    }
    return(
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">
          {commentBody}
        </p>
        <div className="comment-actions">
          <a className="comment-actions-delete" href="#">Delete comment</a>
          <a className="comment-actions-abuse" href="#" onClick={this._toggleAbuse.bind(this)}>Report as abuse</a>
        </div>
      </div>
    );
  }

  _toggleAbuse(event) {
      event.preventDefault();
        this.setState({isAbusive: !this.state.isAbusive})
  }
}
