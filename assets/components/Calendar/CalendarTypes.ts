export type EventDefinition = {
    name: string;
    time: string;
    backgroundColor?: string;
};

export type DayDefinition = {
    name: string;
    number: string;
    events?: EventDefinition[];
};
