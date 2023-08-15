import {useEffect, useState, Suspense } from 'react'
import React from 'react'

import SearchBar from './components/SearchBar'
import { createResource as fetchData } from './helper'
import Spinner from './Spinner'
// const Gallery = React.lazy(()=> import('./components/Gallery'))
import Gallery from './components/Gallery'
function App(){
    let [searchTerm, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState(null)

    useEffect(() => {
      if (searchTerm) {
          setData(fetchData(searchTerm))
      }
  }, [searchTerm])
  

    const handleSearch = (e, term) => {
      e.preventDefault()
      setSearch(term)
  }
  const renderGallery = () => {
    if(data) {
        return (
            <Suspense fallback={<Spinner />}>
                <Gallery data={data} />
            </Suspense>
        )
    }
}


return (
  <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      {renderGallery()}
  </div>
)


}

export default App

