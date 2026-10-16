import { Routes } from '@angular/router';
import { EventDetails } from './components/event-details/event-details';
import { EventList } from './components/event-list/event-list';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events', component: EventList, title: 'Événements - EventHub' },
  { path: 'events/:id', component: EventDetails, title: 'Détail - EventHub' },
  {
    path: 'about',
    // Lazy loading : le code de la page About est chargé à la première visite
    loadComponent: () => import('./components/about/about').then((m) => m.About),
    title: 'À propos - EventHub',
  },
  { path: '**', component: NotFound, title: 'Page introuvable - EventHub' },
];
