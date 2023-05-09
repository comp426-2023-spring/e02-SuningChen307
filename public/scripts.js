// If you would like to see some examples of similar code to make an interface interact with an API,
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

document.addEventListener("DOMContentLoaded", () => {
  showHideShots();
});

function showHideShots() {
  const opponentCheckbox = document.getElementById("opponent");
  const rpsRadios = document.querySelectorAll(".rps");
  const rpslsRadios = document.querySelectorAll(".rpsls");
  const gameType = document.querySelector('input[name="game"]:checked').value;

  if (opponentCheckbox.checked) {
    chooseMoveText.innerHTML = `
		<br/><br/>
		Now choose your next move!
		<br><br>
	  `;
    if (gameType === "rps") {
      rpsRadios.forEach((radio) => {
        radio.style.display = "inline";
      });
      rpslsRadios.forEach((radio) => {
        radio.style.display = "none";
      });
    } else if (gameType === "rpsls") {
      rpsRadios.forEach((radio) => {
        radio.style.display = "inline";
      });
      rpslsRadios.forEach((radio) => {
        radio.style.display = "inline";
      });
    }
  } else {
    chooseMoveText.innerHTML = ``;
    rpsRadios.forEach((radio) => {
      radio.style.display = "none";
    });
    rpslsRadios.forEach((radio) => {
      radio.style.display = "none";
    });
  }
}

// This function clears the input form and also resets the shot selection
// radio buttons.
function startOver() {
  document.getElementById("rps").checked = true;
  document.getElementById("rock").checked = true;
  showHideShots();

  const resultElement = document.getElementById("game-result");
  resultElement.innerHTML = "";
}

async function playGame() {
  const rps = document.getElementById("rps").checked;
  const opponent = document.getElementById("opponent").checked;
  let endpoint = rps ? "/app/rps/play" : "/app/rpsls/play";
  let shot = document.querySelector('input[name="shot"]:checked').value;
  const method = opponent ? "POST" : "GET";

  if (!opponent) {
    const shotOptions = rps
      ? ["rock", "paper", "scissors"]
      : ["rock", "paper", "scissors", "lizard", "spock"];
    const randomIndex = Math.floor(Math.random() * shotOptions.length);
    shot = shotOptions[randomIndex];
  }

  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method === "POST") {
    options.body = JSON.stringify({ shot: shot });
  } else {
    endpoint += `?shot=${shot}`;
  }

  try {
    const response = await fetch(endpoint, options);
    const result = await response.json();
    console.log(result);

    // Display the result to the user
    const resultElement = document.getElementById("game-result");
    resultElement.innerHTML = `
			<p>Your move: ${result.player}</p>
			<p>Opponent's move: ${result.opponent}</p>
			<p>Result: ${result.result}</p>
		  `;
  } catch (error) {
    console.error("Error:", error);
  }
}
