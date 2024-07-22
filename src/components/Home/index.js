import {Component} from 'react'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import ScoreView from '../ScoreView'

import GameResultView from '../GameResultView'

import {
  AppContainer,
  ResponsiveContainer,
  RulesView,
  PopUpView,
  PopUpImage,
  TriggerButton,
  CloseButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    score: 0,
    isShow: true,
    newArray: [choicesList[0], choicesList[1]],
    text: 'YOU WON',
  }

  getResult = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'
        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  restartGame = () => this.setState({isShow: true})

  checkResult = id => {
    const {score} = this.state
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]
    const choice1 = choicesList.find(eachValue => eachValue.id === id)
    const result = this.getResult(choice1, choice2)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      isShow: false,
      newArray: [choice1, choice2],
      text: result,
      score: newScore,
    })
  }

  render() {
    const {score, isShow, text, newArray} = this.state
    return (
      <AppContainer>
        <ResponsiveContainer>
          <ScoreView score={score} />
          <GameResultView
            choicesList={choicesList}
            text={text}
            isShow={isShow}
            newArray={newArray}
            checkResult={this.checkResult}
            restartGame={this.restartGame}
          />
          <RulesView>
            <Popup
              modal
              trigger={<TriggerButton type="button">RULES</TriggerButton>}
            >
              {close => (
                <PopUpView>
                  <CloseButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseButton>
                  <PopUpImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopUpView>
              )}
            </Popup>
          </RulesView>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default Home
