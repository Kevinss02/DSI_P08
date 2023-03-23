import { Revista } from './Revista'
import { Observable } from './IObservable';
import { Observer } from './IObserver';

/**
 * Clase Subscriptor, representa un usuario subscriptor
 * @class
 * @implements Interfaz Observer
 */
export class Subscriptor implements Observer {
  private _notified: boolean = false;
  /**
   * Constructor de la clase Subscriptor
   * @param _subsName - Representa el nombre del subscriptor
   * @param _subsID - Representa el ID del subscriptor
   */
  constructor(private _subsName: string, private _subsID: number) {}
  
  /**
   * Retorna el nombre del subscriptor
   */
  get subsName(): string { return this._subsName; }

  /**
   * Retorna el ID del subscriptor
   */
  get subsID(): number { return this._subsID; }
  
  /**
   * Retorna la variable bool que indica si el subscriptor fue notificado
   */
  get notified(): boolean { return this._notified; }

  /**
   * Método que permite actualizar el estado del subscriptor tras recibir
   * una llamada de la Subscripción
   * @param observable - Representa un objeto al que está subscrito
   */
  update(observable: Observable): void {
    this._notified = true;
    if (observable instanceof Revista) {
      console.log(
        `I am a Subscriptor called ${this._subsName} ` +
          `with ID: ${this._subsID} ` +
          `and I have observed that Revista ${observable.revistaName} ` +
          `has published a new Publication called ${observable.lastPublication}`
      );
    }
  }
}