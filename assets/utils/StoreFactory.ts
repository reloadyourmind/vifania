/* eslint-disable @typescript-eslint/no-unused-vars */
export class Singleton<Key, T> {
    private entities = new Map<Key, T>();

    constructor(private ctor: new (key: Key, ...args: any) => T) {}

    public getInstance(key: Key, ...args: any) {
        if (!this.entities.has(key)) {
            this.entities.set(key, new this.ctor(key, ...args));
        }

        return this.entities.get(key) as T;
    }
}
