export interface DriveSpreadSheet {
  mimeType: string
  id: string
  name: string
}
export interface DriveRequestData{
  files: DriveSpreadSheet[]
  incompleteSearch: Boolean
  Kind: String
}