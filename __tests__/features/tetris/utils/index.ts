import {generateRandomID} from "@/features/tetris/utils";

it('generate ID 성공', () => {
    const id = generateRandomID();
    console.log(id)
    expect(id).toHaveLength(40)
})