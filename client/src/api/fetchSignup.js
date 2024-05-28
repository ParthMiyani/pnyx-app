export const fetchSignup = async (email, artist_id) => {
  try {
    const response = await fetch(
      "https://pnyxbackend-pnyx-team.vercel.app/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // TODO: Find out what artist_id doing here with user email.
        body: JSON.stringify({ email, artist_id: artist_id }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send email");
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
