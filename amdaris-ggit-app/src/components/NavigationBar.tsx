import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import '../App.css';

export default function NavigationBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <div style={{ display: 'grid', placeItems: 'center', height: '100px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          
          <Typography sx={{ minWidth: 100 }}><a href="/about">About</a></Typography>
          <Typography sx={{ minWidth: 100 }}><a href="/books">Books</a></Typography>
          <Typography sx={{ minWidth: 100 }}><a href="/movies">Movies</a></Typography>
          <Typography sx={{ minWidth: 100 }}><a href="/sign-in">Sign In</a></Typography>
          <Typography sx={{ minWidth: 100 }}><a href="/sign-up">Sign Up</a></Typography>
          


          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>

        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> <a href="/profile">Profile</a>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <a href="/log-out">Log Out</a>
          </MenuItem>
        </Menu>
      </div>
      <div className="footer" style={{ backgroundColor: '#F3DCDC' }}>
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
      </a>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li>Popova Anastasia</li>
      <li>Moldovan Iana</li>
      <li>Ceban Ana</li>
    </ul>
    <div className="text-center col-md-4 ">
      <span className="mb-3 mb-md-0 text-body-secondary">© Girls Go IT Amdaris Internship 2023</span>
    </div>
  </footer>
</div>

    </React.Fragment>
  );
}