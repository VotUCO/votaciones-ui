import axios from "axios";

export async function refreshToken(refreshToken, accessToken, back_url) {
  try {
    console.log(refreshToken);
    const response = await axios.post(
      `${back_url}/api/v1/user/token/refresh/`,
      {
        refresh: refreshToken,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data.refreshToken;
  } catch (error) {
    return null;
  }
}
