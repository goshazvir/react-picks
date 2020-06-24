import React, {useState} from 'react';

const SearchBar = (props) => {
    const [SearchInputVal, setSearchInputVal] = useState('')

    const onSearchInputChange = (event) => {
        setSearchInputVal(event.target.value)
        console.log(event.target.value)
    }

    const onSearchInputClick = () => {
        console.log('input was clicked')
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        props.onSubmit(SearchInputVal)
    }

    return (
        <div className='ui segment'>
            <form className='ui form' onSubmit={onFormSubmit}>
                <div className='field'>
                    <label>Image Search</label>
                    <input
                        type='text'
                        value={SearchInputVal}
                        onClick={onSearchInputClick}
                        onChange={onSearchInputChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar
