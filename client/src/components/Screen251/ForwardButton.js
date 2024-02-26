import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/system';

const StyledIconButton = styled(IconButton)({
  backgroundColor: `rgba(20,20,22, 0.20)`,
  borderRadius: '50%',
  padding: '20px', 
});

const ForwardButton = () => {
  const handleFront = () => {
    // Implement back button functionality here
  };

  return (
    <StyledIconButton onClick={handleFront} color="inherit">
      <ArrowForwardIcon />
    </StyledIconButton>
  );
};

export default ForwardButton;