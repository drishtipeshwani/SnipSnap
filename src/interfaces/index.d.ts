import type { Column } from "@pankod/refine-react-table";

export interface ISnippet {
    id: number;
    title: string;
    code: string;
}

export interface ColumnButtonProps {
    column: Column<any, any>; // eslint-disable-line
}
