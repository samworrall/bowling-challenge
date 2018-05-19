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

  if (this.current_roll == 2 || this.pins == 0) {
    this.end_frame();
  } else {
  this.current_roll = 2;
  };
};

Bowling.prototype.end_frame = function() {
  // if (this.current_roll == 2 && this.) {
  //
  // }

  this.pins = 10
  this.current_frame += 1
  this.current_roll = 1
  this.score_card.push(this.frame_score)
  this.frame_score = []
};
