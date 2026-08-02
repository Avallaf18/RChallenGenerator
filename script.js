const challenges = {
    fitness: {
        
        easy: [
            "Do 5 push ups 💪",
            "Do 10 push ups every time you eat something 🍽️",
            "Drink 1 liter of water 💧",
            "Don't eat any junk food for the rest of the day 🍫",
            "Set a fitness goal ✍️",
        ],

        medium: [
            "Go for a 30-minute walk 🚶‍♂️",
            "Do 20 push ups 💪",
            "Prepare a healthy meal 🍲",
            "Go for a run with your friends 🏃‍♂️",
            "Do 50 squats 🏋️‍♂️",
        ],

        hard: [
        "Set your 100m run record ⏱️",
        "Try a sport that you've never played before 🏀",
        "Do 50 push ups in less than 5 minutes 💪",
        "Do 50 squats without resting 🏋️‍♂️",
        "Do an excercise with a weight you've never done 🏋️‍♂️",
        "Set yourself a pr in any excercise 🏋️‍♂️"
        ],
    },

    mindfulness: {
    
        easy: [
            "Read 10 pages of a book 📖",
            "Clean your room for 10 minutes 🧹",
            "Stretch your body for 15 minutes 🧘‍♂️",
            "Meditate for 5 minutes 🧘",
            "Take 10 deep breaths 😮‍💨",
            "Journal for 10 minutes ✍️",
            "Take off your clothes and look at yourself in a mirror for 5 minutes 🪞",
        ],

        medium: [
            "Do a random act of kindness 🤍",
            "Turn off your phone for 1 hour 📵",
            "Solve a puzzle or Sudoku 🧩",
            "Spend 10 minutes in nature 🌿",
            "Clean your entire room 🧹",
            "Read a book during an hour 📖",

        ],

        hard: [
            "Turn off your phone for the rest of the day 📵",
            "Take cold showers for the rest of the week 🚿",
            "Go for a long walk in the nature 🌿",
            "Prepare a trip in the mountains with friends 🏔️",
        ]
    },

    learning: {
    
        easy: [
            "Watch a documentary 👀",
            "Learn a magic trick 🎩",
            "Learn a new cooking reciepe 🍲",
            "Ask your friends about a hidden talent 🫣"
        ],

        medium: [
            "Learn something new today 🧠",
            "Try to understand a difficult science lesson 🔬"
        ],

        hard: [
            "Make yourself an expert on a random topic in a day 📚",
            "Practise an instrument for 30 minutes 🎸",
            "Beat your personal record in whatever 💪"
        ]
    },

    fun: {
    
        easy: [
            "Watch a comedy movie🍿",
            "Play a board game 🎲",
            "Watch a funny video 😂",
            "Play your favorite sport ⚽",
            "Play a video game for 30 minutes 🎮",
        ],

        medium: [
        "Try to do a challenge with friends🫂",
        "Write a short story ✍️",
        "Try to beat any game 🎮",
        "Beat your friend in your favourite game ✌️"
        ],

        hard: [
            "Invent a new game 🎯",
            "Beat your speedrun record in minecraft 🧊"
        ]
    },

};

let gameMode = "normal";
const menu = document.getElementById("menu");
const generator = document.getElementById("generator");

const easyBtn = document.getElementById("easy-btn");
const normalBtn = document.getElementById("normal-btn");
const hardBtn = document.getElementById("hard-btn");

function startGame(mode) {

    gameMode = mode;

    menu.style.display = "none";
    generator.style.display = "block";

}

easyBtn.addEventListener("click", function () {
    startGame("easy");
});

normalBtn.addEventListener("click", function () {
    startGame("normal");
});

hardBtn.addEventListener("click", function () {
    startGame("hard");
});

function getDifficulty() {

    const roll = Math.random() * 100;

    if (gameMode === "easy") {

        if (roll < 70) return "easy";
        return "medium";

    }

    if (gameMode === "normal") {

        if (roll < 60) return "easy";
        if (roll < 90) return "medium";
        return "hard";

    }

    if (gameMode === "hard") {

        if (roll < 60) return "medium";
        return "hard";

    }

}


const backBtn = document.getElementById("back-btn");
backBtn.addEventListener("click", function () {
    location.reload();
});

    generator.style.display = "none";
    menu.style.display = "block";

const challengeText = document.getElementById("challenge");
const button = document.getElementById("generate-btn");
let lastChallenge = "";
button.addEventListener("click", function () {

    console.log("Botó clicat");


    const checkboxes = document.querySelectorAll(".categories input[type='checkbox']");

    const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    console.log("Categories:", selectedCategories);

    let availableChallenges = [];

    const difficulty = getDifficulty();
    console.log(difficulty);

    const difficultyText = document.getElementById("difficulty");

    if (difficulty === "easy") {
    difficultyText.textContent = "🟢 Easy";
} else if (difficulty === "medium") {
    difficultyText.textContent = "🟡 Medium";
} else {
    difficultyText.textContent = "🔴 Hard";
}

    selectedCategories.forEach(category => {
        console.log("Afegint:", category);

        if (challenges[category]) {
            availableChallenges.push(...challenges[category][difficulty]);
        }
    });

    console.log("Reptes disponibles:", availableChallenges);

let randomChallenge;

if (availableChallenges.length === 0) {
    difficultyText.textContent = "";
    challengeText.textContent = "Choose at least one topic to generate a challenge! 🎯";
    return;
}

do {
    const randomIndex = Math.floor(Math.random() * availableChallenges.length);
    randomChallenge = availableChallenges[randomIndex];
} while (
    randomChallenge === lastChallenge &&
    availableChallenges.length > 1
);

lastChallenge = randomChallenge;

challengeText.classList.add("fade");

setTimeout(() => {
    challengeText.textContent = randomChallenge;
    challengeText.classList.remove("fade");
}, 300);

});

