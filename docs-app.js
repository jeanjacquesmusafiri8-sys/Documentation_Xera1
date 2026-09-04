const docs = [
    {
        title: "Accueil",
        path: "docs.html",
        text: "Documentation XERA1, Proof of Building, pages PRO, feed immersif, recherche, messagerie et vérification.",
    },
    {
        title: "Getting started",
        path: "getting-started.html",
        text: "Créer son compte XERA1, compléter l’onboarding, publier sa première preuve et certifier un jalon.",
    },
    {
        title: "Pro pages",
        path: "pro-pages.html",
        text: "Créer et configurer une Page PRO, activer un CTA, capturer des leads, diffusions B2B et pitch deck.",
    },
    {
        title: "Messaging",
        path: "messaging-and-network.html",
        text: "Messagerie dédiée, échanges directs, pièces jointes et interactions entre builders et entreprises.",
    },
    {
        title: "Search & discovery",
        path: "search-and-discovery.html",
        text: "Feed immersif, commande /search, catégories de découverte et historique de recherche automatique.",
    },
    {
        title: "Trust & verification",
        path: "trust-and-verification.html",
        text: "Badge de certification XERA1, provenance des médias, authenticité et sécurité des contenus.",
    },
    {
        title: "Founding team",
        path: "founding-team.html",
        text: "Présentation de l’équipe fondatrice de XERA1 : Gibril Mad, Ready Kalonda, Jean Jacques Musafiri et ILD Faida, tous congolais.",
    },
];

const overlay = document.getElementById("search-overlay");
const input = document.getElementById("global-search-input");
const results = document.getElementById("search-results");
const trigger = document.getElementById("command-k-trigger");
const sidebarSearch = document.querySelector("#sidebar-search input");

const assistantLauncher = document.getElementById("assistant-launcher");
const assistantPanel = document.getElementById("assistant-panel");
const assistantClose = document.getElementById("assistant-close");
const geminiForm = document.getElementById("gemini-form");
const geminiInput = document.getElementById("gemini-question");
const geminiAnswer = document.getElementById("gemini-answer");
const geminiSend = document.getElementById("gemini-send");

const mobileMenuToggle = document.createElement("button");
mobileMenuToggle.type = "button";
mobileMenuToggle.className = "mobile-menu-toggle";
mobileMenuToggle.setAttribute("aria-label", "Ouvrir le menu de documentation");
mobileMenuToggle.setAttribute("aria-expanded", "false");
mobileMenuToggle.textContent = "☰";

const sidebar = document.querySelector(".sidebar");
const topbarActions = document.querySelector(".topbar-actions");

function setMobileMenu(open) {
    if (!sidebar) return;
    sidebar.classList.toggle("mobile-open", open);
    mobileMenuToggle.setAttribute("aria-expanded", String(open));
    mobileMenuToggle.setAttribute(
        "aria-label",
        open
            ? "Fermer le menu de documentation"
            : "Ouvrir le menu de documentation",
    );
}

if (sidebar && topbarActions) {
    const navigation = sidebar.querySelector(".sidebar-nav");
    docs.forEach((doc) => {
        if (!navigation || navigation.querySelector(`a[href="${doc.path}"]`))
            return;
        const link = document.createElement("a");
        link.className = "nav-item";
        link.href = doc.path;
        link.textContent = doc.title;
        navigation.appendChild(link);
    });
    topbarActions.prepend(mobileMenuToggle);
    mobileMenuToggle.addEventListener("click", () => {
        setMobileMenu(!sidebar.classList.contains("mobile-open"));
    });
    sidebar.querySelectorAll(".nav-item").forEach((item) => {
        item.addEventListener("click", () => setMobileMenu(false));
    });
}

function openSearch() {
    if (!overlay) return;
    overlay.classList.remove("hidden");
    setTimeout(() => input && input.focus(), 20);
}

function closeSearch() {
    if (!overlay) return;
    overlay.classList.add("hidden");
}

function updateAssistantVisibility() {
    if (!assistantLauncher || !assistantPanel) return;
    const isOpen = !assistantPanel.classList.contains("hidden");
    assistantLauncher.classList.toggle("hidden", isOpen);
}

function openAssistant() {
    if (!assistantPanel) return;
    assistantPanel.classList.remove("hidden");
    assistantPanel.setAttribute("aria-hidden", "false");
    updateAssistantVisibility();
    setTimeout(() => geminiInput && geminiInput.focus(), 20);
}

function closeAssistant() {
    if (!assistantPanel) return;
    assistantPanel.classList.add("hidden");
    assistantPanel.setAttribute("aria-hidden", "true");
    updateAssistantVisibility();
}

