const { isConfigured } = require("../lib/xera1-docs");

module.exports = function handler(request, response) {
    if (request.method !== "GET") {
        response.status(405).json({ error: "Méthode non autorisée." });
        return;
    }
    response.status(200).json({ configured: isConfigured() });
};
