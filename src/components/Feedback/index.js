import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  onClickLike = () => {
    this.setState(prevState => ({isEmojiClicked: !prevState.isEmojiClicked}))
  }

  renderEmojiContainer = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            How satisfied are you with our
            <br /> customer support performance?
          </h1>
          <ul className="emojis-container">
            {emojis.map(eachEmoji => (
              <li onClick={this.onClickLike} key={eachEmoji.id}>
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                />
                <p className="emoji-name">{eachEmoji.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderSuccessContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className="card-container">
          <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
          <h1 className="heading">Thank You</h1>
          <p className="emoji-name">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div>
        <div>
          {isEmojiClicked
            ? this.renderSuccessContainer()
            : this.renderEmojiContainer()}
        </div>
      </div>
    )
  }
}
export default Feedback
