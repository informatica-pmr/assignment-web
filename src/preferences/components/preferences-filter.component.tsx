import { useEffect } from "react";
import { InputText } from "../../shared/components/input-text.component";
import { Row } from "../../shared/components/row";
import { usePreferencesFilters } from "../contexts/preferences-filters.context";
import { usePreferences } from "../contexts/preferences.context";

export const PreferencesFilter = () => {
  const {
    name,
    changeName,
  } = usePreferencesFilters();
  const { findManyPreferences } = usePreferences();

  useEffect(() => {
    findManyPreferences();
  }, [findManyPreferences, name]);

  return (
    <>
      <Row>
        <InputText
          col={12}
          label="nome"
          value={name}
          setValue={changeName}
        />
      </Row>
    </>
  );
};
