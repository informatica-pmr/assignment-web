import { useRef } from 'react';
import { Table, type TableElement } from '../../shared/components/table.component';
import { useTitles } from '../contexts/titles.context';
import { usePages } from '../../shared/contexts/pages.context';
import { TitlesCreatePage } from '../pages/titles-create.page';
import { TitlesUpdatePage } from '../pages/titles-update.page';
import { useAuth } from '../../auth/contexts/auth.context';
import { useTitlesOrderBy } from '../contexts/titles-order-by.context';

export const TitlesTable = () => {
  const { yearId } = useAuth();
  const { titles, deleteTitle, importTitles, findManyTitles } = useTitles();
  const { description, changeDescription } = useTitlesOrderBy();
  const { changePage } = usePages();

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
      createHandle={() => changePage(<TitlesCreatePage />)}
      editHandle={() =>
        changePage(<TitlesUpdatePage id={tableRef.current?.getSelectedRow() ?? ''} />)
      }
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
