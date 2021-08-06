import { useForm } from "react-hook-form";

import MESSAGES from "./race.messages";

import Button from "src/components/button";
import FormControl from "src/components/form-control";
import TextInput from "src/components/text-input";

import styles from "./race.module.css";
import { useRaceTypeView } from "src/hooks/api/useRaceTypeView";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useRaceType } from "src/hooks/api/useRaceType";
import type { RaceRequest, RaceTypeData } from "src/types/race";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Section from "../section/section";
import Title from "../title";

const Race = (): JSX.Element => {
  const { data } = useRaceTypeView();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<RaceRequest>();

  const onSumbit = handleSubmit(async (value) => {});

  return (
    <>
      <Title>{MESSAGES.titlePage}</Title>

      <Section>
        <h2>{MESSAGES.raceTitle}</h2>
        <form className={styles["Race__form"]}>
          <FormControl
            label={MESSAGES.phoneLabel}
            containerClassName={styles["Race__formItem"]}
          >
            <TextInput name="phone" placeholder={MESSAGES.phonePlaceholder} />
          </FormControl>
          <FormControl
            label={MESSAGES.timeLabel}
            containerClassName={styles["Race__formItem"]}
          >
            <TextInput
              name="time"
              type="number"
              placeholder={MESSAGES.timePlaceholder}
            />
          </FormControl>
          <FormControl
            label={MESSAGES.raceTypeLabel}
            containerClassName={styles["Race__formItem"]}
          >
            <TextInput
              name="racetype"
              placeholder={MESSAGES.phonePlaceholder}
            />
          </FormControl>
          <Button>Добавить</Button>
        </form>
      </Section>
    </>
  );
};

export default Race;
