import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (e)=> {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return(
        <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                title='press Enter to input and shift + Enter to search'
                placeholder='Input yours todo tasks'
                onChange={props.handleChange}
                onKeyUp={keyHandler}
                value={props.description} ></input>
        </Grid>
        <div className='spaceButton'>
        <Grid cols='12 3 2'>
            <IconButton style='outline-primary' icon='plus'
                onClick={props.handleAdd}></IconButton>
            <IconButton style='outline-secondary' icon='search'
                onClick={props.handleSearch}></IconButton>
            <IconButton style='outline-info' icon='close'
                onClick={props.handleClear}></IconButton>
        </Grid>
        </div>
    </div>
    )
}