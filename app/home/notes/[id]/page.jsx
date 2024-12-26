import { getNoteData } from "@/lib/notes";
import NoteForm from "./NoteForm";
import { cookies } from "next/headers";

const Page = async ({ params }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;
  const { id } = await params; 
  const note = await getNoteData(id, token); 

  return (
    <>
      <NoteForm note={note.data} id={id} token={token}/>
    </>
  );
};

export default Page;
