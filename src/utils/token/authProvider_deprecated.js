import { REFRESH_TOKEN } from "constract/utilis";
import { createAuthProvider } from "react-token-auth";
import config from "../../config";
export const { useAuth, authFetch, login, logout } = createAuthProvider({
  getAccessToken: (session) => session.accessToken,
  storage: localStorage,
  onUpdateToken: () =>
    fetch(`${config.api}/${config.renewAccess}`, {
      method: "POST",
      body: {
        body: JSON.stringify({
          refreshToken: localStorage.getItem(REFRESH_TOKEN),
        }),
      },
    }).then((r) => r.json()),
});
