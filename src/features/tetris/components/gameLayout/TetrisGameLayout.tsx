'use client';


import GamePan from "@/features/tetris/components/gamePan";

export const TetrisGameLayout = () => {
  return (<div id="tetris" className="flex flex-col h-screen">
    <div className="bg-gray-200 p-4 text-center">header</div>
    <div className="flex flex-1 justify-center">
      <GamePan className="flex-1 bg-gray-400 p-4 text-center" />
      <div className="w-1/3 flex flex-col">
        <div className="flex-1 bg-gray-500 p-4 text-center">
          score
        </div>
        <div className="flex-1 bg-gray-600 p-4 text-center">
          info
        </div>
      </div>
    </div>
  </div>)
};