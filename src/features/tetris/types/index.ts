import {Property} from "csstype";
import Color = Property.Color;

export interface GameState {
    startTimestamp: number,
    history: GameContext[]
}

export type GamePanCellColor = Color;

export interface GamePanCell {
    key: string,
    color: GamePanCellColor
}

export type GamePan = Array<GamePanCell[]>;
export type GameContextId = string;

export interface GameContext {
    id: GameContextId,
    pan: GamePan,
    score: number,
    timestamp: number
}
