import { atom } from 'jotai';

import type {GameContext} from "@/features/tetris/types";
import {generateInitPan, generateRandomID} from "@/features/tetris/utils";

type OptionalGameContext = Partial<GameContext>

export const gameContextIdAtom = atom<OptionalGameContext['id']>(generateRandomID());
export const panAtom = atom<OptionalGameContext['pan']>(generateInitPan());
export const scoreAtom = atom<OptionalGameContext['score']>(0);
export const timeStampAtom = atom<OptionalGameContext['timestamp']>(+Date());

export const gameContextAtom = atom(
    (get) => ({
        id: get(gameContextIdAtom),
        pan: get(panAtom),
        score: get(scoreAtom),
        timestamp: get(timeStampAtom)
    }),
    (_, set, update: OptionalGameContext) => {
        set(panAtom, update.pan);
        set(scoreAtom, update.score);
        set(timeStampAtom, update.timestamp)
    }
);