import axios from "axios";
import { RockButton } from "src/components/RockButton/rockbutton";

interface LineLogin {
  location: string
  sessionId: string
}

const fetchLoginUrl = async (): Promise<LineLogin> => {
  const {data} = await axios('/api/v1/line-login/login')
  return {
    location: data.location,
    sessionId: data.session_id,
  }
}

const lineLogin = async(): Promise<void> => {
  const { sessionId, location } = await fetchLoginUrl()
  localStorage.setItem('sessionId', sessionId)
  window.location.href = location
}


export const LineLogin: React.FC<{
  text: string;
}> = ({ text}) => {
  return (
    <>
      <RockButton
        text={text}
        onClick={async () => {
          lineLogin()
        }}
      />
    </>
  );
};
