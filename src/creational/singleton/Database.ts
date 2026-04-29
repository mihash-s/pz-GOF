// src/creational/singleton/Database.ts
export class Database {
    private static instance: Database;
    private connectionId: number;

    private constructor() {
        this.connectionId = Math.random();
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public query(sql: string): void {
        console.log(`[DB Conn:${this.connectionId}] Executing: ${sql}`);
    }
}
