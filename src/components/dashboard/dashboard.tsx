import MESSAGES from "./dashboard.messages";

import Title from "src/components/title";
import Section from "src/components/section";
import { useRaceTodayView } from "src/hooks/api/useRaceTodayView";
import Card, { CardMarkText, CardMomentous } from "../card";
import CardHeader from "../card/card-header";
import CardBody from "../card/card-body";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRaceTypeView } from "src/hooks/api/useRaceTypeView";
import { useMemo } from "react";
import { RaceData } from "src/types/race";
import RaceListAdmin from "../race-list-admin";
import { useDashdoard } from "src/hooks/api/useDashdoard";

import styles from "./dashboard.module.css";

const Dashboard = () => {
  const { data: racesToday } = useRaceTodayView();
  const { races: racesDashboard, racesToday: racesTodayDashboard } =
    useDashdoard();
  const { data: raceTypes } = useRaceTypeView();

  function countRacerbyRaceType(racesData: RaceData[] | undefined) {
    const countRacerTodayFromType: { [key: string]: number } = {};
    racesData?.forEach((race) => {
      if (!race?.raceTypeId?._id) {
        return;
      }
      if (!countRacerTodayFromType[race.raceTypeId._id]) {
        countRacerTodayFromType[race.raceTypeId._id] = 0;
      }
      countRacerTodayFromType[race.raceTypeId._id]++;
    });
    return countRacerTodayFromType;
  }

  const racersTodayByRaceType = useMemo(
    () => countRacerbyRaceType(racesTodayDashboard),
    [racesTodayDashboard]
  );

  const racersByRaceType = useMemo(
    () => countRacerbyRaceType(racesDashboard),
    [racesDashboard]
  );

  return (
    <>
      <Title>{MESSAGES.pageTitle}</Title>
      <Section>
        <Card>
          <CardHeader>{MESSAGES.todayTitle}</CardHeader>
          <CardBody>
            <CardMomentous subText={"гонщика"}>
              {racesTodayDashboard?.length}
            </CardMomentous>
            {raceTypes?.map((raceType) => (
              <CardMarkText icon={<FontAwesomeIcon icon={faCheck} />}>
                {`${racersTodayByRaceType[raceType._id] ?? 0} ${raceType.name}`}
              </CardMarkText>
            ))}
          </CardBody>
        </Card>

        <Card>
          <CardHeader>{MESSAGES.totalTitle}</CardHeader>
          <CardBody>
            <CardMomentous subText={"гонщика"}>
              {racesDashboard?.length}
            </CardMomentous>
            {raceTypes?.map((raceType) => (
              <CardMarkText icon={<FontAwesomeIcon icon={faCheck} />}>
                {`${racersByRaceType[raceType._id] ?? 0} ${raceType.name}`}
              </CardMarkText>
            ))}
          </CardBody>
        </Card>
      </Section>

      <Section fullSize>
        <h4 className={styles["Dashboard__subTitle"]}>Заезды за сегодня</h4>
        <RaceListAdmin races={racesToday} />
      </Section>
    </>
  );
};

export default Dashboard;
