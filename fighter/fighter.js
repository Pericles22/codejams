const enemy = {
  attack: 11,
  criticalChance: 15,
  defense: 3,
  health: 100,
  maxHealth: 100,
  moves: ['retaliate', 'critical'],
  name: 'enemy'
}

const player = {
  attack: 10,
  defense: 3,
  health: 100,
  maxHealth: 100,
  name: 'player'
}

$('#attackButton1').click(() => attack('player'))

function attack(atkr) {
  const attacker = atkr === 'player' ? player : enemy
  const target = atkr === 'player' ? enemy : player
  const bar = atkr === 'player' ? $('#enemyHealthBar') : $('#playerHealthBar')

  // if atkr === 'enemy' call a function that randomly selects one of the moves in the array.
  // call that move

  const damage = attacker.attack - target.defense
  return $(bar).is(':animated') && target.health
    ? ''
    : reduceHealthBar(damage, target, bar)
}

function randomlySelectMove() {
  return enemy.moves[Math.floor(Math.random() * (enemy.moves.length - 1))]
}

function reduceHealthBar(damage, target, bar) {
  target.health = Math.max(0, target.health - damage)
  const mh = target.maxHealth
  const h = target.health
  const targetIsEnemy = target.name === 'enemy'
  $(bar).animate({ width: (h / mh) * 100 + '%' }, 300)
  setTimeout(
    () => (h <= 0 ? showAlert(target) : targetIsEnemy ? attack('enemy') : null),
    300
  )
}

$('#attackButton2').click(() => reduceDefense('enemy'))

function reduceDefense() {
  enemy.defense = Math.max(0, enemy.defense - 3)
}

function showAlert(target) {
  alert(target.name === 'enemy' ? 'VICTORY' : 'DEFEAT')
}
