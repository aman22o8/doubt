// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {initialstate: 0}

  leftClick = () => {
    const {initialstate} = this.state
    if (initialstate <= 0) {
      this.setState({initialstate: 0})
    } else {
      this.setState(myprev => ({initialstate: myprev.initialstate - 1}))
    }
  }

  rightClick = () => {
    const {initialstate} = this.state
    if (initialstate > 2) {
      this.setState({initialstate: 3})
    } else {
      this.setState(myprev => ({initialstate: myprev.initialstate + 1}))
    }
  }

  render() {
    const {initialstate} = this.state
    const {reviewsList} = this.props
    console.log(initialstate)
    console.log(reviewsList.at(initialstate))
    const myresult = reviewsList[initialstate]
    // if (initialstate <= 0) {
    //   myresult = reviewsList.at(0)
    // } else if (initialstate >= reviewsList.length) {
    //   myresult = reviewsList.at(reviewsList.length - 1)
    // } else {
    //   myresult = reviewsList.at(initialstate)
    // }
    // console.log(myresult)
    const {imgUrl, username, companyName, description} = myresult

    return (
      <div className="bg_container">
        <h1 className="heading">Reviews</h1>
        <div className="fotter">
          <button
            onClick={this.leftClick}
            type="button"
            data-testid="leftArrow"
            className="button2"
          >
            <img
              className="left1"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
            />
          </button>
          <div className="list_container">
            <img className="images" src={imgUrl} alt={username} />
            <p className="user_name">{username}</p>
            <p className="name">{companyName}</p>
            <p className="name">{description}</p>
          </div>
          <button
            onClick={this.rightClick}
            type="button"
            data-testid="rightArrow"
            className="button2"
          >
            <img
              className="left1"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
