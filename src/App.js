import React, {Component} from "react"
import Table from "./Table"
import Form from "./Form"

class App extends Component {
    state = {
      characters: [],
    }

    removeCharacter = (index) => {
      const {characters} = this.state // arrow 함수이므로 this는 현재 객체를 의미.
      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index // filter를 거친후에 해당하는 (true = 다른것들 ) 것만 array로 도출 (새로운 어레이를 만들어! 기존것을 수정하는게 아님.)
        }),
      })
    }

    handleSubmit = (character) => {
      this.setState({characters: [...this.state.characters, character]}) // concat의 다른 버전
    } // this는 App 객체를 가리킴(arrow function)
    
    render() {
        const {characters} = this.state 

      return (
        <div className='container'>
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit}/>
        </div>
      )
    }
  }

export default App