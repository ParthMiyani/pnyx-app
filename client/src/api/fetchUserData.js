export const fetchUserData = async (userID) => {
  try {
    const response = await fetch(
      `https://pnyxbackend-pnyx-team.vercel.app/users/${userID}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const userData = await response.json();
    console.log("userData", userData);
    return userData;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};
