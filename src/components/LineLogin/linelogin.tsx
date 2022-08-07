import { Container } from "@nextui-org/react";
import axios from "axios";
import { RockButton } from "src/components/RockButton/rockbutton";

interface LineLogin {
  location: string;
  sessionId: string;
}

const fetchLoginUrl = async (): Promise<LineLogin> => {
  const params = {
    redirect: `${location.origin}/auth`,
  };
  const { data } = await axios.get("/api/v1/line-login/login", { params });
  return {
    location: data.location,
    sessionId: data.session_id,
  };
};

const lineLogin = async (): Promise<string | null> => {
  const { sessionId, location } = await fetchLoginUrl();
  localStorage.setItem("sessionId", sessionId);
  window.location.href = location;
  return localStorage.getItem("snsId");
};

const createUser = async (snsId: string): Promise<any> => {
  const res = await axios.post(`/api/user/create`, { snsId: snsId });
  return res.data;
};

export const LineSignup: React.FC<{
  text: string;
}> = ({ text }) => {
  return (
    <>
      <Container css={{ margin: "10px" }}>
        <RockButton
          text={text}
          onClick={async () => {
            const snsId = await lineLogin();
            if (snsId) {
              await createUser(snsId);
            }
          }}
        />
      </Container>
    </>
  );
};

export const LineLogin: React.FC<{
  text: string;
}> = ({ text }) => {
  return (
    <>
      <Container css={{ margin: "10px" }}>
        <RockButton
          text={text}
          onClick={async () => {
            lineLogin();
          }}
        />
      </Container>
    </>
  );
};
