export {}

export type Roles = "admin" | "moderator" | "intern" | "user";

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            status?: Roles;
        };
    }
}

