# Documentation complète de XERA1

> Référence fonctionnelle, technique et opérationnelle de XERA1. Cette page décrit le comportement attendu et les points vérifiables dans le dépôt. Elle ne remplace pas les conditions contractuelles ni la configuration de l'environnement de production.

**Version documentaire :** 1.0  
**Dernière révision :** 3 septembre 2026  
**Langue :** français  
**Public :** utilisateurs, créateurs, recruteurs, développeurs, opérateurs et administrateurs

## 1. Lire cette documentation

### Parcours recommandés

| Vous êtes           | Commencez par                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------ |
| Nouveau builder     | [Démarrage utilisateur](#3-démarrage-utilisateur)                                                            |
| Créateur de contenu | [Publication et provenance](#6-publication-et-provenance)                                                    |
| Recruteur           | [Recherche de talents](#9-recruteurs-et-profils-pro)                                                         |
| Développeur         | [Architecture](#11-architecture-technique), puis [API](#12-api-et-intégrations)                              |
| Exploitant          | [Installation](#13-installation-locale), [Déploiement](#14-déploiement) et [Observabilité](#16-exploitation) |
| Administrateur      | [Sécurité](#15-sécurité-et-confidentialité) et [Opérations sensibles](#17-opérations-sensibles)              |

### Conventions

- **ARC** désigne un projet ou objectif structuré.
- **Jalon** désigne une étape d'un ARC.
- **Trace** désigne une preuve de progression publiée.
- **Trajectory** désigne l'historique visible d'un builder.
- `PUBLIC` indique une donnée destinée à être visible par les autres utilisateurs.
- `PRIVATE` indique une donnée qui doit rester côté serveur ou dans un coffre de secrets.
- Les noms de variables d'environnement sont écrits en `MONOSPACE`.

## 2. Vision et périmètre

XERA1 est une plateforme sociale pour les personnes qui construisent : développeurs, créateurs, entrepreneurs, étudiants et indie hackers. Son unité de valeur n'est pas uniquement le post final, mais la progression prouvée dans le temps.

### Promesse produit

1. Structurer un objectif avec un ARC.
2. Enregistrer régulièrement le travail réel avec des Traces.
3. Rendre la progression lisible dans une Trajectory.
4. Découvrir des builders actifs et interagir avec eux.
5. Donner aux recruteurs un signal complémentaire au CV et au portfolio.

### Ce que XERA1 n'est pas

- Un système qui certifie automatiquement la vérité de toutes les déclarations.
- Un substitut à une vérification humaine, à un entretien ou à une due diligence.
- Une garantie d'emploi, de financement, de performance ou de résultat.
- Un endroit où publier des secrets, des mots de passe, des données personnelles ou des informations confidentielles.

## 3. Démarrage utilisateur

### Prérequis

Un navigateur moderne suffit. XERA1 peut être installée comme PWA lorsque le navigateur propose l'action **Installer** ou **Ajouter à l'écran d'accueil**.

### Créer un compte

1. Ouvrez `https://xera1.xyz`.
2. Choisissez l'inscription par email ou un fournisseur OAuth activé.
3. Avec l'email, confirmez le message reçu avant de poursuivre.
4. Vérifiez que la session est bien active avant de publier.

Ne partagez jamais un lien de confirmation, un jeton de session ou une capture contenant une information d'authentification.

### Compléter le profil

Un profil utile contient au minimum :

| Champ                | Règle pratique                                               | Visibilité |
| -------------------- | ------------------------------------------------------------ | ---------- |
| Nom d'utilisateur    | Unique, stable et lisible dans une URL                       | PUBLIC     |
| Nom affiché          | Nom personnel ou nom de construction                         | PUBLIC     |
| Bio                  | Ce que vous construisez et pour qui                          | PUBLIC     |
| Avatar               | Image dont vous détenez les droits                           | PUBLIC     |
| Domaine              | `Developer`, `Creator`, `Entrepreneur`, `Student` ou `Other` | PUBLIC     |
| Liens et coordonnées | Uniquement si vous acceptez leur exposition                  | PUBLIC     |

Évitez les informations sensibles dans la bio, les Traces, les commentaires et les métadonnées de fichiers.

### Créer un ARC

Un ARC doit répondre à quatre questions :

1. Quel résultat cherchez-vous ?
2. Pourquoi ce résultat est-il important ?
3. Comment saurez-vous qu'il est atteint ?
4. Quelles étapes intermédiaires rendent l'avancement observable ?

Un ARC efficace commence avec trois à cinq jalons. Chaque jalon doit être vérifiable, daté si possible et assez petit pour produire une Trace.

### Publier une Trace

Une Trace utile décrit :

- le contexte ou l'objectif du jour ;
- l'action réalisée ;
- le résultat observable ;
- le blocage rencontré ;
- la prochaine étape ;
- une pièce de preuve lorsque c'est pertinent.

Avant publication, vérifiez les noms, URLs privées, clés, données clients, visages et informations de localisation visibles dans les pièces jointes.

## 4. Concepts métier détaillés

### ARC

Un ARC est le conteneur narratif et fonctionnel d'un projet. Il relie un objectif, des jalons et des Traces. Un builder peut mener plusieurs ARCs en parallèle, mais la lisibilité baisse lorsque les objectifs se recouvrent ou restent indéfinis.

**États recommandés :** idée, actif, en pause, terminé, abandonné. Le code et l'interface peuvent employer des libellés différents selon la page ; l'état de référence doit être confirmé dans le schéma et les requêtes Supabase de l'environnement déployé.

### Jalon

Un jalon est un point de contrôle. Il ne doit pas être confondu avec une intention vague. Un bon jalon possède un résultat attendu et une condition de fin.

### Trace

Une Trace peut être textuelle ou contenir des médias et des métriques. Une Trace n'est pas une preuve absolue : elle constitue un élément horodaté du journal public et doit être interprétée avec son contexte.

### Trajectory

La Trajectory est la lecture temporelle de l'activité : régularité, progression, jalons et interactions. Une activité élevée ne signifie pas automatiquement une qualité élevée. Les métriques doivent être lues avec la période, le type de contenu et les limites de collecte.

### Interactions

Les interactions comprennent notamment les suivis, j'aime, commentaires, partages, vues et messages. Elles servent à la relation sociale et, selon le flux, à la personnalisation du feed. Elles ne doivent pas être artificiellement générées ou automatisées pour contourner les mécanismes de confiance.

## 5. Parcours produit

### Feed

Le feed Abonnements privilégie les comptes suivis. Le feed Découverte combine fraîcheur, pertinence, activité et signaux d'engagement. Les pourcentages ou pondérations affichés dans les supports produit sont des objectifs de composition, pas une garantie identique à chaque chargement.

Pour améliorer un feed : suivez des builders pertinents, masquez les contenus inadaptés, utilisez les filtres disponibles et revenez régulièrement. Pour diagnostiquer un feed vide : vérifiez la session, la connectivité, les filtres, l'existence de contenu et les erreurs réseau.

### Recherche

La recherche peut viser des builders, ARCs, Traces ou profils professionnels selon les fonctionnalités activées. Utilisez des termes discriminants, puis vérifiez le profil et la date de la dernière activité plutôt que de vous fier au seul classement.

### Messagerie

La messagerie est destinée aux échanges autorisés entre utilisateurs. Ne transmettez pas de secrets ni de données réglementées. Signalez les abus, bloquez l'interlocuteur si la fonction est disponible et conservez le contexte nécessaire au support sans republier de données privées.

### Diffusion en direct

Avant un direct : testez caméra, microphone, connexion et permissions. Pendant le direct : modérez le chat, ne diffusez pas de données confidentielles et prévoyez une sortie en cas de panne. Après le direct : vérifiez la visibilité de l'enregistrement, les interactions et les éventuels signalements.

### Notifications

Les notifications push nécessitent l'autorisation du navigateur, un abonnement push valide et une configuration VAPID côté serveur. Un refus côté navigateur ne peut pas être corrigé uniquement par XERA1 : l'autorisation doit être réinitialisée dans les réglages du site.

## 6. Publication et provenance

### Médias

Publiez uniquement des médias dont vous possédez les droits ou pour lesquels vous disposez d'une autorisation. Contrôlez les métadonnées EXIF et les éléments d'arrière-plan avant envoi.

### Provenance C2PA

Le dépôt contient des utilitaires qui normalisent les résultats d'inspection C2PA et détectent notamment les indicateurs de contenu généré par IA. La présence d'un drapeau `isAI` décrit une information de provenance disponible ; son absence ne prouve pas qu'un média n'a pas été généré ou modifié par IA.

Les informations pouvant être exposées comprennent l'émetteur, l'outil, la date de création et l'historique d'actions. Toute décision éditoriale ou de confiance doit conserver cette nuance.

### Bon format de Trace

```text
Objectif : réduire le temps de chargement du feed.
Fait : ajouté un index et comparé 3 requêtes sur un jeu de test.
Résultat : p95 passé de 840 ms à 410 ms.
Blocage : la mesure de production reste à confirmer.
Suite : instrumenter le endpoint et comparer sur 24 h.
```

## 7. Créateurs, abonnements et monétisation

Les pages de création, abonnements, crédits, checkout, commissions, paiements et retraits appartiennent à une zone plus sensible que le feed public.

### Règles de sécurité financière

- Ne mettez jamais une clé de paiement dans le HTML ou le JavaScript client.
- Vérifiez côté serveur le montant, la devise, l'identité et l'état de la transaction.
- Traitez les webhooks comme non fiables jusqu'à validation de leur signature.
- Rendez les opérations de paiement idempotentes.
- Journalisez les identifiants de transaction, jamais les secrets complets.
- Séparez le solde affiché, le solde disponible et le solde en attente.
- Protégez les actions de retrait par ré-authentification et contrôle antifraude.

Les montants, commissions, délais et conditions doivent être lus dans la configuration et les conditions commerciales de l'environnement concerné. Cette documentation ne les remplace pas.

## 8. PWA et compatibilité

`manifest.json` décrit l'installation et l'identité de la PWA. Le service worker `sw.js` peut mettre en cache des ressources ; lors d'une mise à jour, un ancien cache peut continuer à servir des fichiers. Pour diagnostiquer un écran obsolète : recharge forcée, contrôle de la version des assets, puis désinscription du service worker en dernier recours.

Vérifiez au minimum : écran étroit, clavier virtuel, navigation clavier, lecteur d'écran, permissions média, perte de réseau et retour après veille de l'appareil.

## 9. Recruteurs et profils Pro

Le parcours recruteur doit être traité comme une recherche assistée, jamais comme une décision automatique.

### Lire un profil

Examinez l'identité, les ARCs, la régularité, les dates, les résultats et les limites de preuve. Distinguez :

- activité publiée ;
- résultat démontré ;
- validation externe ;
- auto-déclaration ;
- contenu assisté ou généré par IA.

### Contacter un builder

Présentez le contexte, le rôle, la localisation ou le mode de travail, les étapes du recrutement et le traitement des données. Ne demandez pas d'informations protégées ou disproportionnées avant l'étape appropriée.

### Limites

Un classement, un badge ou un indicateur de constance ne doit pas être utilisé comme décision unique. Les biais de visibilité, de disponibilité et de langue peuvent affecter les résultats.

## 10. Rôles et permissions

| Rôle            | Capacités typiques                         | Contrôle requis                         |
| --------------- | ------------------------------------------ | --------------------------------------- |
| Visiteur        | Lire le contenu public                     | Aucun secret côté client                |
| Utilisateur     | Gérer profil, ARCs, Traces et interactions | Session valide                          |
| Créateur        | Diffuser, gérer offres et métriques        | Contrôle serveur et règles commerciales |
| Recruteur       | Rechercher et contacter selon son plan     | Autorisation et confidentialité         |
| Administrateur  | Modérer et opérer la plateforme            | MFA, audit et moindre privilège         |
| Service backend | Exécuter des tâches serveur                | Clé de service hors navigateur          |

Les permissions effectives sont celles imposées par Supabase RLS, les handlers API et la configuration déployée. Une permission affichée dans l'interface ne constitue pas à elle seule un contrôle de sécurité.

## 11. Architecture technique

### Vue d'ensemble

```text
Navigateur / PWA
    | HTML, CSS, JS, Supabase client, Web Push
    v
Routes API Vercel ou serveur Express
    | authentification, validation, métier, cache, webhooks
    +--> Supabase Auth
    +--> Supabase PostgreSQL / Storage
    +--> Firebase Admin / Web Push
    +--> Prestataire de paiement
    +--> Services de direct et médias
```

### Organisation du dépôt

| Répertoire             | Responsabilité                                        |
| ---------------------- | ----------------------------------------------------- |
| Pages HTML racine      | Surfaces produit multi-pages                          |
| `js/`                  | Logique client, intégrations et contrôles d'interface |
| `css/`                 | Styles par surface et styles transverses              |
| `api/`                 | Handlers Vercel et routes API                         |
| `server/`              | Serveurs Express, métier, notifications et paiements  |
| `sql/`                 | Schémas, index, fonctions et politiques               |
| `tests/`               | Tests JavaScript ciblés                               |
| `Documentation_Xera1/` | Site et référence documentaire                        |

### Flux d'authentification

1. Le client obtient une session via Supabase Auth.
2. Le client envoie le jeton selon le mécanisme attendu par le handler.
3. Le serveur vérifie l'identité et la permission.
4. La requête métier applique les règles d'accès et de validation.
5. La réponse ne renvoie que les champs autorisés.

Le serveur optimisé dispose en outre d'un suivi de session en mémoire avec expiration après quatre heures d'inactivité. Ce mécanisme est local au processus : en multi-instance, il ne remplace pas une gestion de session partagée.

### Cache et statiques

Le serveur optimisé sert les fichiers statiques avec ETag, `Last-Modified` et des durées de cache différenciées. Les fichiers JS/CSS/images peuvent être fortement mis en cache ; les HTML et JSON doivent être revalidés plus fréquemment. Lors d'une mise en production, utilisez des noms d'assets versionnés ou invalidez explicitement les caches.

## 12. API et intégrations

### Points d'entrée vérifiables

- `GET /api/health` : état minimal du serveur optimisé, présence du push, timeout de session et cache.
- `POST /api/auth/...` : flux OAuth selon le handler configuré.
- Routes sous `/api/` : fonctions produit, administration, rappels et monétisation selon les fichiers présents.
- `POST /api/ask` du site documentaire : question envoyée au serveur Gemini, uniquement si la clé serveur est configurée.

La liste exacte des routes doit être générée depuis les handlers déployés avant publication d'un contrat externe. Les pages API historiques contiennent des exemples conceptuels qui peuvent être plus larges que les routes présentes dans cette version du dépôt.

### Requête authentifiée

```bash
curl -i \
  -H "Authorization: Bearer $XERA1_TOKEN" \
  -H "Content-Type: application/json" \
  https://xera1.xyz/api/health
```

Ne journalisez jamais l'en-tête `Authorization`. Utilisez des timeouts, gérez `401`, `403`, `404`, `409`, `429` et `5xx`, puis appliquez un backoff borné pour les erreurs transitoires.

### Contrat d'erreur conseillé

```json
{
    "error": "Message lisible",
    "code": "STABLE_ERROR_CODE",
    "requestId": "id-de-correlation"
}
```

Le code client ne doit pas dépendre du texte libre du message. Les réponses d'un endpoint doivent être validées avant utilisation et les champs optionnels doivent être traités comme absents.

## 13. Installation locale

### Prérequis

- Node.js compatible avec les dépendances du `package.json`.
- Accès à un projet Supabase de développement.
- Variables de configuration locales.
- Pour les notifications : clés VAPID.
- Pour les paiements, OAuth ou IA : clés de développement correspondantes.

### Installation

```bash
npm install
```

### Commandes disponibles

| Commande                             | Usage                                            |
| ------------------------------------ | ------------------------------------------------ |
| `npm test`                           | Exécute le test ciblé `tests/c2pa-utils.test.js` |
| `npm run start`                      | Lance `server/optimized-server.js`               |
| `npm run dev`                        | Alias du serveur optimisé dans l'état actuel     |
| `npm run api`                        | Lance `server/monetization-server.js`            |
| `node Documentation_Xera1/server.js` | Lance le site documentaire local                 |

### Variables principales

| Variable                         | Usage                               | Secret       |
| -------------------------------- | ----------------------------------- | ------------ |
| `APP_BASE_URL`                   | Origines autorisées et URL publique | Non          |
| `PORT`                           | Port Express                        | Non          |
| `SUPABASE_URL`                   | Projet Supabase                     | Non sensible |
| `SUPABASE_SERVICE_ROLE_KEY`      | Accès serveur Supabase              | Oui          |
| `VAPID_PUBLIC_KEY`               | Push navigateur                     | Non          |
| `VAPID_PRIVATE_KEY`              | Signature push                      | Oui          |
| `PUSH_CONTACT_EMAIL`             | Contact VAPID                       | Non          |
| `RETURN_REMINDER_HOURS`          | Heures des rappels                  | Non          |
| `RETURN_REMINDER_WINDOW_MINUTES` | Fenêtre de rappel                   | Non          |
| `GEMINI_API_KEY`                 | Assistant documentaire              | Oui          |

Le nom et le format des autres variables doivent être confirmés dans le handler concerné avant configuration. Ne commitez jamais `.env`.

## 14. Déploiement

### Préparation

1. Séparez les projets Supabase de développement, préproduction et production.
2. Appliquez les SQL dans l'ordre prévu et vérifiez les index et politiques RLS.
3. Configurez les variables secrètes dans le gestionnaire de la plateforme.
4. Configurez CORS avec les origines exactes, jamais `*` pour les flux authentifiés.
5. Générez ou vérifiez les clés VAPID dans l'environnement cible.
6. Configurez les domaines OAuth, webhooks et URLs de retour.
7. Lancez les tests puis un smoke test authentifié.

### Smoke test de mise en production

- `GET /api/health` retourne `ok: true`.
- Une inscription et une reconnexion fonctionnent.
- Un profil peut être lu et modifié selon ses droits.
- La création et la lecture d'un ARC fonctionnent.
- Une Trace texte et un média autorisé sont traités.
- Un suivi, un j'aime, un commentaire et un message respectent leurs permissions.
- Une notification est reçue avec des clés VAPID valides.
- Un paiement de test et son webhook sont idempotents.
- Les logs ne contiennent aucun secret.

## 15. Sécurité et confidentialité

### Principes

- Moindre privilège pour chaque rôle et clé.
- Validation côté serveur, même si le client valide déjà.
- RLS activé et testé sur toutes les tables exposées.
- Protection contre XSS, injection, CSRF selon le mode d'authentification et abus de ressources.
- Limitation de débit sur authentification, messagerie, upload, recherche et paiements.
- Journalisation des actions sensibles avec identifiant de corrélation.
- Suppression et export des données selon les règles légales applicables.

### Données à ne jamais publier

Clés API, jetons, mots de passe, données bancaires, informations médicales, données clients confidentielles, secrets commerciaux, fichiers privés et tokens OAuth.

### En-têtes observés

Le serveur optimisé configure notamment `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, ETag et cache. Ajoutez et vérifiez une CSP, HSTS en HTTPS, une politique de permissions et une stratégie de cookies adaptée dans l'environnement public.

## 16. Exploitation

### Signaux à surveiller

- taux d'erreur par route et par statut ;
- latence p50/p95/p99 ;
- erreurs d'authentification et expirations ;
- échecs d'upload et de traitement média ;
- livraisons push et taux d'échec ;
- paiements réussis, échoués, remboursés et en attente ;
- profondeur des files et tâches de rappel ;
- saturation mémoire et redémarrages ;
- erreurs Supabase et temps de requête.

### Procédure de diagnostic

1. Reproduire avec l'identifiant utilisateur et l'heure UTC.
2. Vérifier le statut, le corps d'erreur et `requestId`.
3. Vérifier les logs serveur et la dépendance appelée.
4. Comparer avec la dernière version déployée.
5. Vérifier configuration, cache, RLS et migration concernée.
6. Corriger, tester le scénario nominal et le scénario d'échec.
7. Documenter l'impact et la mesure de prévention.

### Rappels

Les rappels sont pilotés par `RETURN_REMINDER_HOURS`, `RETURN_REMINDER_WINDOW_MINUTES` et `RETURN_REMINDER_SWEEP_MS`. Vérifiez le fuseau horaire, l'idempotence, le respect du consentement et le comportement en cas de redémarrage avant activation en production.

## 17. Opérations sensibles

### Modération

Conservez le contenu signalé, l'identité du signalant avec accès restreint, la raison, l'état du traitement et la décision. Séparez masquage temporaire, suppression définitive et suspension de compte. Toute décision doit être traçable et réversible lorsque le cadre le permet.

### Retrait et remboursement

Bloquez les doublons par clé d'idempotence. Ne créditez un solde qu'après l'état confirmé côté prestataire. Pour un incident, geler l'opération concernée sans modifier directement le solde historique ; appliquer une écriture compensatoire auditable.

### Rotation des secrets

1. Créer le nouveau secret.
2. Déployer la configuration compatible avec l'ancien et le nouveau si nécessaire.
3. Vérifier les appels.
4. Révoquer l'ancien.
5. Rechercher les usages résiduels dans les logs et la configuration.

## 18. Tests et qualité

Le test actuellement déclaré par `package.json` couvre les utilitaires C2PA et la résolution de cible des messages Pro. Il ne constitue pas une couverture complète de XERA1.

### Matrice minimale à compléter

| Domaine   | Cas nominal                     | Cas d'échec                           |
| --------- | ------------------------------- | ------------------------------------- |
| Auth      | inscription, OAuth, reconnexion | jeton absent, expiré, révoqué         |
| Profils   | lecture, modification           | autre propriétaire, données invalides |
| ARC/Trace | création, édition, média        | fichier interdit, doublon, offline    |
| Feed      | suivi et découverte             | vide, pagination, filtre invalide     |
| Social    | like, commentaire, message      | abus, blocage, permission             |
| Push      | inscription et livraison        | permission refusée, VAPID absent      |
| Paiement  | paiement et webhook             | signature invalide, replay, timeout   |
| Sécurité  | RLS et rate limit               | accès croisé, injection, XSS          |
| PWA       | cache et mise à jour            | ancien service worker, réseau coupé   |

### Commande de validation de base

```bash
npm test
```

Complétez cette commande par des tests d'intégration sur un projet Supabase de test et par un smoke test navigateur avant toute publication.

## 19. Aide et dépannage

### Page blanche ou assets anciens

Vérifiez la console, l'onglet réseau, le service worker, le cache et le chemin de l'asset. Rechargez après invalidation contrôlée du cache.

### `401 Unauthorized`

Vérifiez la présence du jeton, son expiration, l'utilisateur courant, l'origine CORS et l'horloge système. Ne contournez jamais le contrôle en exposant la service role key au navigateur.

### Notifications absentes

Vérifiez l'autorisation du navigateur, l'abonnement enregistré, les clés VAPID, la compatibilité du service worker, l'endpoint push et les logs d'envoi.

### Paiement bloqué

Comparez l'identifiant de commande côté client et serveur, l'état du webhook, la signature, l'idempotence et la devise. Ne considérez pas une redirection client comme une confirmation de paiement.

### Assistant documentaire indisponible

Le serveur documentaire renvoie une erreur de configuration si `GEMINI_API_KEY` manque. La clé doit rester côté serveur ; l'interface ne doit jamais l'enregistrer dans `docs.html`.

### Données absentes

Vérifiez la session, la requête réseau, les politiques RLS, le nom de table, les migrations appliquées et les filtres actifs. Distinguez une liste vide d'une erreur silencieusement masquée.

## 20. Glossaire

| Terme      | Définition                                              |
| ---------- | ------------------------------------------------------- |
| ARC        | Projet ou objectif structuré avec jalons et Traces      |
| Trace      | Mise à jour horodatée de progression                    |
| Trajectory | Vue historique de l'évolution d'un builder              |
| Builder    | Personne qui construit et documente un projet           |
| RLS        | Row Level Security de PostgreSQL/Supabase               |
| VAPID      | Identité cryptographique utilisée pour Web Push         |
| C2PA       | Standard de provenance et d'authenticité de contenu     |
| PWA        | Application web installable                             |
| RLS        | Politiques qui limitent les lignes accessibles par rôle |
| Webhook    | Notification serveur à serveur d'un événement           |

## 21. Limites et feuille de route documentaire

Cette référence est plus complète que les pages historiques, mais certains contrats doivent encore être dérivés automatiquement du déploiement réel : inventaire exhaustif des routes, schéma SQL consolidé, scopes exacts, limites de débit effectives, fournisseurs OAuth actifs, tarifs, règles de rétention et couverture de tests d'intégration.

La prochaine amélioration recommandée est d'ajouter une génération CI qui compare la documentation API au code, valide les liens internes, exécute les smoke tests et publie la version documentaire avec le commit applicatif correspondant.

## 22. Références du dépôt

- [Guide de démarrage](quickstart.mdx)
- [Configuration du compte](account-setup.mdx)
- [Concepts ARC, Trace et Trajectory](concepts/)
- [Fonctionnalités](features/)
- [Référence API historique](api/)
- [Aide et dépannage](help/)
- [Documentation légale](legal/)
- [README du dépôt principal](../README.md)
- [Test C2PA](../tests/c2pa-utils.test.js)
