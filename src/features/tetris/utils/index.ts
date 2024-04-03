import {GAME_PAN_HEIGHT, GAME_PAN_WIDTH} from "@/features/tetris/constants";
import {GamePan, GamePanCell} from "@/features/tetris/types";

/**
 * generate random hex id (default len: 40)
 * ref: https://stackoverflow.com/a/26410127
  */
export const generateRandomID = (len = 40) => {
    const arr = new Uint8Array(len / 2)
    crypto.getRandomValues(arr);
    return Array.from(arr, v => `0${v.toString(16)}`.slice(-2)).join("")
}

export const generateInitPan = () => {
    const pan: GamePan = [];
    for (let i = 0; i < GAME_PAN_WIDTH; i++) {
        pan.push([]);
        for (let j = 0; j < GAME_PAN_HEIGHT; j++) {
            const gamePanCell: GamePanCell = {
                key: generateRandomID(),
                color: '#fff'
            }
            pan[i].push(gamePanCell)
        }
    }
    return pan;
}