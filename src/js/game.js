console.log("Connected");

let questionsList = [
  {
    questionNum: 1,
    question: "What kind of stuff do you like to watch?",
    //value: 3,
    choice1: "Romance or drama", //CAN INCLUDE: Comedy, drama, music, mystery, romance, slice of life. DO YOU LIKE ELEMENTS OF MYSTERY
    choice2: "Fight scenes", //Action, comedy, drama, horror, mystery, sports SOMETHING FUNNY OR SOMETHING DARK
    choice3: "everyday life", //Comedy, drama, music, romance, slice of life SOMETHING LAID BACK OR SOMETHING WITH DRAMA
    choice4: "Something that will keep me on the edge of the chair", //Action, comedy, drama, horror, mystery, sports HORROR? OR COMPETITION?
    choice5: "Someone painting or playing music", //Comedy, music, slice of life
    choice6: "Youtubers playing video games", //Action, comedy, sports
    choice7: "None of these", //go read a book
  },
  {
    question: "Do you want elements of mystery or suspense?", //IF choice1
    //value: 3,
    choice1: "Yes", //Must have mystery
    choice2: "No", //Must not have
    choice3: "Don't care", //Can be both (no action)
  },
  {
    question: "Do you want something funny or something dark?", //IF choice2
    //value: 3,
    choice1: "Funny",
    choice2: "Dark",
    choice3: "Both funny and dark",
    choice4: "Don't care",
  },
  {
    question: "Do you want something laid-back or something with drama?", //IF choice3    //value: 3,
    choice1: "Something chill", //Must not have drama
    choice2: "Drama", //Must have drama
    choice3: "Don't care", //Can be both (no action)
  },
  {
    question: "Do you want anything dark or scary?", //IF choice4
    //value: 3,
    choice1: "Yes", //Must include horror
    choice2: "No", //Must not include horror
    choice3: "Don't care", //No action
  },
  /*   {
    question: "What genre are you looking for?",
    //value: 3,
    choice1: "Action",
    choice2: "Comedy",
    choice3: "Drama",
    choice4: "Horror",
    choice5: "Music",
    choice6: "Mystery",
    choice7: "Romance",
    choice8: "Slice of Life",
    choice9: "Sports",
  }, */
  {
    question:
      "Which of these genres do you want your recommendations to include?", //checklist
    //value: 3,
    choice1: "Ecchi",
    choice2: "Magic",
    choice3: "Psychological",
    choice4: "School",
    choice5: "Sci-fi",
    choice6: "Supernatural",
    choice7: "Thriller",
    choice8: "Vampires",
    choice9: "None of these",
  },
  {
    question: "Any of these that you want to see?",
    //value: 3,
    choice1: "Cars",
    choice2: "Mind-twisting plots", //Dementia
    choice3: "Demons and dark creatures", //Demons
    choice4: "Video games or board games", //Game
    choice5: "Harems", //Harem
    choice6: "History or historical fiction", //Historical
    choice7: "Shows for kids", //Kids
    choice8: "Martial arts",
    choice9: "Giant robots and big machines", //Mecha
    choice10: "A heavy militaristic feel", //Military
    choice11: "Parodies", //Parody
    choice12: "Police",
    choice13: "Samurai",
    choice14: "Space",
    choice15: "Superpowers", //Superpower
    choice16: "All of the above",
  },
  {
    question: "Air date?",
    //value: 3,
    choice1: "",
    choice2: "",
    choice3: "",
    choice4: "",
  },
  {
    question: "How many episodes would you prefer?",
    //value: 3,
    choice1: "13 or less",
    choice2: "26 or less",
    choice3: "Greater than 26",
    choice4: "I'm fine with any length",
  },
  {
    question: "How much anime have you watched?", //SORT BY POPULARITY NOT NETSCORE
    //value: 3,
    choice1: "A lot", //Less popular
    choice2: "I can count them on my fingers", //Not top 10
    choice3: "000000000", //All
  },
];
