export abstract class ViewModel {
    abstract load(): Promise<void>;
    abstract reset(): Promise<void>;
}
