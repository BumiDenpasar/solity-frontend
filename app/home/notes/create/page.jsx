import NoteForm from "./NoteForm";
import { cookies } from "next/headers";

const Page = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;

  return (
    <>
      <NoteForm token={token}/>
    </>
  );
};

export default Page;
