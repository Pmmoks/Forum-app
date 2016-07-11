import React from 'react'

export default class CommentForm extends React.Component {
  constructor() {
    super()

    this.state = {
      characters: 0
    }
  }

  render() {
    return(
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <label>Join the Discussion</label>
        <div className="comment-form-fields">
          <input className="comment-form-author" placeholder="Name:" ref={(input) => this._author = input}/>
          <textarea className="comment-form-body"
                    placeholder="Comment:"
                    ref={(textarea) => this._body = textarea}
                    onKeyUp = {this._getCharacterCount.bind(this)}/>
          <p className="comment-form-body-characters">{this.state.characters} characters </p>
        </div>
        <div className="comment-form-actions">
          <button type="submit">POST COMMENT</button>
        </div>
      </form>
    )
  }

  _handleSubmit(event) {
    event.preventDefault()
    if (this.state.characters > 0 && this._author.value) {
      let author = this._author
      let body = this._body

      this.props.addComment(author.value, body.value)

      this._author.value = ''
      this._body.value = ''
    }
  }

  _getCharacterCount(event) {
    event.preventDefault()
    this.setState({characters: this._body.value.length})
  }
}
