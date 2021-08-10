import Section from "src/components/section";
import Title from "src/components/title";
import { useMeRaceView } from "src/hooks/api/useMeRaceView";
import MESSAGES from "./profile-dashboard.messages";
import Card, { CardMarkText, CardMomentous } from "src/components/card";
import CardHeader from "src/components/card/card-header";
import CardBody from "src/components/card/card-body";
import { DateTime } from "luxon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faClock } from "@fortawesome/free-solid-svg-icons";
import styles from "./profile-dashboard.module.css";
import { useDashdoard } from "src/hooks/api/useDashdoard";
import { useMeProfile } from "src/hooks/api/useMeProfile";
import { useMeRaceTodayView } from "src/hooks/api/useMeRaceTodayView";

const ProfileDashboard = () => {
  const { data: meProfile } = useMeProfile();
  const { data: raceMe } = useMeRaceView();
  const { data: raceMeToday } = useMeRaceTodayView();
  return (
    <>
      <Title>{MESSAGES.pageTitle}</Title>
      <Section>
        <Card>
          <CardHeader>Общая статистика</CardHeader>
          <CardBody>
            <CardMomentous subText="заездов за всё время">
              {meProfile?.countRace ?? 0}
            </CardMomentous>

            <CardMomentous subText="заездов за сегодня">
              {meProfile?.countRaceToday ?? 0}
            </CardMomentous>

            <CardMomentous subText="призовых очков">
              {meProfile?.score}
            </CardMomentous>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Мои заезды</CardHeader>
          <CardBody>
            {raceMe?.map((race) => (
              <CardMarkText icon={<FontAwesomeIcon icon={faClock} />}>
                {`${race.time.toFixed(2)} мин. `}
                <small>
                  {`(${DateTime.fromISO(race.createdAt).toFormat(
                    "dd.MM.yy hh:mm"
                  )} `}
                  <FontAwesomeIcon icon={faCalendarDay} /> {")"}
                </small>
              </CardMarkText>
            ))}
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Мои заезды за сегодня</CardHeader>
          <CardBody>
            {raceMeToday?.map((race) => (
              <CardMarkText icon={<FontAwesomeIcon icon={faClock} />}>
                {`${race.time.toFixed(2)} мин. `}
                <small>
                  {`(${DateTime.fromISO(race.createdAt).toFormat(
                    "hh:mm"
                  )} `}
                  <FontAwesomeIcon icon={faCalendarDay} /> {")"}
                </small>
              </CardMarkText>
            ))}
          </CardBody>
        </Card>
      </Section>
    </>
  );
};

export default ProfileDashboard;
