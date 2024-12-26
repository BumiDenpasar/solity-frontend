import { getNotesData } from "@/lib/notes";
import { formatDistanceToNow } from 'date-fns'; // Import the function
import { cookies } from "next/headers";
import Link from "next/link";


const NotesList = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;
  const all = await getNotesData(token);
  const recent = all.data.slice(0, 2);

  return (
    <div className="flex flex-col justify-between mt-8 space-y-5 lg:space-x-10 lg:flex-row lg:justify-normal lg:space-y-0">
      <div className="w-full">
        <h1 className="title">Recently Updated</h1>
        <div className="flex space-x-3">
          {recent.map(note => (
            <Link className="w-1/2" key={note.id} href={`/home/notes/${note.id}`}>
              <div className="recent-notes">
                <h5>{note.title}</h5>
                <div>
                  <p>Updated {formatDistanceToNow(new Date(note.updated_at), { addSuffix: true })}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full">
        <h1 className="title">My Notes</h1>
        <div className="flex flex-col space-y-3">
          {all.data.map(note => (
              <Link key={note.id} href={`/home/notes/${note.id}`}>
                <div className="notes">
                  <h5>{note.title}</h5>
                  <p>Updated {formatDistanceToNow(new Date(note.updated_at), { addSuffix: true })}</p>
                </div>
              </Link>
          ))}

        </div>
      </div>
    </div>
  );
};

export default NotesList;
