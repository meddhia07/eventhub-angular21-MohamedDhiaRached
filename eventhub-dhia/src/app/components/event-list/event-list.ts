import { Component, computed, effect, signal } from '@angular/core';
import { EVENTS } from '../../data/events.data';
import { EventItem } from '../../models/event.model';
import { EventCard } from '../event-card/event-card';

const ALL = 'Tous';
const STORAGE_KEY = 'eventhub-favorites';

@Component({
  selector: 'app-event-list',
  imports: [EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  events = signal<EventItem[]>(EVENTS);
  favorites = signal<number[]>(this.loadFavorites());
  selectedCategory = signal(ALL);
  search = signal('');

  favoritesCount = computed(() => this.favorites().length);

  categories = computed(() => [ALL, ...new Set(this.events().map((e) => e.category))]);

  filteredEvents = computed(() => {
    const category = this.selectedCategory();
    const term = this.search().trim().toLowerCase();
    return this.events().filter(
      (e) =>
        (category === ALL || e.category === category) &&
        (term === '' || e.title.toLowerCase().includes(term)),
    );
  });

  constructor() {
    // Conserve les favoris quand on navigue ou recharge la page
    effect(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.favorites()));
      } catch {
        /* stockage indisponible : on ignore */
      }
    });
  }

  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }

  onSearch(event: Event) {
    this.search.set((event.target as HTMLInputElement).value);
  }

  isFavorite(id: number): boolean {
    return this.favorites().includes(id);
  }

  toggleFavorite(id: number) {
    this.favorites.update((list) =>
      list.includes(id) ? list.filter((f) => f !== id) : [...list, id],
    );
  }

  private loadFavorites(): number[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as number[]) : [];
    } catch {
      return [];
    }
  }
}
