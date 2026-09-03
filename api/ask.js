const { answer, maxQuestionLength } = require("../lib/xera1-docs");

module.exports = async function handler(request, response) {
    if (request.method !== "POST") {
        response.status(405).json({ error: "Méthode non autorisée." });
        return;
    }

    let payload;
    try {
        payload = typeof request.body === "string"
            ? JSON.parse(request.body)
            : request.body || {};
    } catch {
        response.status(400).json({ error: "Requête JSON invalide." });
        return;
    }
    const question = typeof payload.question === "string"
        ? payload.question.trim().slice(0, maxQuestionLength)
        : "";

    if (!question) {
        response.status(400).json({ error: "Question vide." });
        return;
    }

    try {
        response.status(200).json({ answer: await answer(question) });
    } catch (error) {
        const status = error.message === "GEMINI_API_KEY_MISSING" ? 503 : 502;
        response.status(status).json({
            error: status === 503
                ? "GEMINI_API_KEY n’est pas configurée sur Vercel."
                : "Le service Gemini est momentanément indisponible.",
        });
    }
};