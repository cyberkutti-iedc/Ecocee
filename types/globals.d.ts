export {}

export type Roles = "admin" | "moderator" | "intern" | "user" | "lead";

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            status?: Roles;
        };
    }
}

