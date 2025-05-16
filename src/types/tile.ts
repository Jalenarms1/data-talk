
import React, { JSX } from "react"
import { IconType } from "react-icons"
import { CiServer } from "react-icons/ci";
import { TiFlowSwitch } from "react-icons/ti";
import { GrConnect } from "react-icons/gr";
import { FaReplyAll } from "react-icons/fa";
import { BiSitemap } from "react-icons/bi";


export type Coordinate = {
    x: number,
    y: number
}

export type TCanvasTile = Record<string, Coordinate>

export type Tile = {
    id: string,
    label: string,
    type: TileType
    createdAt: number
    childTiles?: Tile[]
}


export enum TileType {
    Server = "Server",
    Database = "Database",
    Table = "Table",
    Controller = "Controller",
    Middleware = "Middleware",
    Action = "Action",
    Response = "Response",
    ErrorHandler = "ErrorHandler"
}

export const TILECHILDOPTIONS: Record<TileType, TileType[]> = {
    Server: [
        TileType.Controller,
        TileType.Database,
        TileType.Middleware,
    ],
    Controller: [
        TileType.Action,
        TileType.Controller,
    ],
    Middleware: [
        TileType.Action
    ],
    Action: [
        TileType.Response,
        TileType.Action,

    ],
    Response: [],
    ErrorHandler: [
        TileType.Action,
        TileType.Response
    ],
    Database: [
        TileType.Table
    ],
    Table: []

}

