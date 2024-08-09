import React from 'react';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function BackButton({ label }) {
  return (
    <Button
      variant="text"
      style={{ color: '#1E3452', textTransform: 'none'}}
      size="large"
      endIcon={<ChevronRightIcon />}
    >
        { label }
    </Button>
  );
}
