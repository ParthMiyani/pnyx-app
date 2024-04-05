import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: '20px', // Adjust the value for roundness
        '& fieldset': {
          borderColor: '#7B75A1', // Outline color
        },
        '&:hover fieldset': {
          borderColor: '#7B75A1', // Hover outline color
        },
        '&.Mui-focused fieldset': {
          borderColor: '#7B75A1', // Focused outline color
        },
      },
      '& .MuiInputLabel-root': {
        color: '#7B75A1', // Label color
      },
      '& .MuiInputBase-input': {
        color: '#7B75A1', // Input text color
      },
      '& .MuiOutlinedInput-placeholder': {
        color: '#7B75A1', // Placeholder text color
      },
    });

    // Hard code artist list for now
    const artistList = [
        "Come Through (feat. Ari G)", "Crazy", "Desperate",
        "diversion", "Don't Be A Stranger", "Faceless",
        "Haunted House", "Illusion (feat. Crunr)", "Let You Go",
        "LONG NIGHT", "Maria (ft. Blooom & Ghost'n'Ghost)", "Omen",
        "On & On (feat. Daniel Levi)", "Push The Gas", "Ruined My Life",
        "Run & Hide", "SKY BRI", "Sleeping Till Noon",
        "Somebody Like Me (feat. Halvorsen)", "Spotlight (feat. AWA)"
      ];

const Searchbar = ( {setSelectedArtist } ) => {
  const [searchText, setSearchText] = useState('');


  const handleInputChange = (event, value) => {
    setSearchText(value || ''); // Set the search text to the selected value or an empty string
  };

  const handleArtistSelect = (event, value) => {
    setSelectedArtist(value); // Set the selected artist when user selects an option
    console.log("Selected song:", value); // Print the selected artist
  };

  return (
    <Autocomplete
      options={artistList}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          variant="outlined"
          placeholder="Search Songs ..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon style={{ color: '#7B75A1' }} />
              </InputAdornment>
            ),
          }}
        />
      )}
      PaperComponent={({ children }) => (
        <div style={{ 
          maxHeight: '200px', 
          overflowY: 'auto', 
          marginTop: '0px', 
          backgroundColor:'white', 
        }}>
          {children}
        </div>
      )}
      style={{ width: '350px' }}
      onInputChange={handleInputChange}
      onChange={handleArtistSelect} // Function to handle artist selection
      // value={selectedArtist} // Set the selected value
      freeSolo
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      blurOnSelect
      disableClearable  
      getOptionLabel={(option) => option} // Explicitly set how to get the label from the option
    />
  );
};

export default Searchbar;
