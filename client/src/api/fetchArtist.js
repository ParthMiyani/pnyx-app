export const fetchArtist = async (artistId) => {
  try {
    const response = await fetch(`http://127.0.1.:5000/artists/${artistId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch artist data");
    }
    const artistData = await response.json();
    console.log(artistData);
    return artistData;
  } catch (error) {
    console.error("Error fetching artist:", error);
  }
};
