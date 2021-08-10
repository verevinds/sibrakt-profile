import { useRaceTodayView } from "src/hooks/api/useRaceTodayView";

const Score = () => {
  const { data: raceToday } = useRaceTodayView();
  return (
    <>
      {raceToday?.map((race) => {
        return (
          <div>
            <span>{race.firstName}</span>
            <span>{race.lastName}</span>
            <span>{race.time}</span>
          </div>
        );
      })}
    </>
  );
};

export default Score;
