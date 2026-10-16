import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventItem } from '../../models/event.model';

@Component({
  selector: 'app-event-card',
  imports: [RouterLink, DatePipe, CurrencyPipe, UpperCasePipe],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {
  event = input.required<EventItem>();
  isFavorite = input(false);
  toggleFavorite = output<number>();

  onToggle() {
    this.toggleFavorite.emit(this.event().id);
  }
}
