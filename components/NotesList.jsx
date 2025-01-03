import { getNotesData } from "@/lib/notes";
import { formatDistanceToNow } from 'date-fns'; // Import the function
import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";


const NotesList = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;
  const all = await getNotesData(token);
  const recent = all.data.slice(0, 2);


  if (recent.length === 0) {
    return(
      <div className="flex flex-col items-center pt-20 w-full">
        <Image 
        src="/shocked.png"
        width={300}
        height={300}
        alt="shocked person"
        />
        <h1 className="text-3xl font-semibold text-black">You have no notes!</h1>
        <p className="px-10 mt-2 text-sm tracking-wide text-center text-secondary">Do you have something to write down? This is the time to write it down!</p>

      </div>
    )
  }else{
    return (
      <div className="flex flex-col justify-between mt-8 space-y-5 lg:space-x-10 lg:flex-row lg:justify-normal lg:space-y-0">
        <div className="w-full">
          <h1 className="title">Recently Updated</h1>
          <div className="flex space-x-3">
            {recent.map(note => (
              <Link className="w-1/2" key={note.id} href={`/home/notes/${note.id}`}>
                <div className="recent-notes">
                  <h5>{note.title.split(" ").slice(0, 2).join(" ")}</h5>
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
  }
  
};

export default NotesList;
