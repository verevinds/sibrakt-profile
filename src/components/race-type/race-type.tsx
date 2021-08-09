import { useForm } from "react-hook-form";
import { ListGroup, ListGroupItem, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faBoxOpen,
  faTrash,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

import MESSAGES from "./race-type.messages";

import Button from "src/components/button";
import FormControl from "src/components/form-control";
import TextInput from "src/components/text-input";
import Section from "src/components/section";
import Title from "src/components/title";

import { useRaceTypeView } from "src/hooks/api/useRaceTypeView";
import { useQueryParamenter } from "src/hooks/useQueryParamenter";
import { useRaceType } from "src/hooks/api/useRaceType";

import type { RaceTypeData } from "src/types/race";

import styles from "./race-type.module.css";
import Tabs from "../tabs";

const RaceType = (): JSX.Element => {
  const { query, changeQueryParameter } = useQueryParamenter();
  const { mutate } = useRaceType();
  const { data, refetch } = useRaceTypeView();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Pick<RaceTypeData, "name">>();

  const name = register("name", { required: MESSAGES.nameRequired });

  const onSumbit = handleSubmit(async (value) => {
    mutate(
      { payload: value },
      {
        onSuccess: () => {
          refetch();
          reset();
        },
      }
    );
  });

  const onDelete = (value: Pick<RaceTypeData, "_id" | "archive">) => () => {
    mutate(
      {
        payload: value,
        method: "put",
      },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };
  const handleArchiveView = () => {
    const isArchive = query.archive;
    if (query.archive === "false" || !query.archive) {
      changeQueryParameter({
        archive: "true",
      });

      return;
    }
    changeQueryParameter({}, "archive");
  };

  return (
    <>
      <Title>{MESSAGES.titlePage}</Title>

      <Section>
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
      </Section>

      <section className={styles["RaceType__raceTypeList"]}>
        <Tabs>
          <Tabs.Tab
            onClick={handleArchiveView}
            isActive={query.archive === "true"}
          >
            Показать архив
          </Tabs.Tab>
        </Tabs>
        <h4 className={styles["RaceType__raceTypeListTitle"]}>{MESSAGES.raceTypeSubTitle}</h4>
        <ListGroup variant="flush">
          {data?.map((raceType) => (
            <ListGroupItem
              key={raceType._id}
              className={styles["RaceType__raceTypeListItem"]}
              variant={raceType.archive ? "danger" : "light"}
            >
              <span>{raceType.name}</span>
              <Button
                variant="link"
                onClick={onDelete({
                  _id: raceType._id,
                  archive: !raceType.archive,
                })}
              >
                <FontAwesomeIcon
                  icon={raceType.archive ? faBoxOpen : faBox}
                  color={raceType.archive ? "green" : "red"}
                />
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </section>
    </>
  );
};

export default RaceType;
