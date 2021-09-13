import GridSquare from "./GridSquare"

function NextBlock(props: any) {
    const box = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]

    const grid = box.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            return <GridSquare key={`${row}${col}`} color={square} />
        })
    })

    return (
        <div className="next-block">
            {grid}
        </div>
    )

}

export default NextBlock
