import React, {useState} from 'react'
import './searchUserName.css'
import SearchIcon from "@mui/icons-material/Search"
import 'bootstrap/dist/css/bootstrap.css';
import { Form, FormGroup} from 'react-bootstrap';
import {Label } from 'reactstrap';
import { useDispatch } from 'react-redux/es/exports';
import { historyFetch } from '../state/reducer/userSlice';
import { Link } from 'react-router-dom'

const SearchUserName = ({placeholder}) => { 
    const [username, setUsername] = useState("");
    const [user, setUser] = useState({});
    const dispatch = useDispatch()


const handleFilter = (event) => {
      const searchNameEntered =event.target.value;
      setUsername(searchNameEntered);
};

const search = async () =>{
  dispatch(historyFetch(username))
    const response = await fetch("https://api.github.com/users/" + username);     
    setUser(await response.json());
}

  return (
    <div>
      <div className='navigation'>
        <div className="logo">Github User Searcher </div>
          <nav className='items'>
            <ul className='item'>
              <input type="text" placeholder={placeholder} value={username} onChange={handleFilter}/>
              <div className='searchIcon'>< SearchIcon onClick={search}/></div>
            </ul>
          </nav>
      </div>
      
      <div className='card'>    
        <Form className="my-form">
          <FormGroup>
              <Label>Names: <div>{user.name}</div> </Label>                
          </FormGroup>
          <FormGroup>
              <Label >Email:  <div>{user.email}</div> </Label>
          </FormGroup>
          <FormGroup>
              <Label>Bio: <div>{user.bio}</div></Label>                
          </FormGroup>
          <FormGroup>
              <Label>URL:  <div>{user.url}</div></Label>               
          </FormGroup>
          <Form.Group>
              <Label>Description:  <div>{user.description}</div></Label>
          </Form.Group>
          <FormGroup>
          <Label>Avatar picture: </Label>
              <img src={user.avatar_url} alt={''} style={{width: '150px'}}/>
          </FormGroup>
            < br />    
            <div className='tag'>
              <Link to='./history'>History</Link>
            </div>
          
        </Form>        
    </div>
  </div>
  )
}
export default SearchUserName