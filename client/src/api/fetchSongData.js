export const fetchSongData = async (songs) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/get-song-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "song-title": songs }),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch song data");
    }
    const songUrls = await response.json();
    console.log(songUrls);
    return songUrls;
  } catch (error) {
    console.error("Error fetching song data:", error);
  }
};
