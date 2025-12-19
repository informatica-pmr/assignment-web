import { useCallback, useState, type ReactNode } from "react";
import { AuthContext } from "../contexts/auth.context";
import { Fetch } from "../../shared/lib/fetch";
import { useNookies } from "../../shared/contexts/nookies.context";

type AuthProviderProps = {
  children: ReactNode;
};

const fetch = new Fetch("auth");

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { setAccessToken } = useNookies();
  const [yearId, setYearId] = useState(2025);
  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const login = useCallback(
    async (yearId: string, username: string, password: string) => {
      try {
        const { data } = await fetch.post<
          { accessToken: string; expiresIn: number },
          { yearId: number; username: string; password: string }
        >({
          yearId: Number(yearId),
          username,
          password,
        });

        if (!data) {
          return false;
        }

        const payload = data.accessToken.split(".").at(1) ?? "";

        const { sub, user, role, year } = JSON.parse(atob(payload) || "{}");
        setUserId(sub);
        setUsername(user);
        setRole(role);
        setYearId(year);

        setAccessToken(data.accessToken);

        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    },
    [setAccessToken]
  );

  return (
    <AuthContext.Provider
      value={{
        yearId,
        userId,
        username,
        role,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
