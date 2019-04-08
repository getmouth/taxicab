const input = "L1, L5, R1, R3, L4, L5, R5, R1, L2, L2, L3, R4, L2, R3, R1, L2, R5, R3, L4, R4, L3, R3, R3, L2, R1, L3, R2, L1, R4, L2, R4, L4, R5, L3, R1, R1, L1, L3, L2, R1, R3, R2, L1, R4, L4, R2, L189, L4, R5, R3, L1, R47, R4, R1, R3, L3, L3, L2, R70, L1, R4, R185, R5, L4, L5, R4, L1, L4, R5, L3, R2, R3, L5, L3, R5, L1, R5, L4, R1, R2, L2, L5, L2, R4, L3, R5, R1, L5, L4, L3, R4, L3, L4, L1, L5, L5, R5, L5, L2, L1, L2, L4, L1, L2, R3, R1, R1, L2, L5, R2, L3, L5, L4, L2, L1, L2, R3, L1, L4, R3, R3, L2, R5, L1, L3, L3, L3, L5, R5, R1, R2, L3, L2, R4, R1, R1, R3, R4, R3, L3, R3, L5, R2, L2, R4, R5, L4, L3, L1, L5, L1, R1, R2, L1, R3, R4, R5, R2, R3, L2, L1, L5";
debugger;

const directions = input.split(', ');
let visited = [];

const position = {
  x: 0,
  y: 0
}

const nav = [
  ['x', 1],
  ['y', 1],
  ['x', -1],
  ['y', -1]
]

let move = 0;
let initX = 0, initY = 0;


directions.map(dir => {
  const direction = dir[0];
  const blocks = parseInt(dir.substr(1), 10);

  switch(direction){
    case 'L':
      move -= 1;
      break;
    case 'R':
      move += 1;
      break;
    default:
    return move;
  }

  move < 0 ? move = 4 + move : move;
  move = move % 4;

  //select coord based on move counts
  const [step, count] = nav[move]

  for (let i = 0; i < blocks; i++) {
    position[step] += count; // positon coord increment 
    const value = `${position.x},${position.y}`;
    if (visited.indexOf(value) > -1) {
      console.log('value: ',value);
      return
    }else {
      visited.push(value)
    }
  }

});

const blocksAway = Math.abs(position.x) + Math.abs(position.y)
console.log('x: ',position.x, 'y: ',position.y)
console.log(blocksAway)