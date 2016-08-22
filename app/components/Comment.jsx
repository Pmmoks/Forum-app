import React from 'react'

import VotingButtons from './VotingButtons'
import Editable from './Editable'

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
        commentBody = <div className='comment-body'>
                        <Editable
                        editing={this.props.editing}
                        value={this.props.value}
                        onEdit={this.props.onEdit}/>
                      </div>
      } else {
        commentBody = <div  className='comment-body-abuse'>
                        <em>Content marked as abusive</em>
                      </div>
      }
      return(
        <div className="comment">
          <p className="comment-header">{this.props.author}</p>
            {commentBody}
          <div className="comment-actions">
            <VotingButtons />
            <a className='comment-actions-edit' href="#" onClick={this.props.onEditClick}>Edit comment</a>
            <a className='comment-actions-delete' href="#" onClick={this.props.onDelete}>Delete comment</a>
            <a className='comment-actions-abuse' href="#" onClick={this._toggleAbuse.bind(this)}>Report as abuse</a>
          </div>
        </div>
      );
    }

    _toggleAbuse(event) {
        event.preventDefault();
        this.setState({isAbusive: !this.state.isAbusive})
    }
  }
