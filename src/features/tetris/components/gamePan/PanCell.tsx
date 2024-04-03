import {GamePanCellColor} from "@/features/tetris/types";

interface GamePanCellProps {
  color: GamePanCellColor
}

const PanCell = ({ color }: GamePanCellProps) => {
  return (
    <div className="border bg-white w-10 h-10"></div>
  )
}

export default PanCell;
