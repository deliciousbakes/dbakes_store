import { Download, Trash2 } from 'lucide-react';
import React from 'react';
import { LinkButton } from './Buttons';
import TableSearch from './TableSearch';

const TableActions = () => {
  return (
    <div>
      <div className="flex  gap-6 py-6 px-8 rounded-lg bg-slate-700 justify-between  items-center">
        <LinkButton href={"/"} btnTitle="Export">
          {React.createElement(Download)}
        </LinkButton>
        <TableSearch />

        <LinkButton
          href={"/delete"}
          btnTitle="Delete"
          className="dark:bg-red-800 bg-red-800"
        >
          {React.createElement(Trash2)}
        </LinkButton>
      </div>
    </div>
  );
}

export default TableActions
