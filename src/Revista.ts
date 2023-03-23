import { Observer } from './IObserver'
import { Observable } from './IObservable';

/**
 * Clase Revista, sus instancias serán observadas por sus subscriptores
 * @class
 * @implements Interfaz Observable
 */
export class Revista implements Observable {
  private _observers: Observer[] = [];

  /**
   * Constructor de la clase Revista
   * @param _revistaName - Nombre de la revista
   * @param _revistaID - ID de la revista
   * @param _lastPublication - Última publicación añadida a la revista (por defecto es vacía)
   */
  constructor(
    private _revistaName: string,
    private _revistaID: number,
    private _lastPublication: string = ""
  ) {}

  /**
   * Retorna el nombre de la revista
   */
  get revistaName(): string {
    return this._revistaName;
  }

  /**
   * Retorna el ID de la revista
   */
  get revistaID(): number {
    return this._revistaID;
  }

  /**
   * Retorna la última publicación de la revista
   */
  get lastPublication(): string {
    return this._lastPublication;
  }
  
  /**
   * Retorna el array con los subscriptores
   */
  get observers() { return this._observers; }

  /**
   * Método que permite añadir un subscriptor a la revista
   * @param observer - Representa un subscriptor
   */
  subscribe(observer: Observer): void {
    if (this._observers.includes(observer)) {
      throw new Error("The observer had already been subscribed");
    } else {
      this._observers.push(observer);
    }
  }

  /**
   * Método que permite eliminar un subscriptor de la revista
   * @param observer - Representa un subscriptor
   */
  unsubscribe(observer: Observer): void {
    const index = this._observers.indexOf(observer);
    if (index === -1) {
      throw new Error("The observer has not been subscribed");
    } else {
      this._observers.splice(index, 1);
    }
  }

  /**
   * Método que permite notificar a los subscriptores de una nueva publicación lanzada
   */
  notify(): void {
    this._observers.forEach((observer) => observer.update(this));
  }

  /**
   * Método que permite añadir una nueva publicación a la revista
   * @param tittle
   */
  addNewPublication(tittle: string) {
    this._lastPublication = tittle;
    console.log("New publication has been published");
    this.notify();
  }
}
