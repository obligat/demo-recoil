import { RecoilRoot } from 'recoil'
import CharacterCounter from './CharacterCounter'
import TodoList from './TodoList'
import './App.css'

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <CharacterCounter />
        <TodoList />
      </RecoilRoot>
    </div>
  )
}

export default App
