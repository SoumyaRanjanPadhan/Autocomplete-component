
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, Button, Typography } from '@mui/material';

const UserSearch = () => {
  const [showButton, setShowButton] = useState(false);
  const users = [];
  const [selectedUser, setselectedUser] = useState();
  const hadndleOnChange = (event, value) =>{
    setselectedUser(value);
  }
  useEffect(() => {
    setShowButton(users.length === 0);
  }, [users]);
  return (
    <Box>
      <Typography variant='h3' style={{ textAlign: 'center' }}>Select User</Typography>
      <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        <Autocomplete
          style={{width:'500px'}}
          options={users}
          renderInput={(params) => (<TextField {...params} label="select user"/>)}
          value={selectedUser}
          onChange={hadndleOnChange}
          noOptionsText={
            <>
          No matches found!
          {showButton && (
            <Button onClick={()=> {console.log("create user clicked");}}>Create User</Button>
          )}
        </>
          }
        />
      </Box>
    </Box>
  );
}

export default UserSearch;