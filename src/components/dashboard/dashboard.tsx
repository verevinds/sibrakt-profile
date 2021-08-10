import MESSAGES from "./dashboard.messages";

import Title from "src/components/title";
import Section from "src/components/section";
import { useRaceTodayView } from "src/hooks/api/useRaceTodayView";
import WalletCard, { WalletCardMarkText, WalletCardMomentous } from "../card";
import WalletCardHeader from "../card/wallet-card-header";
import WalletCardBody from "../card/wallet-card-body";
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
    console.log(racesData);
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
        <WalletCard>
          <WalletCardHeader>{MESSAGES.todayTitle}</WalletCardHeader>
          <WalletCardBody>
            <WalletCardMomentous subText={"гонщика"}>
              {racesTodayDashboard?.length}
            </WalletCardMomentous>
            {raceTypes?.map((raceType) => (
              <WalletCardMarkText icon={<FontAwesomeIcon icon={faCheck} />}>
                {`${racersTodayByRaceType[raceType._id] ?? 0} ${raceType.name}`}
              </WalletCardMarkText>
            ))}
          </WalletCardBody>
        </WalletCard>

        <WalletCard>
          <WalletCardHeader>{MESSAGES.totalTitle}</WalletCardHeader>
          <WalletCardBody>
            <WalletCardMomentous subText={"гонщика"}>
              {racesDashboard?.length}
            </WalletCardMomentous>
            {raceTypes?.map((raceType) => (
              <WalletCardMarkText icon={<FontAwesomeIcon icon={faCheck} />}>
                {`${racersByRaceType[raceType._id] ?? 0} ${raceType.name}`}
              </WalletCardMarkText>
            ))}
          </WalletCardBody>
        </WalletCard>
      </Section>

      <Section fullSize>
        <h4 className={styles["Dashboard__subTitle"]}>Заезды за сегодня</h4>
        <RaceListAdmin races={racesToday} />
      </Section>
    </>
  );
};

export default Dashboard;
