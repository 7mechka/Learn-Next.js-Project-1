import { User } from "@/app/interface/interface";

export async function getUser(id: string): Promise<User | null> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        next: { revalidate: 10 }, // Указание времени для ISR (опционально)
    });

    if (!res.ok) return null;

    return res.json();
}