import questionsData from './data.json';

export function getQuestions () {
    return new Promise((res) => {
        const data = questionsData.questions;
        return setTimeout(() => res(data), 800);
    })
}
