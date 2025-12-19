import { useRef } from "react";
import {
  Table,
  type TableElement,
} from "../../shared/components/table.component";
import { useTitles } from "../contexts/titles.context";
import { usePages } from "../../shared/contexts/pages.context";
import { TitlesCreatePage } from "../pages/titles-create.page";
import { TitlesUpdatePage } from "../pages/titles-update.page";

export const TitlesTable = () => {
  const { titles, deleteTitle, findManyTitles } = useTitles();
  const { changePage } = usePages();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[
        { id: 1, value: "descrição" },
      ]}
      rows={titles.map((x) => ({
        id: x.titleId,
        checked: false,
        cols: [
          { id: `description_${x.description}`, value: x.description },
        ],
      }))}
      createHandle={() => changePage(<TitlesCreatePage />)}
      editHandle={() =>
        changePage(
          <TitlesUpdatePage id={tableRef.current?.getSelectedRow() ?? ""} />
        )
      }
      deleteHandle={async () => {
        const anwser = confirm("deseja remover este título?");
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? "";
          const deleted = await deleteTitle(id);
          if (deleted) {
            await findManyTitles();
          }
        }
      }}
    />
  );
};
