export const fetchArtist = async (artistId) => {
  try {
    const response = await fetch(
      `https://pnyxbackend-pnyx-team.vercel.app/artists/${artistId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch artist data");
    }
    const artistData = await response.json();
    return artistData;
  } catch (error) {
    console.error("Error fetching artist:", error);
  }
};
