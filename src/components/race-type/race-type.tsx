import { useForm } from "react-hook-form";

import MESSAGES from "./race-type.messages";

import Button from "src/components/button";
import FormControl from "src/components/form-control";
import TextInput from "src/components/text-input";

import styles from "./race-type.module.css";
import { useRaceTypeView } from "src/hooks/api/useRaceTypeView";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useRaceTypeAdd } from "src/hooks/api/useRaceTypeAdd";

type RaceType = {
  name: string;
};
const RaceType = (): JSX.Element => {
  const { mutate } = useRaceTypeAdd();
  const { data, refetch } = useRaceTypeView();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RaceType>();

  const name = register("name", { required: MESSAGES.nameRequired });

  const onSumbit = handleSubmit(async (value) => {
    mutate(value, {
      onSuccess: () => {
        refetch();
      },
    });
  });

  return (
    <>
      <h1 className={styles["RaceType__title"]}>{MESSAGES.titlePage}</h1>

      <section className={styles["RaceType__block"]}>
        <h2>{MESSAGES.raceTypeTitle}</h2>
        <form onSubmit={onSumbit} className={styles["RaceType__form"]}>
          <FormControl error={errors.name?.message} label={MESSAGES.nameLabel}>
            <TextInput
              {...name}
              error={Boolean(errors.name)}
              placeholder={MESSAGES.namePlaceholder}
            />
          </FormControl>
          <Button>{MESSAGES.addButtonText}</Button>
        </form>
      </section>

      <section className={styles["RaceType__raceTypeList"]}>
        <h4>{MESSAGES.raceTypeSubTitle}</h4>
        <ListGroup variant="flush">
          {data?.map((raceType) => (
            <ListGroupItem key={raceType.id}>{raceType.name}</ListGroupItem>
          ))}
        </ListGroup>
      </section>
    </>
  );
};

export default RaceType;
