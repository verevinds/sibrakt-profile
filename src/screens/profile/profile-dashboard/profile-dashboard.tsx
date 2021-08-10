import Section from "src/components/section";
import Title from "src/components/title"
import { useMeRaceView } from "src/hooks/api/useMeRaceView";
import MESSAGES from './profile-dashboard.messages';

const ProfileDashboard = () => {
  const {data: raceMe} = useMeRaceView();
  return(
    <>
    <Title>{MESSAGES.pageTitle}</Title>
    <Section>
    </Section>
    </>
  )
}

export default ProfileDashboard