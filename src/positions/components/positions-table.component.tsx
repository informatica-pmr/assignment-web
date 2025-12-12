import { useRef } from "react";
import {
  Table,
  type TableElement,
} from "../../shared/components/table.component";
import { usePositions } from "../contexts/positions.context";
import { usePages } from "../../shared/contexts/pages.context";
import { PositionsCreatePage } from "../pages/positions-create.page";
import { PositionsUpdatePage } from "../pages/positions-update.page";

export const PositionsTable = () => {
  const { positions, deletePosition, findManyPositions } = usePositions();
  const { changePage } = usePages();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[
        { id: 1, value: "nome" },
        { id: 2, value: "ativo" },
      ]}
      rows={positions.map((x) => ({
        id: x.positionId,
        checked: false,
        cols: [
          { id: `${x.positionId}_${x.name}`, value: x.name },
          { id: `${x.positionId}_${x.active}`, value: x.active === 'S' ? 'sim' : 'não' },
        ],
      }))}
      createHandle={() => changePage(<PositionsCreatePage />)}
      editHandle={() =>
        changePage(
          <PositionsUpdatePage id={tableRef.current?.getSelectedRow() ?? ""} />
        )
      }
      deleteHandle={async () => {
        const anwser = confirm("deseja remover este cargo?");
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? "";
          const deleted = await deletePosition(id);
          if (deleted) {
            await findManyPositions();
          }
        }
      }}
    />
  );
};
