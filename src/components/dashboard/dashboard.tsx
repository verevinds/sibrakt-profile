import MESSAGES from "./dashboard.messages";

import Title from "src/components/title";
import Section from "src/components/section";
import { useRaceTodayView } from "src/hooks/api/useRaceTodayView";
import WalletCard, { WalletCardMarkText, WalletCardMomentous } from "../card";
import WalletCardHeader from "../card/wallet-card-header";
import WalletCardBody from "../card/wallet-card-body";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRaceView } from "src/hooks/api/useRaceView";
import { useRaceTypeView } from "src/hooks/api/useRaceTypeView";
import { useMemo } from "react";
import { RaceData } from "src/types/race";

const Dashboard = () => {
  const { data: racesToday } = useRaceTodayView();
  const { data: races } = useRaceView();
  const { data: raceTypes } = useRaceTypeView();

  function countRacerbyRaceType(racesData: RaceData[] | undefined) {
    const countRacerTodayFromType: { [key: string]: number } = {};
    racesData?.forEach((race) => {
      if (!race?.raceTypeId?._id){
        return
      }
        if (!countRacerTodayFromType[race.raceTypeId._id]) {
          countRacerTodayFromType[race.raceTypeId._id] = 0;
        }
      countRacerTodayFromType[race.raceTypeId._id]++;
    });
    return countRacerTodayFromType;
  }

  const racersTodayByRaceType = useMemo(
    () => countRacerbyRaceType(racesToday),
    [racesToday]
  );

  const racersByRaceType = useMemo(() => countRacerbyRaceType(races), [races]);

  return (
    <>
      <Title>{MESSAGES.pageTitle}</Title>
      <Section>
        <WalletCard>
          <WalletCardHeader>{MESSAGES.todayTitle}</WalletCardHeader>
          <WalletCardBody>
            <WalletCardMomentous subText={"гонщика"}>
              {racesToday?.length}
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
              {races?.length}
            </WalletCardMomentous>
            {raceTypes?.map((raceType) => (
              <WalletCardMarkText icon={<FontAwesomeIcon icon={faCheck} />}>
                {`${racersByRaceType[raceType._id] ?? 0} ${raceType.name}`}
              </WalletCardMarkText>
            ))}
          </WalletCardBody>
        </WalletCard>
      </Section>
    </>
  );
};

export default Dashboard;
