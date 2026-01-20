import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useTitles } from '../contexts/titles.context';
import { useAuth } from '../../auth/contexts/auth.context';
import { useTitlesOrderBy } from '../contexts/titles-order-by.context';
import { useNavigate } from 'react-router';

export const TitlesTable = () => {
  const { yearId } = useAuth();
  const { titles, deleteTitle, importTitles, findManyTitles } = useTitles();
  const { description, changeDescription } = useTitlesOrderBy();
  const navigate = useNavigate();

  const tableRef = useRef<TableElement>(null);

  return (
    <Table
      ref={tableRef}
      headers={[{ id: 1, value: 'descrição', sort: description, changeSort: changeDescription }]}
      rows={titles.map((x) => ({
        id: x.titleId,
        checked: false,
        cols: [{ id: `description_${x.description}`, value: x.description }],
      }))}
      createHandle={() => navigate('/titles/create')}
      editHandle={() => navigate(`/titles/${tableRef.current?.getSelectedRow() ?? ''}`)}
      deleteHandle={async () => {
        const anwser = confirm('deseja remover este título?');
        if (anwser) {
          const id = tableRef.current?.getSelectedRow() ?? '';
          const deleted = await deleteTitle(id);
          if (deleted) {
            await findManyTitles();
          }
        }
      }}
      importHandle={async () => {
        const anwser = confirm('deseja importar os títulos do ano anterior?');
        if (anwser) {
          const imported = await importTitles({ yearId });
          if (imported) {
            await findManyTitles();
          }
        }
      }}
    />
  );
};
