import { Observable } from "./IObservable";

/**
 * Interfaz para objetos Observer
 * @interface
 */
export interface Observer {
  update(observable: Observable): void;
}
  