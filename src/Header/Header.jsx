import { AppBar, Toolbar, Typography } from "@material-ui/core";
import DehazeIcon from '@material-ui/icons/Dehaze';


function Header() {
      return (
        <AppBar position='static'>
            <Toolbar>
                <DehazeIcon/>
                <Typography >
                    This is the header
                </Typography>
                
            </Toolbar>
        </AppBar>   
    );
  }
  
  export default Header;
  