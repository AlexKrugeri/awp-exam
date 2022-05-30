import { useLoaderData, useCatch } from "@remix-run/react";
import { json } from "@remix-run/node";
import connectDb from "~/db/connectDb.server.js";
import Avatar from "../../components/avatar";

export async function loader({ params }) {
  const db = await connectDb();
  const user = await db.models.User.findById(params.userId);
  if (!user) {
    throw new Response(`Couldn't find user with id ${params.userId}`, {
      status: 404,
    });
  }
  return json(user);
}

export default function UserPage() {
  const user = useLoaderData();
  return (
    <div className="container mt-32 mx-auto p-4 md:p-0 ">
      <div className="shadow-xl flex flex-wrap w-full lg:w-4/5 mx-auto rounded-xl">
        <div className="bg-white w-full md:w-2/3">
          <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
            <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
              <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">{user.name}</h3>
                <Avatar seedProp={user?.avatarImage} />
                <p className="mb-0 mt-3 text-grey-dark text-base italic">
                  Subscriber since: {user?.createdAt.split("T")[0]}
                </p>
                <span className="text-lg font-bold mt-2">
                  {user?.tags.map((tag, key) => {
                    return <p key={key}>#{JSON.parse(tag)[key].value}</p>;
                  })}
                </span>
              </div>
              <div className="w-full lg:w-3/5 lg:px-3">
                <p className="text-md mt-4 lg:mt-0 text-justify font-normal md:text-left text-lg">
                  {user.bio}
                </p>
              </div>
              <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  CONTACT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <div>
      <h1>
        {caught.status} {caught.statusText}
      </h1>
      <h2>{caught.data}</h2>
    </div>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <h1 className="text-red-500 font-bold">
      {error.name}: {error.message}
    </h1>
  );
}
