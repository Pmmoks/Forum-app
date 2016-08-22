import React from 'react'

import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/lib/md'

export default class VotingButtons extends React.Component {
  constructor(){
    super()

    this.state = {
      upvotes: 0,
      downvotes: 0
    }
  }

  render() {
    return(
      <div className='Voting-Buttons'>
        <MdKeyboardArrowUp className='up-vote' onClick={this._Upvote.bind(this)}/>
        {this._ShowUpvote()}
        <span className='vote-break'> |</span>
        <MdKeyboardArrowDown className='down-vote' onClick={this._Downvote.bind(this)}/>
        {this._ShowDownvote()}
      </div>

    )
  }

  _Upvote(event) {
    event.preventDefault()
    this.setState({upvotes: this.state.upvotes +1})
  }

  _Downvote(event) {
    event.preventDefault()
    this.setState({downvotes: this.state.downvotes +1})
  }

  _ShowUpvote() {
    if(this.state.upvotes > 0)
      return (this.state.upvotes)
  }

  _ShowDownvote() {
    if(this.state.downvotes > 0)
      return (this.state.downvotes)
  }
}
