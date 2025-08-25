"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { Roles } from "@/types/globals";
import { revalidatePath } from "next/cache";

export async function  setRole(formData: FormData) {

    const { sessionClaims} = await auth()

    if(sessionClaims?.metadata?.status !== "admin"){
        throw new Error("Not Authorized");
    }

    const client = await clerkClient();
    const id = formData.get("id") as string;
    const status = formData.get("status") as Roles;


    try {
        await client.users.updateUser(id, {
            publicMetadata: { status }
        });
    }
        catch {
            throw new Error("Faild to set role");
        }
    
}



export async function  removeRole(formData: FormData) {

    const { sessionClaims} = await auth()

    if(sessionClaims?.metadata?.status !== "admin"){
        throw new Error("Not Authorized");
    }

    const client = await clerkClient();
    const id = formData.get("id") as string;
   


    try {
        await client.users.updateUser(id, {
            publicMetadata: { status: null },
        });
        revalidatePath("/admin");
    }
        catch {
            throw new Error("Faild to remove role");
        }
    
}
