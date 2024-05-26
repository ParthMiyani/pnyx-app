export const fetchArtistSuggestion = async (query) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/artist-suggested", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Query": JSON.stringify(query),
      },
    });
    if (!response.ok) {
      throw new Error(" Failed to fetch artist suggestions  ");
    }
    const artists = await response.json();
    return artists;
  } catch (error) {
    console.error("Error fetching artist suggestions:", error);
  }
};
