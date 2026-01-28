import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { usePreferences } from '../contexts/preferences.context';
import { usePreferencesOrderBy } from '../contexts/preferences-order-by.context';
import { useNavigate } from '../../shared/contexts/navigate.context';

export const PreferencesTable = () => {
  const { preferences, deletePreference, findManyPreferences } = usePreferences();
  const { name, changeName } = usePreferencesOrderBy();
  const navigate = useNavigate();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[{ id: 1, value: 'Nome', sort: name, changeSort: changeName }]}
      rows={preferences.map((x) => ({
        id: x.preferenceId,
        checked: false,
        cols: [{ id: `${x.preferenceId}_${x.name}`, value: x.name }],
      }))}
      createHandle={() => navigate('/preferences/create')}
      editHandle={() => navigate(`/preferences/${tableRef.current?.getSelectedRow() ?? ''}`)}
      deleteHandle={async () => {
        const anwser = confirm('deseja remover esta preferência?');
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? '';
          const deleted = await deletePreference(id);
          if (deleted) {
            await findManyPreferences();
          }
        }
      }}
    />
  );
};
