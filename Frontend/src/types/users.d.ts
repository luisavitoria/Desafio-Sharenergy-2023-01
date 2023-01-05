
export interface Users {
    email: string;
    login: {
        uuid: string;
        username: string;
    }
    name: {
        title: string;
        first: string;
        last: string;
    }
    dob: {
        age: string;
    }
    picture: {
        large: string;
        medium: string
        thumbnail: string;
    },
}[]