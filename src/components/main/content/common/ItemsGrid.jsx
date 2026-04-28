import { useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import { themeBalham, colorSchemeDark } from 'ag-grid-community';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);


const ItemsGrid = ({ items, columnDefs, onRowClick, ...gridProps }) => {
  const myTheme = themeBalham.withPart(colorSchemeDark);

  const cellClickedListener = useCallback((e) => {
    onRowClick(e.data);
  }, [onRowClick]);

  return (
    <div style={{ height: '100%' }}>
      <AgGridReact
        rowData={items}
        columnDefs={columnDefs}
        theme={myTheme}
        onCellClicked={cellClickedListener}
        {...gridProps}
      />
    </div>
  );
};

export default ItemsGrid;
