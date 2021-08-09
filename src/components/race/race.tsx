import { useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { DateTime } from "luxon";
import cn from "classnames";

import MESSAGES from "./race.messages";

import Button from "src/components/button";
import FormControl from "src/components/form-control";
import TextInput from "src/components/text-input";
import Section from "src/components/section/section";
import Title from "src/components/title";
import { Select } from "src/components/select";
import TextInputPhone from "src/components/text-input-phone";
import Tabs from "src/components/tabs";
import Popup from "src/components/popup";

import { useRaceTypeView } from "src/hooks/api/useRaceTypeView";
import { useNameByPhone } from "src/hooks/api/useNameByPhone";
import { useRace } from "src/hooks/api/useRace";
import { useRaceView } from "src/hooks/api/useRaceView";
import { useQueryParamenter } from "src/hooks/useQueryParamenter";

import type { RaceRequest } from "src/types/race";

import styles from "./race.module.css";

type WithSelectValue = Omit<RaceRequest, "raceTypeId"> & {
  raceTypeId: { value: string; label: string };
};
const Race = (): JSX.Element => {
  const { changeQueryParameter, query } = useQueryParamenter();
  const { mutate, isLoading } = useRace();
  const { data: races, refetch } = useRaceView();
  const { data: raceTypesData } = useRaceTypeView();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    control,
    watch,
  } = useForm<RaceRequest>();
  const { data, mutate: getNameByPhone } = useNameByPhone();
  const phone = register("phone", {
    required: MESSAGES.phoneRequired,
    maxLength: 10,
  });
  const time = register("time", { required: MESSAGES.timeRequired });
  const firstName = register("firstName");
  const lastName = register("lastName");

  const onSubmit = handleSubmit(async (value) => {
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
  const handleRaceType = (id: string) => () => {
    changeQueryParameter({ raceType: id });
  };
  const phoneWatches = watch().phone;

  useEffect(() => {
    getNameByPhone(phoneWatches, {
      onSuccess: (value) => {
        Object.keys(value).forEach((key) => {
          setValue(
            key as keyof Pick<RaceRequest, "firstName" | "lastName">,
            value[key]
          );
        });
      },
    });
  }, [phoneWatches]);

  return (
    <>
      <Title>{MESSAGES.titlePage}</Title>

      <Section>
        <h2>{MESSAGES.raceTitle}</h2>
        <form onSubmit={onSubmit}>
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
            {MESSAGES.submit}
          </Button>
        </form>
      </Section>

      <section>
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
        {races?.map((race) => (
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
              {race?.raceTypeId?.name ?? "-"}
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
