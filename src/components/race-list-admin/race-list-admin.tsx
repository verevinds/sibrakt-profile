import { useRace } from "src/hooks/api/useRace";
import { useRaceTypeView } from "src/hooks/api/useRaceTypeView";
import { useRaceView } from "src/hooks/api/useRaceView";
import Tabs from "../tabs";
import styles from "./race-list-admin.module.css";
import cn from "classnames";
import { useQueryParamenter } from "src/hooks/useQueryParamenter";
import Popup from "../popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { DateTime } from "luxon";
import MESSAGES from "./race-list-admin.messages";
import { RaceData } from "src/types/race";

type Props = {
  races?: RaceData[]
}
const RaceListAdmin = ({ races }: Props) => {
  const { changeQueryParameter, query } = useQueryParamenter();
  const { data: raceTypesData } = useRaceTypeView();

  const handleRaceType = (id: string) => () => {
    changeQueryParameter({ raceType: id });
  };

  return (
    <>
      <Tabs>
        {raceTypesData?.map((raceType) => (
          <Tabs.Tab
            isActive={query.raceType === raceType._id}
            onClick={handleRaceType(raceType._id)}
          >
            {raceType.name}
          </Tabs.Tab>
        ))}
      </Tabs>
      <div
        className={cn(
          styles["Race__listGroup"],
          styles["Race__listGroup_header"]
        )}
      >
        <span></span>
        <span className={styles["Race__listItem"]}>Имя</span>
        <span className={styles["Race__listItem"]}>Фамилия</span>
        <span className={styles["Race__listItem"]}>Номер телефона</span>
        <span className={styles["Race__listItem"]}>Время</span>
        <span className={styles["Race__listItem"]}>Вид зачета</span>
        <span className={styles["Race__listItem"]}>Дата создания</span>
      </div>
      {races?.map((race) => {
        const firstName = race.firstName || race.userLink?.firstName;
        const lastName = race.lastName || race.userLink?.lastName;
        return (
          <div className={cn(styles["Race__listGroup"])}>
            <span
              className={cn(
                styles["Race__listItem"],
                styles["Race__listItem_withTag"]
              )}
            >
              {race.raceTypeId.archive && (
                <Popup hits={MESSAGES.archiveHits}>
                  <FontAwesomeIcon icon={faBox} color={"red"} />
                </Popup>
              )}
            </span>
            <span className={styles["Race__listItem"]} aria-label="Имя: ">
              {firstName ?? "-"}
            </span>
            <span className={styles["Race__listItem"]} aria-label="Фамилия: ">
              {lastName ?? "-"}
            </span>
            <span
              className={styles["Race__listItem"]}
              aria-label="Номер тел.: "
            >
              {race.phone}
            </span>
            <span className={styles["Race__listItem"]} aria-label="Время: ">
              {race.time}
            </span>
            <span
              className={styles["Race__listItem"]}
              aria-label="Вид заезда: "
            >
              {race?.raceTypeId?.name ?? "-"}
            </span>
            <span className={styles["Race__listItem"]} aria-label="Дата: ">
              {DateTime.fromISO(race.createdAt).toFormat("dd.MM.yy hh:mm")}
            </span>
          </div>
        );
      })}
    </>
  );
};

export default RaceListAdmin;
