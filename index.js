const addQuestionBtn = document.getElementById('add-question');
const questionsContainer = document.getElementById('questions-container');

addQuestionBtn.addEventListener('click', () => {
    const questionItem = document.createElement('div');
    questionItem.classList.add('question-item');
    questionItem.innerHTML = `

    `;
    questionsContainer.appendChild(questionItem);
});
