export const fetchSongRecommend = async (finalArtist) => {
  try {
    const response = await fetch(
      "https://pnyxbackend-pnyx-team.vercel.app/recommend",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-finalArtist": JSON.stringify(finalArtist),
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch song recommendations");
    }
    const songRecommendations = await response.json();
    console.log(songRecommendations);
    return songRecommendations;
  } catch (error) {
    console.error("Error fetching song recommendations:", error);
  }
};
