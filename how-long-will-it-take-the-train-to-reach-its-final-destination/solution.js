function reachDestination(distance, speed) {
  var time = distance / speed;
  var roundTime = Math.round(time * 2) / 2;
  var part1 = 'The train will be there in ';
  var part2 = roundTime === 1 ? ' hour.' : ' hours.';

  return part1 + roundTime + part2;
}