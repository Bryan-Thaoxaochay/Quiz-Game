const questions = [
    {
        question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quae?",
        optionOne: "a1 Lorem ipsum dolor, sit amet consectetur",
        optionTwo: "a2 Lorem ipsum dolor, sit amet consectetur",
        optionThree: "a3 Lorem ipsum dolor, sit amet consectetur",
        optionFour: "a4 Lorem ipsum dolor, sit amet consectetur",
        answer: () => { return questions[0].optionOne }
    },
    {
        question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quae?",
        optionOne: "b1 Lorem ipsum dolor, sit amet consectetur",
        optionTwo: "b2 Lorem ipsum dolor, sit amet consectetur",
        optionThree: "b3 Lorem ipsum dolor, sit amet consectetur",
        optionFour: "b4 Lorem ipsum dolor, sit amet consectetur",
        answer: () => { return questions[1].optionTwo }
    },
    {
        question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quae?",
        optionOne: "c1 Lorem ipsum dolor, sit amet consectetur",
        optionTwo: "c2 Lorem ipsum dolor, sit amet consectetur",
        optionThree: "c3 Lorem ipsum dolor, sit amet consectetur",
        optionFour: "c4 Lorem ipsum dolor, sit amet consectetur",
        answer: () => { return questions[2].optionThree }
    },
    {
        question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, quae?",
        optionOne: "d1 Lorem ipsum dolor, sit amet consectetur",
        optionTwo: "d2 Lorem ipsum dolor, sit amet consectetur",
        optionThree: "d3 Lorem ipsum dolor, sit amet consectetur",
        optionFour: "d4 Lorem ipsum dolor, sit amet consectetur",
        answer: () => { return questions[3].optionFour }
    },
]

export {questions as questions};