import { Datasource } from "./sources"

export type Destination = {
    id: string,
    screenOffsetX: number,
    screenOffsetY: number,
    type: Destinations
    label: string,
    sources?: string[],
    // sources?: Datasource[]
}

export enum Destinations {
    Database = 'DatabaseDest',
    Webhook = 'Webhook',
    File = 'File',
    Script = 'Script',
}