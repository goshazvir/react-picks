import React, {useState} from 'react';
import unsplash from './../configs/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'


const App = () => {
    const [responceResult, setResponceResult] = useState(null)

    const onSearchSubmit = async (term) => {
        const responce = await unsplash
            .get('https://api.unsplash.com/search/photos', {
                params: { query: term }
        })

        setResponceResult(responce.data.results)
    }

    return (
        <div className='ui container' style={{marginTop: '10px'}}>
            <SearchBar onSubmit={onSearchSubmit} />
            {responceResult && (
                <div>
                    Found: {responceResult.length} images
                </div>
            )}

            {responceResult && <ImageList images={responceResult} /> }
        </div>
    )
}

export default App
