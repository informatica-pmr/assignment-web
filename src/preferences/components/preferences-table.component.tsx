import { useRef } from "react";
import {
  Table,
  type TableElement,
} from "../../shared/components/table.component";
import { usePreferences } from "../contexts/preferences.context";
import { usePages } from "../../shared/contexts/pages.context";
import { PreferencesCreatePage } from "../pages/preferences-create.page";
import { PreferencesUpdatePage } from "../pages/preferences-update.page";

export const PreferencesTable = () => {
  const { preferences, deletePreference, findManyPreferences } = usePreferences();
  const { changePage } = usePages();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[
        { id: 1, value: "nome" },
      ]}
      rows={preferences.map((x) => ({
        id: x.preferenceId,
        checked: false,
        cols: [
          { id: `${x.preferenceId}_${x.name}`, value: x.name },
        ],
      }))}
      createHandle={() => changePage(<PreferencesCreatePage />)}
      editHandle={() =>
        changePage(
          <PreferencesUpdatePage id={tableRef.current?.getSelectedRow() ?? ""} />
        )
      }
      deleteHandle={async () => {
        const anwser = confirm("deseja remover esta preferência?");
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? "";
          const deleted = await deletePreference(id);
          if (deleted) {
            await findManyPreferences();
          }
        }
      }}
    />
  );
};
