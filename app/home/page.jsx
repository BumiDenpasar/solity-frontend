// /pages/notes.js

import Link from "next/link";
import NotesList from "../../components/NotesList";

export default function Notes() {
   
    return (
        <div className="w-full">
            <Link className="button" href={'/home/notes/create'}>+ Add Notes</Link>
            <NotesList/>
        </div>
    );
}