// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onInputChange = event => {
    const input = event.target.value
    this.setState({searchInput: input})
  }

  onClickSuggesstion = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
          className="googleImage"
        />
        <div className="search-container">
          <div className="bar-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-bar"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.onInputChange}
            />
          </div>
          <ul className="suggestions-container">
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                list={eachSuggestion}
                onClickSuggesstion={this.onClickSuggesstion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
