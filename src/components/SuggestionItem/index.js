// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {list, onClickSuggesstion} = props
  const {suggestion} = list
  const storeInput = () => {
    onClickSuggesstion(suggestion)
  }

  return (
    <li className="suggestionItem">
      <p className="suggestion">{suggestion}</p>
      <button className="button" type="button" onClick={storeInput}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="push-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
