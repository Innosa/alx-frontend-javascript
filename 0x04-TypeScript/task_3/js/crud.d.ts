// Import types from interface.ts
import { RowID, RowElement } from './interface';

// Declare the types for CRUD functions
declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;

// Export everything as CRUD (for import * as CRUD)
export { insertRow, deleteRow, updateRow };