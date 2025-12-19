import { useEffect } from "react";
import { InputText } from "../../shared/components/input-text.component";
import { Row } from "../../shared/components/row";
import { useTitlesFilters } from "../contexts/titles-filters.context";
import { useTitles } from "../contexts/titles.context";

export const TitlesFilter = () => {
  const {
    description,
    changeDescription,
  } = useTitlesFilters();
  const { findManyTitles } = useTitles();

  useEffect(() => {
    findManyTitles();
  }, [findManyTitles, description]);

  return (
    <>
      <Row>
        <InputText
          col={12}
          label="descrição"
          value={description}
          setValue={changeDescription}
        />
      </Row>
    </>
  );
};
