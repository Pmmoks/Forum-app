import React from 'react'

export default ({editing, value, onEdit, ...props}) => {
  if (editing) {
    return (<Edit onEdit={onEdit} value={value} {...props}/>)
  }
  return (<span {...props}>{value}</span>)
}

class Edit extends React.Component {
  render() {

  const {value, onEdit, ...props} = this.props

  return <textarea
    className = 'comment-edit-box'
    type='text'
    autoFocus={true}
    defaultValue={value}
    onBlur={this._finishEdit}
    onKeyDown={this._checkEnter}
    {...props} />
  }

  _finishEdit = (event) => {
    const newValue = event.target.value
      if (this.props.onEdit) {
        this.props.onEdit(newValue)
      }
  }

  _checkEnter = (event) => {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault()
      this._finishEdit(event)
    }
  }
}
