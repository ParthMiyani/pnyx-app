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
        'Adele', 'Alicia Keys', 'Aretha Franklin',
        'Beyoncé', 'Bob Dylan', 'Bruno Mars',
        'Celine Dion', 'Coldplay', 'Cher',
        'David Bowie', 'Dua Lipa', 'Drake',
        'Elvis Presley', 'Ed Sheeran', 'Eminem',
        'Frank Sinatra', 'Fleetwood Mac', 'Fergie',
        'George Michael', 'Gwen Stefani', 'Green Day',
        'Hozier', 'Halsey', 'Harry Styles',
        'Imagine Dragons', 'Isaac Hayes', 'Iron Maiden',
        'Janet Jackson', 'John Lennon', 'Justin Bieber',
        'Katy Perry', 'Kanye West', 'Kendrick Lamar',
        'Lady Gaga', 'Led Zeppelin', 'Lana Del Rey',
        'Madonna', 'Michael Jackson', 'Miley Cyrus',
        'Nirvana', 'Nat King Cole', 'Nicki Minaj',
        'Oasis', 'Olivia Rodrigo', 'OutKast',
        'Paul McCartney', 'Pink Floyd', 'Prince',
        'Queen', 'Quincy Jones', 'Queen Latifah',
        'Rihanna', 'Radiohead', 'Roberta Flack',
        'Stevie Wonder', 'Shakira', 'Selena Gomez',
        'Taylor Swift', 'The Beatles', 'The Rolling Stones',
        'U2', 'Usher', 'Underworld',
        'Vince Guaraldi', 'Van Halen', 'Van Morrison',
        'Whitney Houston', 'The Weeknd', 'Weezer',
        'X Japan', 'X Ambassadors',
        'Yanni', 'Yo-Yo Ma', 'Yoko Ono',
        'Zac Brown Band', 'Zayn Malik', 'ZZ Top'
      ];

const Searchbar = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event, value) => {
    setSearchText(value || ''); // Set the search text to the selected value or an empty string
  };

  return (
    <Autocomplete
      options={artistList}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          variant="outlined"
          placeholder="Search Artists ..."
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
