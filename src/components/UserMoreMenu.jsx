import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
// component
import Iconify from './Iconify.jsx';
import axios from 'axios';

// ----------------------------------------------------------------------

export default function UserMoreMenu({targetRow, setAllRequests}) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(e){
    e.preventDefault();
    console.log(`delete button was clicked for ${Number(targetRow)}`);
    console.log(targetRow);
    axios.delete(`./request/${targetRow}`)
    .then((response)=> {
      console.log(response);
      axios.get('/requests')
        .then((result) => {
            const { data } = result;
            const newArray = [];
            for (let i = 0; i < data.length; i++) {
            newArray.push(data[i]);
            }
            setAllRequests(newArray);
        });   
    })
  }

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'text.secondary' }} onClick = {handleClick}>
          <ListItemIcon>
            <Iconify icon="eva:trash-2-outline" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        {/* <MenuItem component={RouterLink} to="#" sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Iconify icon="eva:edit-fill" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem> */}
      </Menu>
    </>
  );
}