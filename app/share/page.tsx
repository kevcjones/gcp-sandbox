"use client"

import { useState, FormEvent } from "react";

export default function SharingPage() {

    const [email, setEmail] = useState('')

    const createUser = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const res = await fetch('/share/api/user', {
            method: 'POST',
            body: JSON.stringify({
                email
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();
        console.log(data);
    }

    return (
        <div>
           <form onSubmit={createUser}>
            <input type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             name="email" />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}