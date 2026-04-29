// src/behavioral/observer/NewsAgency.ts
interface Observer {
    update(news: string): void;
}

export class NewsAgency {
    private observers: Observer[] = [];

    subscribe(o: Observer) { this.observers.push(o); }
    notify(news: string) {
        this.observers.forEach(o => o.update(news));
    }
}

export class NewsChannel implements Observer {
    constructor(private name: string) {}
    update(news: string) {
        console.log(`[${this.name}] Received breaking news: ${news}`);
    }
}
