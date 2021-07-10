export class Route {
    readonly title: string;
    readonly startPosition: {
        latitude: string,
        longitude: string
    };
    readonly endPosition: {
        latitude: string,
        longitude: string
    };
}

export class Routes {
    [key: number]: Route;
}