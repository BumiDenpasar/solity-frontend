import { cookies } from "next/headers";
import { getUserData } from "@/lib/auth";
import ProfileForm from "@/components/ProfileForm";

const Page = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;
  const data = await getUserData(token);

  return (
    <div className="p-5 mx-auto max-w-2xl bg-white rounded-xl drop-shadow-md">
      <ProfileForm initialData={data.data} token={token}/>
    </div>
  );
}

export default Page;
