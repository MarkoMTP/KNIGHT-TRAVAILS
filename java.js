const boardSize = 8;

const moves = [
  [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]
];

function knightMoves(x1, y1, end1, end2) {
  if (x1 >= boardSize || y1 >= boardSize) return 'Too Big';

  if (x1 === end1 && y1 === end2) return [[end1, end2]];

  let nodesQueue = [];
  let visited = new Set();
  let path = [];

  nodesQueue.push(node([x1, y1]));

  while (nodesQueue.length !== 0) {
    const currentNode = nodesQueue.shift();
    const [x, y] = currentNode.position;
    const distanceN = Math.abs(x - end1) + Math.abs(y - end2);

    if (visited.has(distanceN)) continue; // Skip if we've visited this Manhattan distance
    visited.add(distanceN);
if(x === end1 && y === end2) {
  let tempNode = currentNode;

  while(tempNode) {

    path.unshift(tempNode.position);
    tempNode = tempNode.predecessor

  }

return path

}
    for (const move of moves) {
      const [x2, y2] = move;
      if (isValidMove(x, y, x2, y2)) {
        const resultX = x + x2;
        const resultY = y + y2;
        let moveNode = node([resultX, resultY], currentNode);
        nodesQueue.push(moveNode);
      }
    }
  }

  return 'No path found';
}

function isValidMove(x1, y1, x2, y2) {
  const resultX = x1 + x2;
  const resultY = y1 + y2;
  return resultX >= 0 && resultX < boardSize && resultY >= 0 && resultY < boardSize;
}

function node(position, predecessor = null) {
  return {
    position,
    predecessor
  };
}

console.log(knightMoves(0, 0, 5, 5));
