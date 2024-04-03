import {GamePanCell, GamePanCellColor} from "@/features/tetris/types";
import PanCell from "@/features/tetris/components/gamePan/PanCell";

interface GamePanLineProps {
  gamePanCells: GamePanCell[]
}

const PanLine = ({ gamePanCells }: GamePanLineProps) => {
  return (
    <div className="flex h-auto">
      {
        gamePanCells.map(cell =>
          <PanCell key={cell.key} color={cell.color}>
          </PanCell>
        )
      }
    </div>
  )
}

export default PanLine;
