export interface MessageColumns{
    success: Boolean,
    message: columnsAndRow
  }

export interface columnsAndRow{
    columns: column [],
    row: number
}

export interface column{
    position: number,
    columnName: string,
    required: boolean
}