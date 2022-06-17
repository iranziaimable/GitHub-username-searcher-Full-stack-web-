import React from 'react'
import { useSelector } from 'react-redux'
import { searchedUsers } from './userSlice'


const HistoryScreen = () => {
  const users = useSelector(searchedUsers)
  return (
    <div>
        <div className='histNavigation'>
          <div className="histLogo">Github Searched Names </div>
        </div>
        <div className='Uname'>
          {users.map((user) => {
            return(
              <h6> {user}</h6>    
                    
            )
          })
          }      
      </div>
  </div>
    )
  }
export default HistoryScreen







