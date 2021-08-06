import MESSAGES from "./dashboard.messages";

import Title from "src/components/title";
import Section from "src/components/section";
import { useRaceTodayView } from "src/hooks/api/useRaceTodayView";
import WalletCard, { WalletCardMarkText, WalletCardMomentous } from "../card";
import WalletCardHeader from "../card/wallet-card-header";
import WalletCardBody from "../card/wallet-card-body";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const {data: races} = useRaceTodayView();
  return (
    <>
      <Title>{MESSAGES.pageTitle}</Title>
      <Section>
        <WalletCard>
          <WalletCardHeader>Всего за сегодня</WalletCardHeader>
          <WalletCardBody>
            <WalletCardMomentous subText={"гонщика"}>
              {races?.length}
            </WalletCardMomentous>
            <WalletCardMarkText icon={<FontAwesomeIcon icon={faCheck} />}>
              {`${3} мужчин`}
            </WalletCardMarkText>
            <WalletCardMarkText icon={<FontAwesomeIcon icon={faCheck} />}>
              {`${2} девушек`}
            </WalletCardMarkText>
            <WalletCardMarkText icon={<FontAwesomeIcon icon={faCheck} />}>
              {`${0} детей`}
            </WalletCardMarkText>
          </WalletCardBody>
        </WalletCard>
      </Section>
    </>
  );
};

export default Dashboard;
