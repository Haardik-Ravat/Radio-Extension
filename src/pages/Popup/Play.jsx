import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

export default function PlayBtn() {
  return (
      <IconButton size="large">
        <PlayArrowOutlinedIcon fontSize="inherit" 
        color="primary"
        />
      </IconButton>
  );
}