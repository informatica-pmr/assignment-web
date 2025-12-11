import { useRef } from "react";
import {
  Table,
  type TableElement,
} from "../../shared/components/table.component";
import { useYears } from "../contexts/years.context";
import { usePages } from "../../shared/contexts/pages.context";
import { YearsCreatePage } from "../pages/years-create.page";
import { YearsUpdatePage } from "../pages/years-update.page";

export const YearsTable = () => {
  const { years, deleteYear } = useYears();
  const { changePage } = usePages();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[
        { id: 1, value: "ano" },
        { id: 2, value: "ficha" },
        { id: 3, value: "resolução" },
        { id: 4, value: "bloqueado" },
      ]}
      rows={years.map((x) => ({
        id: x.yearId,
        checked: false,
        cols: [
          { id: `${x.yearId}_${x.yearId}`, value: x.yearId.toString() },
          { id: `${x.yearId}_${x.record}`, value: x.record },
          { id: `${x.yearId}_${x.resolution}`, value: x.resolution },
          { id: `${x.yearId}_${x.isBlocked}`, value: x.isBlocked },
        ],
      }))}
      createHandle={() => changePage(<YearsCreatePage />)}
      editHandle={() =>
        changePage(
          <YearsUpdatePage id={tableRef.current?.getSelectedRow() ?? ""} />
        )
      }
      deleteHandle={() => {
        const anwser = confirm("deseja remover este ano?");
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? "";
          deleteYear(id);
        }
      }}
    />
  );
};
