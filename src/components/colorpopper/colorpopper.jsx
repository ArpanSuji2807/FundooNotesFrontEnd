import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { IconButton } from '@mui/material';


export default function ColorPopper(props) {
  const colorArray = ['#e2725b', '#ffae42', '#fefe33', '#77dd77', '#40e0d0', '#a4dded', '#77b5fe', '#ba55d3', '#ffb3de', '#c19a6b', '#d3d3d3']
  //const colorArray = ['red','yellow','blue']
  const [anchorEl, setAnchorEl] = React.useState(null);

  const takeColor =(color) =>{
    console.log(color);
    if(props.action =='create'){
      props.listenToColorPopper(color);
    }
    else if(props.action =='update'){
      props.takeColorpopper(color)
    }
  }
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
        <IconButton>
        <ColorLensOutlinedIcon aria-describedby={id} type="button" onClick={handleClick}/>
        </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper',display:"flex"}}>
            {colorArray.map((color) =>(<div onClick={() =>takeColor(color)} style={{width:35,height:35,borderRadius:50,backgroundColor:color,marginLeft:10}}></div>))}
        </Box>
      </Popper>
    </div>
  );
}
