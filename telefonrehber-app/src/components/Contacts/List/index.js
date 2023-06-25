import React, { useState } from 'react'

function List({contacts}) {
    const [filterText,setFilterText] =useState("");
    const filtered = contacts.filter((item) => {
      return Object.keys(item).some((key)=>{
        return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
      })
    })

    console.log("Filtered:",filtered)
  return (
    <div>
      <input type="text" placeholder='Filter Contact' value={filterText} onChange={(e)=>setFilterText(e.target.value)}/>
      <ul>
        {filtered.map((item,i)=>(
          <li key={i}>{item.fullname}</li>
        ))}
      </ul>
    </div>
  )
}

export default List