import { colors } from '../../constants/colors'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SearchBar = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState('')


    const submitHandler = e => {
         e.preventDefault()
        if(value) {
            navigate(`/search/${value}`)
            setValue('')
        }
    }

    return (
        <Paper
            onSubmit={submitHandler}
            component={'form'}
            sx={{
                border: `1px solid ${colors.secondary}`,
                pl: 2,
                boxShadow: 'none',
            }}
        >
            <input
                type="text"
                placeholder='Search...'
                className='search-bar'
                onChange={e => setValue(e.target.value)}
                value={value}
            />
            <IconButton type='submit'>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar 