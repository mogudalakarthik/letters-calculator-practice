import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onChangeInputValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="app-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculator-image"
          />
        </div>
        <div className="heading-search-input-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="search-and-name-container">
            <label className="labelName" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              type="text"
              className="search-input"
              value={searchInput}
              onChange={this.onChangeInputValue}
              placeholder="Enter the phrase"
              id="phraseText"
            />
            <div className="counter-container">
              <p className="no-of-letters">
                No.of letters: {searchInput.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
