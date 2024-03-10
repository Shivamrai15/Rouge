import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { format } from "date-fns";

import { getUserById } from "@/actions/user";
import { Button } from "@/components/ui/button";


const ProfilePage = async() => {

    const session = await auth();
    const user = await getUserById(session?.user?.id!);

    if (!session || !session.user || !user ) {
        redirect("/");
    }
    

    return (
        <div className="w-full p-4 md:py-8 rounded-md border border-zinc-300 flex justify-center">
            <div className="max-w-md w-full space-y-5">
                <h2 className="text-zinc-700 font-bold text-lg">Profile Datails</h2>
                <div className="flex flex-col gap-y-2">
                    <div className="grid grid-cols-2 items-start">
                        <h5 className="text-zinc-600 font-medium">Name</h5>
                        <span className="text-zinc-600 font-medium truncate">
                            {user.name}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 items-start">
                        <h5 className="text-zinc-600 font-medium">Email</h5>
                        <span className="text-zinc-600 font-medium truncate">
                            {user.email}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 items-start">
                        <h5 className="text-zinc-600 font-medium">Phone Number</h5>
                        <span className="text-zinc-600 font-medium">
                            {user.mobileNumber !== null ? user.mobileNumber : "Not available" }
                        </span>
                    </div>
                    <div className="grid grid-cols-2 items-start">
                        <h5 className="text-zinc-600 font-medium">Gender</h5>
                        <span className="text-zinc-600 font-medium">
                            {user.dob !== null ? format(user.dob, "dd MMMM yyyy") : "Not available"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;