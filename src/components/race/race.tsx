import { Controller, useForm } from "react-hook-form";

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
import { Select } from "../select";
import { useMemo } from "react";
import TextInputPhone from "../text-input-phone";
import { useRace } from "src/hooks/api/useRace";
import { useRaceView } from "src/hooks/api/useRaceView";

type WithSelectValue = Omit<RaceRequest, "raceTypeId"> & {
  raceTypeId: { value: string; label: string };
};
const Race = (): JSX.Element => {
  const { mutate, isLoading } = useRace();
  const { data: races, refetch } = useRaceView();
  const { data: raceTypesData } = useRaceTypeView();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm<RaceRequest>();
  const phone = register("phone", {
    required: MESSAGES.phoneRequired,
    maxLength: 10,
  });
  const time = register("time", { required: MESSAGES.timeRequired });
  const firstName = register("firstName");
  const lastName = register("lastName");

  const onSumbit = handleSubmit(async (value) => {
    const valueWithSelectValue = value as unknown as WithSelectValue;

    const payload = {
      ...value,
      raceTypeId: valueWithSelectValue.raceTypeId.value,
    };
    mutate(
      { payload },
      {
        onSuccess: () => {
          refetch();
          reset();
        },
      }
    );
  });

  const raceTypes = useMemo(
    () =>
      raceTypesData?.map((raceType) => ({
        label: raceType.name,
        value: raceType._id,
      })),
    [raceTypesData]
  );

  return (
    <>
      <Title>{MESSAGES.titlePage}</Title>

      <Section>
        <h2>{MESSAGES.raceTitle}</h2>
        <form onSubmit={onSumbit}>
          <div className={styles["Race__form"]}>
            <FormControl
              label={MESSAGES.firstNameLabel}
              containerClassName={styles["Race__formItem"]}
            >
              <TextInput
                {...firstName}
                placeholder={MESSAGES.firstNamePlaceholder}
                maxLength={10}
              />
            </FormControl>
            <FormControl
              label={MESSAGES.lastNameLabel}
              containerClassName={styles["Race__formItem"]}
            >
              <TextInput
                {...lastName}
                placeholder={MESSAGES.lastNamePlaceholder}
                maxLength={10}
              />
            </FormControl>
            <FormControl
              label={MESSAGES.phoneLabel}
              containerClassName={styles["Race__formItem"]}
              error={errors.phone?.message}
            >
              <TextInputPhone
                {...phone}
                placeholder={MESSAGES.phonePlaceholder}
                maxLength={10}
                error={Boolean(errors.phone)}
              />
            </FormControl>
            <FormControl
              label={MESSAGES.timeLabel}
              containerClassName={styles["Race__formItem"]}
              error={errors.time?.message}
            >
              <TextInput
                {...time}
                type="number"
                step="any"
                placeholder={MESSAGES.timePlaceholder}
                error={Boolean(errors.time)}
              />
            </FormControl>
            <FormControl
              label={MESSAGES.raceTypeLabel}
              containerClassName={styles["Race__formItem"]}
              error={errors.raceTypeId?.message}
            >
              <Controller
                control={control}
                name="raceTypeId"
                rules={{ required: MESSAGES.raceTypeRequired }}
                render={({ field: { onChange } }) => (
                  <Select
                    className={styles["Race__formSelect"]}
                    placeholder={MESSAGES.raceTypePlaceholder}
                    options={raceTypes}
                    onChange={onChange}
                    error={errors.time?.message}
                  />
                )}
              />
            </FormControl>
          </div>
          <Button loading={isLoading} className={styles['Race__submit']}>Добавить</Button>
        </form>
      </Section>

      <section>
        <ListGroup>
          {races?.map((race) => (
            <ListGroupItem className={styles['Race__listItem']}>
              {race.firstName} {race.lastName} {race.phone} {race.time} {race.raceTypeId.name} {race.createdAt}
            </ListGroupItem>
          ))}
        </ListGroup>
      </section>
    </>
  );
};

export default Race;
