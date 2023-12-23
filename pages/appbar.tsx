import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Grid, IconButton, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EventIcon from '@mui/icons-material/Event';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

/**
 * NavBar Component
 * @param props 
 * @returns 
 */
export default function NavBar(props: Props) {
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar color='inherit'>
          <Toolbar>
            <Grid container spacing={3}>
                <Grid item xs>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={8} md={9.5} sm={4} lg={10}>
                    <Typography variant="h5" component="div" color={'black'} textAlign={'center'} fontFamily={'cursive'} fontStyle={'oblique'}>
                        Dream Home
                    </Typography>
                </Grid>
                <Grid item xs display="flex" alignItems="flex-end">
                    <Tooltip title="Login" placement= "right">
                        <IconButton>
                            <AccountCircleRoundedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Bookings" placement= "right">
                        <IconButton>
                            <EventIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Rent/Buy Cart" placement= "right">
                        <IconButton>
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}