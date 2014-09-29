var thud = exports;

thud.STARTING_POSITIONS = {
	'CLASSIC': 'dF1,dG1,dJ1,dK1,dE2,dL2,dD3,dM3,dC4,dN4,dB5,dO5,dA6,dP6,dA7,dP7,dA9,dP9,dA10,dP10,dB11,dO11,dC12,dN12,dD13,dM13,dE14,dL14,dF15,dG15,dJ15,dK15,TG7,TH7,TJ7,TG8,TJ8,TG9,TH9,TJ9,RH8'
}

thud.game = function() {
  var self = this;

  self.moves = [];

  self.positions = function(callback) {
    callback(thud.STARTING_POSITIONS['CLASSIC']);
  }

  self.get_next_move = function(callback) {
    var spawn = require('child_process').spawn;
    
    var child = spawn(__dirname + '/console.py');

    child.stdout.on('data', function(data) {
      callback(data.toString('ascii'));
    })

    child.stdin.write(self.moves.join('\n'));
    child.stdin.end();
  }
}