import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EVENTS } from '../../data/events.data';

@Component({
  selector: 'app-event-details',
  imports: [RouterLink, DatePipe, CurrencyPipe, UpperCasePipe],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {
  // Alimenté par le paramètre de route :id grâce à withComponentInputBinding()
  id = input<string>();

  event = computed(() => EVENTS.find((e) => e.id === Number(this.id())));
}
