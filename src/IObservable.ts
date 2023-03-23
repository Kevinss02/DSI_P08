import { Observer } from "./IObserver";

/**
 * Interfaz para clases Observables
 * @interface
 */
export interface Observable {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}
