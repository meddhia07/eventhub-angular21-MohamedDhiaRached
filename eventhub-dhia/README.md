# EventHub - Catalogue d'événements

Mini-projet Angular 21 : une application côté client pour consulter les événements d'une association étudiante (ateliers, conférences, sport, compétitions, rencontres), les filtrer, voir leur détail et gérer une liste de favoris. Les données sont définies dans le code TypeScript (aucune API, base de données ni authentification).

## Utilisation de l'IA

Ce projet a été réalisé avec l'aide de l'assistant Claude (Anthropic), avec l'accord de l'enseignant. Le code a été généré par l'assistant puis relu et publié par l'étudiant.

## Versions utilisées

| Outil | Version |
| --- | --- |
| Angular (core, router, common) | 21.2 |
| Angular CLI | 21.2 |
| TypeScript | 5.9 |
| Node.js | 20.20 |
| npm | 10.8 |

## Installation et lancement

```bash
git clone https://github.com/meddhia07/eventhub-angular21-MohamedDhiaRached.git
cd eventhub-angular21-MohamedDhiaRached/eventhub-dhia
npm install --legacy-peer-deps
npx ng serve
```

L'application est disponible sur http://localhost:4200.
`--legacy-peer-deps` évite un bug de npm 10 (`Cannot read properties of null (reading 'edgesOut')`) rencontré à l'installation.

Build de production : `npx ng build`.

## Structure des composants

```
src/app/
├── app.ts / app.config.ts / app.routes.ts   Composant racine, configuration, routes
├── models/event.model.ts                    Interface EventItem
├── data/events.data.ts                      Tableau des 8 événements
└── components/
    ├── header/          Header
    ├── event-list/      EventList
    ├── event-card/      EventCard
    ├── event-details/   EventDetails
    ├── not-found/       NotFound
    └── about/           About (chargé en lazy loading)
```

- **Header** : affiche le titre de l'application et le menu de navigation. `routerLinkActive` met en évidence la page courante.
- **EventList** : page `/events`. Elle contient les Signals (événements, favoris, catégorie sélectionnée, recherche), le filtre de catégorie et affiche les cartes avec `@for`.
- **EventCard** : carte d'un événement. Elle reçoit l'événement via `input()`, présente ses informations avec des pipes, et signale le clic sur le bouton favori au parent via `output()`.
- **EventDetails** : page `/events/:id`. Elle récupère l'identifiant de la route avec `input()` et `withComponentInputBinding()`, et affiche un message si l'événement n'existe pas.
- **NotFound** : page 404 affichée pour toute URL inconnue (`**`).
- **About** : page de présentation `/about`, chargée à la demande avec `loadComponent()`.

## Fonctionnalités réalisées

- Projet standalone, 8 événements, 5 catégories, 3 événements gratuits.
- Liste avec `@for (...; track event.id)` et `@empty` (« Aucun événement disponible »).
- Signals : liste, favoris, compteur calculé (`computed`), catégorie sélectionnée, texte de recherche.
- Favoris : ajout/retrait via `output()` puis `update()` dans le parent, compteur, état visuel (`@if/@else` et `[class.active]`). Les favoris sont conservés dans le `localStorage`.
- Filtre par catégorie (Tous, Atelier, Conférence, Sport, Compétition, Rencontre) et recherche par titre (permet aussi de tester la liste vide).
- Pipes : `date` (en français), `currency`, `uppercase`.
- Routes : `/` redirige vers `/events`, `/events/:id`, `/about` (lazy), `**` (NotFound).
- Interface responsive (ordinateur et téléphone).

## Tests manuels

| Cas | Résultat attendu |
| --- | --- |
| Affichage initial | 8 cartes, compteur de favoris à 0 (ou valeur sauvegardée) |
| Filtre | Un clic sur « Sport » n'affiche que les événements sportifs |
| Liste vide | Rechercher « zzz » affiche « Aucun événement disponible » |
| Favoris | Le bouton bascule l'état de la carte et le compteur |
| Détail | « Voir les détails » ouvre `/events/:id` |
| Identifiant inexistant | `/events/999` affiche « Événement introuvable » |
| Lien actif | L'entrée du menu de la page courante est surlignée |
| URL inconnue | `/xyz` affiche la page 404 |
| Lazy loading | Onglet Network : un chunk JS (`about`) est chargé à la première visite de `/about` |

## Captures d'écran

À ajouter dans `docs/` puis référencer ici :

- `docs/liste.png` : liste des événements avec le filtre
- `docs/favoris.png` : cartes en favoris et compteur
- `docs/detail.png` : page de détail
- `docs/mobile.png` : affichage téléphone
