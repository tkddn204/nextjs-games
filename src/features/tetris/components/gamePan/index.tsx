'use client'

import {useAtom} from "jotai";

import {panAtom} from "@/features/tetris/atoms";
import PanLine from "@/features/tetris/components/gamePan/PanLine";
import {generateRandomID} from "@/features/tetris/utils";

interface Props {
  className?: string
}

const GamePan = ({}: Props) => {
  const [gamePan, setGamePan] = useAtom(panAtom);
  return (
    <div className='bg-amber-900'>
      {gamePan ?
        gamePan.map((gamePanCells) =>
          (
            <PanLine key={generateRandomID()} gamePanCells={gamePanCells} />
          )) : "loading..."
      }
    </div>
  );
}

export default GamePan;