# Documentation complète de XERA1 (Référence technique vérifiée)

> Référence fonctionnelle, technique et opérationnelle de XERA1 basée sur l'audit technique réel du code source et de la base de données Supabase de production.

**Version documentaire :** 2.0 (Post-Audit Technique)  
**Langue :** français  
**Public :** utilisateurs, créateurs, recruteurs, développeurs, opérateurs et administrateurs

---

## 2. Authentification et Onboarding

### Modes d'Authentification
- **Email + Mot de passe** : Inscription et connexion directes.
- **Google OAuth** : Authentification rapide via compte Google.
- *Remarque importante* : Les connexions par Magic Link et Codes OTP (SMS/Email) ne sont **pas implémentées** actuellement.

### Wizard d'Inscription en 4 Étapes
1. **Type de Compte** : Profil Personnel/Builder vs Communauté/Entreprise.
2. **Identité** : Nom d'utilisateur unique (`username`), nom affiché, titre pro.
3. **Bio & Liens** : Description de mission, liens sociaux et réseaux.
4. **Configuration** : Réglages de visibilité et activation.

---

## 3. Proof of Building (Arcs & Preuves)

- **Arcs (`arc_id`)** : Fil de progression d'un projet de construction.
- **Preuves / Publications** : Rattachées obligatoirement à un Arc (`arc_id`) et à un jour de progression (`day_number`).
- **Stockage Médias** : Tous les fichiers images/vidéos/textes sont hébergés sur **Supabase Storage**.

---

## 4. Pages Professionnelles (Pages PRO)

- **Éditeur de Page Pro** : Implémenté et fonctionnel dans `js/pro-settings-component.js` (nom, slug, bio, description, industrie, localisation, logos/bannières, liens sociaux).
- **CTA & Capture de Leads** : 3 types de CTA (`url` Lien Web, `phone` Téléphone, `email` Email). Les formulaires génèrent des leads enregistrés dans `professional_cta_leads`.
- **Rôles & Équipe** : Membres rattachés via `partner_page_memberships`. Gestion multi-admin avec rôles granulaires en cours d'évolution (1 propriétaire unique `owner_id` par page actuellement).

---

## 5. Messagerie & Réseau

- **Messagerie 1:1** : Conversations DMs directes entres membres et Pages Pro (`dm_conversations`, `dm_messages`).
- **Temps Réel** : Supabase Realtime (`postgres_changes`) avec fallback automatique par polling.
- **Notifications** : Web Push Notifications (`web-push`) et notifications in-app.

---

## 6. Command Palette, Recherche & Algorithme du Feed

- **Command Palette** : Overlay `dedicated-search-overlay` déclenché via `Cmd+K` / `Ctrl+K` ou `ESC`.
- **Portée de la Recherche** : 3 entités DB indexées (`users`, `content`, `professional_pages`). Historique local sur 7 jours et mode hors-ligne.
- **Moteur de Recommandation du Feed Discover** :
  - **Engagement (40%)** : Interactions, commentaires, partages.
  - **Qualité Créateur (35%)** : Cadence, régularité, statut vérifié.
  - **Fraîcheur (25%)** : Récence du contenu.
  - **Facteurs d'Amplification** : Bonus momentum Proof of Work, gravité sociale, pertinence pro, ratio d'exploration de ~12%.
  - **Pagination** : Infinite scroll par blocs de 20 via `IntersectionObserver`.

---

## 7. C2PA, Badges & Sécurité

- **Vérification C2PA** : Implémentée dans `js/c2pa-utils.js`, badge `c2pa-badge`, modale `xera-c2pa-modal`, détection d'outils IA (Firefly, Midjourney, OpenAI, etc.).
- **Règles d'Attribution des Badges** :
  1. **Badge `"tech"` (Automatique)** : 1 post/jour pendant 7 jours consécutifs. Révoqué après 3 jours sans post.
  2. **Badges d'Abonnement** : `verified_gold` (Plan Pro/Elite) ou `verified` (Plan Standard/Medium).
  3. **Badges Admin / Registre** : `creator`, `staff`, `page` attribués manuellement via `verification_requests`.
- **Modération & Sécurité** : Blocage d'utilisateurs (`user_blocks`), retours (`feedback_inbox`), modération du chat live. Enpoints `/api/report` directs marqués non implémentés.

---

## 8. API & Développeurs

- **API Publique Tiers** : **Aucune API publique tiers** ouverte actuellement (pas de clés API tiers, pas d'OAuth2 tiers, pas de rate limiting tiers).
- **API Internes** : Endpoints `/api/*` réservés exclusivement à l'application web XERA1.
- **Statut** : API publique pour tiers "Prochainement disponible / En cours de spécification".

---

## 9. Modèle Économique & Tarification

- **Abonnements SaaS** : Standard ($2.99/mo), Medium ($7.99/mo), Pro ($14.99/mo ou $25/mo), avec -20% en annuel.
- **Mobile Money** : Paiements via KPay (Airtel Money, Vodacom M-Pesa, Orange Money).
- **Monétisation Créateurs** : Tipping + $0.40 / 1000 vues sur vidéos > 60s versés sur compte KPay, commission plateforme de 20% (80% net créateur).
