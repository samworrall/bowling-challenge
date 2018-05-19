function Bowling() {
  this.pins = 10
  this.current_frame = 1
  this.current_roll = 1
  this.frame_score = []
  this.score_card = []
}

Bowling.prototype.knock_pins = function(num) {
  if(this.pins - num < 0 || num > 10) {
    throw("You cannot knock over more pins than there are standing")
  } else {
  this.pins -= num;
  this.frame_score.push(num)
  };

  if (this.current_frame > 1) {

//STRIKE SCORING
    if (this.current_roll === 2 && (this.score_card[this.score_card.length - 1]).length === 1 ) {
      this.score_card[this.score_card.length - 1].push(this.frame_score[0]);
      this.score_card[this.score_card.length - 1].push(num);
    }

    if ((this.current_roll === 1) && ((this.score_card[this.score_card.length - 1]).length === 1) && (num === 10)) {
      this.score_card[this.score_card.length - 1].push(num);
    }

//SPARE SCORING
    if (this.current_roll === 1 && (this.score_card[this.score_card.length - 1]).length === 2 && (this.score_card[this.score_card.length - 1]).reduce(function(acc, val) { return acc + val; }) == 10) {
      this.score_card[this.score_card.length - 1].push(num);
    };
  }

//STRIKE SCORING EXTRA
  if (this.current_frame > 2) {

    if ((this.current_roll === 1) && ((this.score_card[this.score_card.length - 2]).length === 2) && ((this.score_card[this.score_card.length - 2]).includes(10))) {
      this.score_card[this.score_card.length - 2].push(num);
    };
  };

  if (this.current_roll === 2 || this.pins === 0) {
    this.end_frame();
  } else {
  this.current_roll = 2;
  };
};

Bowling.prototype.end_frame = function() {
  if (this.current_frame === 10) {
    this.reset_game();
  } else {
    this.pins = 10
    this.current_frame += 1
    this.current_roll = 1
    this.score_card.push(this.frame_score)
    this.frame_score = []
  };
};

Bowling.prototype.reset_game = function() {
  this.pins = 10
  this.current_frame = 1
  this.current_roll = 1
  this.frame_score = []
  this.score_card = []
}
