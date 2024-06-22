import React from "react";
import './list.css';

function List(listItems) {

	const displayList = (
		<ul>
			{
				listItems.listItems.map((element, index) => (

					<li id={index}><span>{element}</span><button onClick={handleClick}>Delete</button></li> 
				))
			}
		</ul>
	)

	function handleClick() {
		event.target.parentNode.remove()
	}
		
	return displayList
}


export default List