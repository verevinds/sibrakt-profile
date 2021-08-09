import { Controller, useForm } from "react-hook-form";

import MESSAGES from "./race.messages";

import Button from "src/components/button";
import FormControl from "src/components/form-control";
import TextInput from "src/components/text-input";

import styles from "./race.module.css";
import { useRaceTypeView } from "src/hooks/api/useRaceTypeView";
import { Card, ListGroup, Nav } from "react-bootstrap";
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
import raceType from "src/pages/api/race-type";
import {DateTime} from 'luxon'
import cn from 'classnames'
import { useRouter } from "next/router";
import { useQueryParamenter } from "src/hooks/useQueryParamenter";

type WithSelectValue = Omit<RaceRequest, "raceTypeId"> & {
  raceTypeId: { value: string; label: string };
};
const Race = (): JSX.Element => {
  const {changeQueryParameter, query} = useQueryParamenter();
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
  const handleRaceType= (id:string)=>()=>{
    changeQueryParameter({raceType: id})
  }

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
          <Button loading={isLoading} className={styles["Race__submit"]}>
            Добавить
          </Button>
        </form>
      </Section>

      <section>
        <div className={styles["Race__tabs"]}>
          {raceTypesData?.map((raceType) => (
            <Button
              className={styles["Race__tab"]}
              isActive={query.raceType === raceType._id}
              variant="link"
              onClick={handleRaceType(raceType._id)}
              size='small'
            >
              {raceType.name}
            </Button>
          ))}
        </div>
        <div
          className={cn(
            styles["Race__listGroup"],
            styles["Race__listGroup_header"]
          )}
        >
          <span className={styles["Race__listItem"]}>Имя</span>
          <span className={styles["Race__listItem"]}>Фамилия</span>
          <span className={styles["Race__listItem"]}>Номер телефона</span>
          <span className={styles["Race__listItem"]}>Время</span>
          <span className={styles["Race__listItem"]}>Вид зачета</span>
          <span className={styles["Race__listItem"]}>Дата создания</span>
        </div>
        {races?.map((race) => (
          <div className={styles["Race__listGroup"]}>
            <span className={styles["Race__listItem"]} aria-label="Имя: ">
              {race.firstName ?? "-"}
            </span>
            <span className={styles["Race__listItem"]} aria-label="Фамилия: ">
              {race.lastName ?? "-"}
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
              {race?.raceTypeId?.name??'-'}
            </span>
            <span className={styles["Race__listItem"]} aria-label="Дата: ">
              {DateTime.fromISO(race.createdAt).toFormat("dd.MM.yy hh:mm")}
            </span>
          </div>
        ))}
      </section>
    </>
  );
};

export default Race;
