import { useEffect, useState } from 'react';
export default function useFetchContacts() {
    let [contacts, setContacts] = useState([]);
    let [pending, setpending] = useState(true);
    let [error, seterror] = useState(null);

    useEffect(() => {
        fetch("https://deviprasadkl.github.io/ContactsApi/ContactsDB.json")
            .then((res) => {
                if (res.ok === false) {
                    throw Error("Searching data not found in this API")
                }
                return res.json();
            })
            .then((data) => { setContacts(data.Contacts); setpending(false) })
            .catch((err) => { seterror(err.message); setpending(false) })
    }, []);

    return [contacts, pending, error];
}
