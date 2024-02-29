import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/system';

const StyledIconButton = styled(IconButton)({
  backgroundColor: `rgba(20,20,22, 0.2)`,
  borderRadius: '50%',
  padding: '20px', 
});

const BackButton = () => {
  const handleBack = () => {
    // Implement back button functionality here
  };

  return (
    <StyledIconButton onClick={handleBack} color="inherit">
      <ArrowBackIcon />
    </StyledIconButton>
  );
};

export default BackButton;
