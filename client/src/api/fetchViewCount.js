export const fetchViewCount = async (userID) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:5000/users/${userID}/user-song-views`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 401) {
      throw new Error(response.statusText);
    }

    if (!response.ok) {
      throw new Error("Failed to update views_left");
    }

    // Success message or additional handling
    console.log("Views_left updated successfully");
  } catch (error) {
    console.error("Error updating views_left:", error);
  }
};
