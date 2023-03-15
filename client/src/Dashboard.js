import { useState } from 'react';
import { useAuth } from './useAuth';
import { container, Form } from 'react-bootstrap'

export default function Dashboard({code }) {
    const accessToken = useAuth(code)
    const [search,setSearch] = useState('')
    return( 
    <container className='d-flex flex-column py-2' style={
      {height: '100vh'}}>
        <Form.Control 
        type='search' 
        placeholder='Search Songs/Artists' 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        />
        <div className='flex-grow-1 my-2' style={{ overflowY: 'auto'}}>
            Songs
        </div>
      </container>
 )
}