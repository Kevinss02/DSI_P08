import 'mocha';
import { expect } from 'chai';
import { Revista } from '../src/Revista';
import { Subscriptor } from '../src/Subscriptor';
import { Observable } from '../src/IObservable';
import { Observer } from '../src/IObserver';

describe("Revista", () => {
  it("should subscribe a new observer", () => {
    const revista = new Revista("Revista1", 0);
    const observer = new Subscriptor("firstSubscriptor", 0);

    revista.subscribe(observer);

    expect(revista.observers).to.include(observer);
  });

  it("should throw an error when subscribing an already subscribed observer", () => {
    const revista = new Revista("Revista1", 0);
    const observer = new Subscriptor("firstSubscriptor", 0);

    revista.subscribe(observer);

    expect(() => revista.subscribe(observer)).to.throw(
      "The observer had already been subscribed"
    );
  });

  it("should unsubscribe an existing observer", () => {
    const revista = new Revista("Revista1", 0);
    const observer = new Subscriptor("firstSubscriptor", 0);

    revista.subscribe(observer);
    revista.unsubscribe(observer);

    expect(revista.observers).to.not.include(observer);
  });

  it("should throw an error when unsubscribing a non-subscribed observer", () => {
    const revista = new Revista("Revista1", 0);
    const observer = new Subscriptor("firstSubscriptor", 0);

    expect(() => revista.unsubscribe(observer)).to.throw(
      "The observer has not been subscribed"
    );
  });

  it("should notify all observers when a new publication is added", () => {
    const revista = new Revista("Revista1", 0);
    const observer1 = new Subscriptor("Juan", 0);
    const observer2 = new Subscriptor("Manuel", 1);
    revista.subscribe(observer1);
    revista.subscribe(observer2);
    revista.addNewPublication("Tintin 1");
    expect(observer1.notified).to.be.equal(true);
    expect(observer2.notified).to.be.equal(true);
  });
});
