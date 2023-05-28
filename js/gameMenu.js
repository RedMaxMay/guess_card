import { startGame } from "./startGame.js";

export const createGameMenu = () => {
  const title = document.createElement("h2");

  const gameSection = document.querySelector(".game-section__container");
  const confetti = document.querySelector(".confetti");

  title.textContent = "Choose level";
  title.classList.add("game-menu__title");
  gameSection.innerHTML = "";
  confetti.innerHTML = "";

  const createDifficultButton = (difficult) => {
    const button = document.createElement("button");
    button.classList.add("game-menu__difficult-btn");
    button.textContent = `${difficult} cards`;

    button.addEventListener("click", () => startGame(difficult));

    return button;
  };

  gameSection.append(
    title,
    createDifficultButton(10),
    createDifficultButton(12),
    createDifficultButton(14),
    createDifficultButton(16)
  );
};