function renderResults(query) {
    if (!results) return;
    const term = query.trim().toLowerCase();
    if (!term) {
        results.innerHTML = docs
            .slice(0, 5)
            .map(
                (doc) => `
                    <a class="search-result" href="${doc.path}">
                        <strong>${doc.title}</strong><br />
                        <small>${doc.text}</small>
                    </a>
                `,
            )
            .join("");
        return;
    }

    const filtered = docs.filter((doc) => {
        const haystack = `${doc.title} ${doc.text}`.toLowerCase();
        return haystack.includes(term);
    });

    results.innerHTML = filtered.length
        ? filtered
              .map(
                  (doc) => `
                        <a class="search-result" href="${doc.path}">
                            <strong>${doc.title}</strong><br />
                            <small>${doc.text}</small>
                        </a>
                    `,
              )
              .join("")
        : '<div class="search-result"><strong>Aucun résultat</strong><br /><small>Essayez “proof”, “cta”, “messaging”, “verification”.</small></div>';
}

if (trigger) {
    trigger.addEventListener("click", openSearch);
}

if (overlay) {
    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) closeSearch();
    });
}

if (document.querySelector(".close-search")) {
    document
        .querySelector(".close-search")
        .addEventListener("click", closeSearch);
}

if (input) {
    input.addEventListener("input", (event) =>
        renderResults(event.target.value),
    );
    renderResults("");
}

if (sidebarSearch) {
    sidebarSearch.addEventListener("input", (event) => {
        const value = event.target.value.trim();
        renderResults(value);
        if (value) openSearch();
    });
}

if (assistantLauncher) {
    assistantLauncher.addEventListener("click", openAssistant);
}

if (assistantClose) {
    assistantClose.addEventListener("click", closeAssistant);
}

function updateSendButton() {
    if (!geminiInput || !geminiSend) return;
    const hasText = geminiInput.value.trim().length > 0;
    geminiSend.disabled = !hasText;
    geminiSend.classList.toggle("active", hasText);
}

function setGeminiStatus(message, isError = false) {
    if (!geminiAnswer) return;
    geminiAnswer.innerHTML = renderAssistantMessage(message);
    geminiAnswer.classList.toggle("error", isError);
}

function escapeHtml(value) {
    return value.replace(
        /[&<>'"]/g,
        (character) =>
            ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;",
            })[character],
    );
}

function renderAssistantMessage(message) {
    return escapeHtml(message)
        .replace(/`([^`\n]+)`/g, "<code>$1</code>")
        .replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>")
        .replace(/__([^_\n]+)__/g, "<strong>$1</strong>")
        .replace(/\*([^*\n]+)\*/g, "<em>$1</em>")
        .replace(/_([^_\n]+)_/g, "<em>$1</em>")
        .replace(/\n/g, "<br />");
}

function addChatMessage(message, role, isError = false) {
    if (!geminiAnswer) return;
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${role}${isError ? " error" : ""}`;
    bubble.innerHTML =
        role === "assistant"
            ? renderAssistantMessage(message)
            : escapeHtml(message);
    geminiAnswer.appendChild(bubble);
    geminiAnswer.scrollTop = geminiAnswer.scrollHeight;
    return bubble;
}

async function askGemini() {
    if (!geminiForm || !geminiInput || !geminiAnswer) return;

    const question = geminiInput.value.trim();
    if (!question) {
        setGeminiStatus("Posez une question sur la documentation.", true);
        return;
    }

    addChatMessage(question, "user");
    geminiInput.value = "";
    updateSendButton();
    const loadingMessage = addChatMessage(
        "Connexion à l’assistant en cours...",
        "assistant",
    );
    geminiSend.disabled = true;

    try {
        const response = await fetch("/api/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || "Erreur de requête.");
        }

        if (loadingMessage)
            loadingMessage.innerHTML = renderAssistantMessage(
                data.answer || "Aucune réponse trouvée.",
            );
    } catch (error) {
        const message = error.message.includes("GEMINI_API_KEY")
            ? "La clé GEMINI_API_KEY n’est pas configurée sur le serveur."
            : error.message || "L’assistant est momentanément indisponible.";
        if (loadingMessage) {
            loadingMessage.innerHTML = renderAssistantMessage(message);
            loadingMessage.classList.add("error");
        }
    } finally {
        updateSendButton();
    }
}

if (geminiInput) {
    geminiInput.addEventListener("input", updateSendButton);
    updateSendButton();
}

if (geminiForm) {
    geminiForm.addEventListener("submit", (event) => {
        event.preventDefault();
        askGemini();
    });
}

window.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openSearch();
    }

    if (event.key === "Escape") {
        if (overlay && !overlay.classList.contains("hidden")) closeSearch();
        if (assistantPanel && !assistantPanel.classList.contains("hidden"))
            closeAssistant();
        setMobileMenu(false);
    }
});

updateAssistantVisibility();
