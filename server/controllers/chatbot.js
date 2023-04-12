const axios = require('axios');

async function fetchGPT3Response(openai, prompt) {
    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            max_tokens: 100,
            temperature: 0.5
        });
        return completion.data.choices[0].text;
    } catch (error) {
        console.log("error", error);
        throw Error
    }
}

const handleBotPrompt = (openai) => async (req, res) => {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json("Please insert a prompt.")

    try {
        const response = await fetchGPT3Response(openai, prompt);
        return res.json(response);
    } catch (e) {
        console.log(e);
        return res.status(400).json("Error in bot prompt.");
    }
}

module.exports={handleBotPrompt}