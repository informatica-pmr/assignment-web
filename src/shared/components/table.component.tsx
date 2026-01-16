import { forwardRef, useImperativeHandle, useState } from 'react';
import { usePagination } from '../contexts/pagination.context';

type TableProps = {
  headers: {
    id: number;
    value: string;
    sort: string;
    changeSort: (sort: string) => void;
  }[];
  rows: {
    id: number | string;
    checked: boolean;
    cols: { id: string; value: string }[];
  }[];
  createHandle?: () => void;
  showHandle?: () => void;
  editHandle?: () => void;
  deleteHandle?: () => void;
  exportHandle?: () => void;
  importHandle?: () => void;
};

export type TableElement = {
  getSelectedRow: () => string;
};

export const Table = forwardRef<TableElement, TableProps>(
  ({ headers, rows, createHandle, editHandle, deleteHandle, exportHandle, importHandle }, ref) => {
    const { page, siblingPages, size, pagination, changePagination } = usePagination();
    const [selectedRowId, setSelectedRowId] = useState('');
    const handleSelectRow = (value: boolean, id: string) => {
      if (selectedRowId !== '' && id !== selectedRowId) {
        rows.forEach((x) => {
          x.checked = false;
        });
      }
      if (value) {
        rows.find((x) => x.id.toString() === id)!.checked = true;
        setSelectedRowId(id);
      } else {
        rows.find((x) => x.id.toString() === id)!.checked = false;
        setSelectedRowId('');
      }
    };
    useImperativeHandle(
      ref,
      () => ({
        getSelectedRow: () => selectedRowId,
      }),
      [selectedRowId],
    );
    return (
      <>
        <div className='d-flex col-sm-12 gap-2 justify-content-center'>
          {createHandle && (
            <button type='button' className='btn btn-success' onClick={createHandle}>
              novo
            </button>
          )}
          {editHandle && (
            <button
              type='button'
              className='btn btn-primary'
              disabled={selectedRowId === ''}
              onClick={editHandle}>
              editar
            </button>
          )}
          {deleteHandle && (
            <button
              type='button'
              className='btn btn-danger'
              disabled={selectedRowId === ''}
              onClick={deleteHandle}>
              deletar
            </button>
          )}
          {exportHandle && (
            <button type='button' className='btn btn-secondary' onClick={exportHandle}>
              exportar
            </button>
          )}
          {importHandle && (
            <button type='button' className='btn btn-warning' onClick={importHandle}>
              importar
            </button>
          )}
        </div>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <thead>
              <tr>
                <th style={{ width: '35px' }}></th>
                {headers.map((head) => (
                  <th
                    key={head.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      head.changeSort(head.sort === '' ? 'a' : head.sort === 'a' ? 'd' : '');
                    }}>
                    {head.value}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <input
                      type='checkbox'
                      name='selectRow'
                      id={`${row.id}`}
                      className='form-check-input'
                      onChange={(e) => handleSelectRow(e.target.checked, row.id.toString())}
                      checked={row.checked}
                    />
                  </td>
                  {row.cols.map((col) => (
                    <td key={col.id}>{col.value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <table className='table'>
            <thead>
              <tr>
                <th style={{ width: '300px' }}>
                  página {page} de {pagination?.totalPages}, {pagination?.totalRecords} registros
                </th>
                <td align='right'>
                  <button
                    type='button'
                    className='btn btn-sm btn-secondary'
                    onClick={() => {
                      setSelectedRowId('');
                      changePagination({
                        ...pagination,
                        page: 1,
                        totalPages: pagination?.totalPages ?? 0,
                        totalRecords: pagination?.totalRecords ?? 0,
                        recordsPerPage: pagination?.recordsPerPage ?? 0,
                      });
                    }}>
                    {'<<'}
                  </button>
                  {siblingPages.map((sp) => (
                    <button
                      type='button'
                      key={sp}
                      className={`btn btn-sm ms-2 ${
                        sp.toString() === page ? 'btn-primary' : 'btn-secondary'
                      }`}
                      onClick={() => {
                        setSelectedRowId('');
                        changePagination({
                          ...pagination,
                          page: sp,
                          totalPages: pagination?.totalPages ?? 0,
                          totalRecords: pagination?.totalRecords ?? 0,
                          recordsPerPage: pagination?.recordsPerPage ?? 0,
                        });
                      }}>
                      {sp}
                    </button>
                  ))}
                  <button
                    type='button'
                    className='btn btn-sm btn-secondary ms-2'
                    onClick={() => {
                      setSelectedRowId('');
                      changePagination({
                        ...pagination,
                        page: pagination?.totalPages ?? 0,
                        totalPages: pagination?.totalPages ?? 0,
                        totalRecords: pagination?.totalRecords ?? 0,
                        recordsPerPage: pagination?.recordsPerPage ?? 0,
                      });
                    }}>
                    {'>>'}
                  </button>
                </td>
                <th style={{ width: '73px' }}>registros:</th>
                <td style={{ width: '48px' }}>
                  <select
                    id='size'
                    className='form-control form-control-sm text-center'
                    style={{ width: '40px' }}
                    value={size}
                    onChange={(e) => {
                      setSelectedRowId('');
                      changePagination({
                        ...pagination,
                        page: pagination?.page ?? 0,
                        totalPages: pagination?.totalPages ?? 0,
                        totalRecords: pagination?.totalRecords ?? 0,
                        recordsPerPage: Number(e.target.value),
                      });
                    }}>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                    <option value={30}>30</option>
                    <option value={35}>35</option>
                    <option value={40}>40</option>
                    <option value={45}>45</option>
                    <option value={50}>50</option>
                  </select>
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </>
    );
  },
);
