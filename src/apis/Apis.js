import axios from 'axios';

const serverApi = axios.create({
    headers: {
    'Content-Type': 'application/json',
    },
});

export const getResult = async (languageSet, text) => {
    let resultText = '';
    await serverApi.post(`https://ossp-zdnzm.run.goorm.site/translation`, {'button': languageSet, 'text' : text}).then((response) => {
        resultText = response.data.result_text;
    });
    return resultText;
}   