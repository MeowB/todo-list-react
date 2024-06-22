import { useState } from 'react'
import './App.css'
import List from './component/list.jsx'

function App() {
  const [listItems, setListItems] = useState(["list", "of", "items"])
  const [addedItem, setAddedItem] = useState('');

  	const handleChange = (event) => {
		setAddedItem(event.target.value)
  	}

  	const handleClick = (event) => {
		// if the input isn't empty
		if(addedItem.trim() !== ''){
			setListItems([...listItems, addedItem])
		}
  	}


  return (
    <>
		<h1>todo list</h1>
		<div className="searchbar">
			<input id='input-field' type="text" placeholder="Add a new task" onChange={handleChange} />
			<button onClick={handleClick}>Add Task</button>
		</div>

		<List listItems={listItems} />
    </>
  )
}

export default App
