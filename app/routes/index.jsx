import { useLoaderData, Link } from "@remix-run/react";
import connectDb from "~/db/connectDb.server.js";

export async function loader() {
  const db = await connectDb();
  const users = await db.models.User.find();
  return users;
}

export default function Index() {
  const users = useLoaderData();

  return (
    <div className="mt-7">
      <h1 className="text-2xl font-bold mb-4">Feed</h1>
      <h2 className="text-lg font-bold mb-2">All users</h2>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
        {users.map((user) => {
          return (
            <div
              key={user._id}
              className="rounded overflow-hidden hover:bg-gray-100 hover:shadow-gray-400 cursor-pointer shadow-lg"
            >
              <div className="px-6 py-4">
                <span
                  className={`font-bold text-xl mb-2 ${
                    user.role === "company" ? "" : ""
                  }`}
                >
                  <Link
                    to={`/users/${user._id}`}
                    className="text-custom-black hover:text-custom-lightBlue"
                  >
                    {user.name}
                  </Link>
                </span>
                <p className="truncate overflow-auto">{user.bio}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
