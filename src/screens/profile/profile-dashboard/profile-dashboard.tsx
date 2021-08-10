import Section from "src/components/section";
import Title from "src/components/title";
import { useMeRaceView } from "src/hooks/api/useMeRaceView";
import MESSAGES from "./profile-dashboard.messages";
import Card, { CardMarkText, CardMomentous } from "src/components/card";
import CardHeader from "src/components/card/card-header";
import CardBody from "src/components/card/card-body";
import { useMeDashboard } from "src/hooks/api/useMeDashboard";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { DateTime } from "luxon";
import styles from "./profile-dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faCar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import pluralize from "pluralize-ru";

const ProfileDashboard = () => {
  const { data: raceMeDashboard } = useMeDashboard();
  const { data: raceMe } = useMeRaceView();
  return (
    <>
      <Title>{MESSAGES.pageTitle}</Title>
      <Section>
        <Card>
          <CardHeader>Общая статистика</CardHeader>
          <CardBody>
            <CardMomentous subText="заездов">
              {raceMeDashboard?.length}
            </CardMomentous>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Мои заезды</CardHeader>
          <CardBody>
            {raceMe?.map((race) => (
              <CardMarkText icon={<FontAwesomeIcon icon={faClock} />}>
                {`${race.time.toFixed(2)} мин.`}
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
      </Section>
    </>
  );
};

export default ProfileDashboard;
