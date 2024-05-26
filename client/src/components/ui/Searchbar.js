import { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import { fetchArtistSuggestion } from "../../api/fetchArtistSuggestion";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px", // Adjust the value for roundness
    "& fieldset": {
      borderColor: "#7B75A1", // Outline color
    },
    "&:hover fieldset": {
      borderColor: "#7B75A1", // Hover outline color
    },
    "&.Mui-focused fieldset": {
      borderColor: "#7B75A1", // Focused outline color
    },
  },
  "& .MuiInputLabel-root": {
    color: "#7B75A1", // Label color
  },
  "& .MuiInputBase-input": {
    color: "#7B75A1", // Input text color
  },
  "& .MuiOutlinedInput-placeholder": {
    color: "#7B75A1", // Placeholder text color
  },
});

const Searchbar = ({ setSelectedArtist }) => {
  const [query, setQuery] = useState("");
  const [artistList, setArtistList] = useState([]);
  let artistIds = useRef([]);

  useEffect(() => {
    console.log("Query:", query);
    if (query === "") return;
    fetchArtistSuggestion(query).then((data) => {
      artistIds.current = data.map((artist) => artist.id);
      setArtistList(data.map((artist) => artist.name));
    });
  }, [query]);

  const handleInputChange = (event, value) => {
    setQuery(value || ""); // Set the search text to the selected value or an empty string
  };

  const handleArtistSelect = (event, value) => {
    artistIds.current.forEach((artistId, index) => {
      if (artistList[index] === value) {
        setSelectedArtist(artistId);
      }
    });
    console.log("Selected artist:", artistIds.current); // Print the selected artist
  };

  return (
    <Autocomplete
      options={!artistList ? [""] : artistList}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          variant="outlined"
          placeholder="Search Songs ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon style={{ color: "#7B75A1" }} />
              </InputAdornment>
            ),
          }}
        />
      )}
      PaperComponent={({ children }) => (
        <div
          style={{
            maxHeight: "200px",
            overflowY: "auto",
            marginTop: "0px",
            backgroundColor: "white",
          }}
        >
          {children}
        </div>
      )}
      style={{ width: "350px" }}
      onInputChange={handleInputChange}
      onChange={handleArtistSelect} // Function to handle artist selection
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
