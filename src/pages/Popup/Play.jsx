import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function PlayBtn() {
  return (
      <IconButton size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
  );
}