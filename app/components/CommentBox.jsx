import React from 'react'

import uuid from 'uuid'

import Comment from './Comment'
import CommentForm from './CommentForm'

export default class CommentBox extends React.Component {
  constructor() {
    super()

    this.state ={
      showComments: false,
      comments: [
        { id: uuid.v4(), author: 'Clu', body: 'Just say no to love!', avatarUrl: 'images/default-avatar.png' },
        { id: uuid.v4(), author: 'Anne Droid', body: 'I wanna know what love is...', avatarUrl: 'images/default-avatar.png' }
      ]
    }
  }

  render() {
    const comments = this._getComments() || [];

    let commentList;
    if (this.state.showComments) {
      commentList = <div className="comment-list">{comments}</div>
    }

    return(
      <div className="comment-box">
        <h3>COMMENTS</h3>
        {this._getPopularMessage(comments.length)}
        <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
        <button className="comment-toggle" onClick={this._toggleShowComments.bind(this)}>{this._toggleCommentButton()}</button>
        <CommentForm addComment={this._addComment.bind(this)}/>
        {commentList}
      </div>
    );
  }

  _toggleShowComments(event) {
    event.preventDefault()
      this.setState({showComments: !this.state.showComments})
  }

  _toggleCommentButton() {
    if (this.state.showComments) {
      return ('HIDE COMMENTS')
    } else if (!this.state.showComments) {
      return ('SHOW COMMENTS')
    }
  }

  _getPopularMessage(commentCount) {
    const POPULAR_COUNT = 10;
    if (commentCount > POPULAR_COUNT) {
       return (
         <div>This post is getting really popular, don't miss out!</div>
       );
    }
  }

  _addComment(author, body) {
    const comment = {
      id: uuid.v4(),
      author: author,
      body: body
    }

    this.setState({comments: this.state.comments.concat([comment])})
  }

  _getComments() {

    return this.state.comments.map((comment) => {
      return (<Comment
                 author={comment.author}
                 avatarUrl={comment.avatarUrl}
                 value ={comment.body}
                 editing={comment.editing}
                 onEditClick={this._activateEdit.bind(this, null, comment.id)}
                 key={comment.id}
                 onDelete = {this._deleteComment.bind(this, null, comment.id)}
                 onEdit={this._editComment.bind(this, null, comment.id)}/>)
    })
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return '1 comment'
    } else {
      return `${commentCount} comments`;
    }
  }

  _deleteComment(event, key) {
    //event.preventDefault()
    //event.stopPropagation()
    this.setState (
      {comments: this.state.comments.filter((singleComment) => singleComment.id !== key)
      }
    )
  }

  _activateEdit(event, key) {
    this.setState({comments: this.state.comments.map((comment) => {
      if (comment.id === key) {
          comment.editing = true
        }
      return comment
    })})
  }

  _editComment(event, key, value) {
    this.setState({comments: this.state.comments.map((comment) => {
      if (comment.id === key) {
        comment.editing = false
        comment.body = value
      }
      return comment
    })})
  }
}
