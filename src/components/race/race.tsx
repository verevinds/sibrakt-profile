import { SyntheticEvent, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { DateTime } from "luxon";
import cn from "classnames";
import debounce from "lodash.debounce";

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
import RaceListAdmin from "../race-list-admin";

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
  } = useForm<RaceRequest>();
  const { mutate: getNameByPhone } = useNameByPhone();
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

  const debounceGetNameByPhone = debounce(async (phone: string) => {
    await getNameByPhone(phone, {
      onSuccess: (value: any) => {
        Object.keys(value).forEach((key) => {
          setValue(
            key as keyof Pick<RaceRequest, "firstName" | "lastName">,
            value[key]
          );
        });
      },
    });
    return;
  }, 1000);

  const handlePhoneChange = async (even: SyntheticEvent<HTMLInputElement>) => {
    if (even.currentTarget.value) {
      debounceGetNameByPhone(even.currentTarget.value);
    }

    phone.onChange(even);
  };

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
                onChange={handlePhoneChange}
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
        <RaceListAdmin races={races} />
      </section>
    </>
  );
};

export default Race;
