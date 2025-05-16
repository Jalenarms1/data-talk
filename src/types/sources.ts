export type Datasource = {
    id: string,
    screenOffsetX: number,
    screenOffsetY: number,
    type: Datasources,
    label: string,
}

export enum Datasources { 
    Database = "Database" , 
    Filepath = "Filepath" , 
    API = "API" , 
    Import = "Import"
}