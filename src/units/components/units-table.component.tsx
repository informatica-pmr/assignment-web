import { useRef } from "react";
import {
  Table,
  type TableElement,
} from "../../shared/components/table.component";
import { useUnits } from "../contexts/units.context";
import { usePages } from "../../shared/contexts/pages.context";
import { UnitsCreatePage } from "../pages/units-create.page";
import { UnitsUpdatePage } from "../pages/units-update.page";

export const UnitsTable = () => {
  const { units, deleteUnit, findManyUnits } = useUnits();
  const { changePage } = usePages();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[
        { id: 1, value: "nome" },
      ]}
      rows={units.map((x) => ({
        id: x.unitId,
        checked: false,
        cols: [
          { id: `${x.unitId}_${x.name}`, value: x.name },
        ],
      }))}
      createHandle={() => changePage(<UnitsCreatePage />)}
      editHandle={() =>
        changePage(
          <UnitsUpdatePage id={tableRef.current?.getSelectedRow() ?? ""} />
        )
      }
      deleteHandle={async () => {
        const anwser = confirm("deseja remover esta unidade?");
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? "";
          const deleted = await deleteUnit(id);
          if (deleted) {
            await findManyUnits();
          }
        }
      }}
    />
  );
};
