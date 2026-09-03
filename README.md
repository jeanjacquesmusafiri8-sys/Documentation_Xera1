# Converted to Docusaurus

Ce dépôt a été converti depuis un starter Mintlify en site Docusaurus.

## Interface locale et assistant Gemini

1. Copiez `.env.example` vers `.env` à la racine de ce dépôt.
2. Ouvrez `.env` et remplacez `AIza_votre_cle_ici` par votre clé Gemini.
3. Lancez `node server.js`.
4. Ouvrez `http://localhost:3000` dans votre navigateur.

La clé reste côté serveur et n'est pas ajoutée à `docs.html`. Le serveur charge toutes les pages `.mdx` pour répondre aux questions de l'assistant.
