import MESSAGES from "./dashboard.messages";

import Title from "src/components/title";
import Section from "src/components/section";

const Dashboard = () => {
  return (
    <>
      <Title>{MESSAGES.pageTitle}</Title>
      <Section></Section>
    </>
  );
};

export default Dashboard;
