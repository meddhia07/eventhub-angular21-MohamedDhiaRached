import { EventItem } from '../models/event.model';

export const EVENTS: EventItem[] = [
  {
    id: 1,
    title: 'Atelier TypeScript',
    category: 'Atelier',
    date: '2026-11-15',
    place: 'Campus - Salle B12',
    price: 0,
    imageUrl: 'assets/typescript.svg',
    description:
      'Découverte de TypeScript : types, interfaces et génériques à travers des exercices pratiques.',
  },
  {
    id: 2,
    title: 'Atelier Angular Signals',
    category: 'Atelier',
    date: '2026-11-22',
    place: 'Campus - Labo Info 2',
    price: 15,
    imageUrl: 'assets/angular.svg',
    description:
      'Construire une application réactive avec les Signals, input() et output() d’Angular 21.',
  },
  {
    id: 3,
    title: 'Conférence IA et Avenir',
    category: 'Conférence',
    date: '2026-12-03',
    place: 'Amphithéâtre A',
    price: 0,
    imageUrl: 'assets/ia.svg',
    description:
      'Des chercheurs et des ingénieurs présentent l’impact de l’intelligence artificielle sur nos métiers.',
  },
  {
    id: 4,
    title: 'Conférence Cybersécurité',
    category: 'Conférence',
    date: '2026-12-10',
    place: 'Amphithéâtre B',
    price: 10,
    imageUrl: 'assets/cyber.svg',
    description:
      'Bonnes pratiques de sécurité, démonstrations d’attaques courantes et moyens de s’en protéger.',
  },
  {
    id: 5,
    title: 'Tournoi de Football Inter-Clubs',
    category: 'Sport',
    date: '2026-11-29',
    place: 'Stade universitaire',
    price: 5,
    imageUrl: 'assets/football.svg',
    description:
      'Tournoi amical entre les clubs de l’association. Inscription par équipe de 7 joueurs.',
  },
  {
    id: 6,
    title: 'Séance de Yoga en Plein Air',
    category: 'Sport',
    date: '2026-12-06',
    place: 'Jardin du campus',
    price: 0,
    imageUrl: 'assets/yoga.svg',
    description:
      'Séance de détente ouverte à tous, idéale avant la période des examens. Apportez votre tapis.',
  },
  {
    id: 7,
    title: 'Hackathon 24h',
    category: 'Compétition',
    date: '2027-01-17',
    place: 'Incubateur du campus',
    price: 20,
    imageUrl: 'assets/hackathon.svg',
    description:
      'Par équipes de 4, concevez un prototype en 24 heures. Prix pour les trois meilleurs projets.',
  },
  {
    id: 8,
    title: 'Rencontre Anciens et Étudiants',
    category: 'Rencontre',
    date: '2027-01-24',
    place: 'Café de l’association',
    price: 8,
    imageUrl: 'assets/rencontre.svg',
    description:
      'Échangez avec d’anciens étudiants sur leur parcours professionnel autour d’un buffet.',
  },
];
