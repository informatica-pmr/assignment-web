import { useEffect } from "react";
import { Row } from "../../shared/components/row";
import { useSubscriptionsFilters } from "../contexts/subscriptions-filters.context";
import { useSubscriptions } from "../contexts/subscriptions.context";
import { SelectTeachers } from "../../teachers/components/select-teachers.component";
import { SelectPreferences } from "../../preferences/components/select-preferences.component";

export const SubscriptionsFilter = () => {
  const {
    teacherId,
    preferenceId,
    changeTeacherId,
    changePreferenceId,
  } = useSubscriptionsFilters();
  const { findManySubscriptions } = useSubscriptions();

  useEffect(() => {
    findManySubscriptions();
  }, [findManySubscriptions, teacherId, preferenceId]);

  return (
    <>
      <Row>
        <SelectTeachers
          all
          col={8}
          teacherId={teacherId}
          setTeacherId={changeTeacherId}
        />
        <SelectPreferences
          all
          col={4}
          preferenceId={preferenceId}
          setPreferenceId={changePreferenceId}
        />
      </Row>
    </>
  );
};
