export { rps } 
export { rpsls }

//rps
function rps(move){

const available_move = ["rock", "paper", "scissors"]; 

if (move === undefined){
     return {'player': available_move[Math.floor(Math.random() * 3)]};
}else if (!available_move.includes(move)){
        console.error('Error: Available moves are rock, paper, or scissors.')
        throw new RangeError()
}else{
  const other_move = available_move[Math.floor(Math.random() * 3)];
  let result;
 
  switch (move.toLowerCase()) { 
     case 'rock':
                result = (other_move === 'rock') ? 'tie' :
                         (other_move === 'paper') ? 'lose' : 'win';
                break;
     case 'paper':
                result = (other_move === 'paper') ? 'tie' :
                         (other_move === 'scissors') ? 'lose' : 'win';
                break;
     case 'scissors':
                result = (other_move === 'scissors') ? 'tie' :
                         (other_move === 'rock') ? 'lose' : 'win';
                break;
  }
   return{
      player: move.toLowerCase(),
      opponent: other_move,
      result: result
   };
  }
}
// rpsls
function rpsls(move){

    const available_move = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

if (move === undefined){
     return {'player': available_move[Math.floor(Math.random() * 5)]};
}else if (!available_move.includes(move)){
        console.error('Error: Available moves are rock, paper, scissors, lizard, or spock.')
        throw new RangeError();
}else{
   const other_move = available_move[Math.floor(Math.random() * 3)];
   let result;

    switch (move.toLowerCase()) {
       case 'rock':
                result = (other_move === 'rock') ? 'tie' :
                (other_move === 'paper' || other_move === 'spock') ? 'lose' : 'win';
                break;
      case 'paper':
                result = (other_move === 'paper') ? 'tie' :
                         (other_move === 'scissors' || other_move === 'lizard') ? 'lose' : 'win';
                break;  
      case 'scissors':
                result = (other_move === 'scissors') ? 'tie' :
                         (other_move === 'rock' || other_move === 'spock') ? 'lose' : 'win';
                break;
       case 'lizard':
                result = (other_move === 'lizard') ? 'tie' :
                         (other_move === 'rock' || other_move === 'scissors') ? 'lose' : 'win';
                break;
      case 'spock':
                result = (other_move === 'spock') ? 'tie' :
                         (other_move === 'paper' || other_move === 'lizard') ? 'lose' : 'win';
                break;
        }
        
        return{
            player: move,
            opponent: other_move,
            result: result
        };
}
}
