import Link from "next/link";
import { users } from "./lib/users";

export default function Home() {
  const userItems = users.map((user) => {
    return (
      <li key={user.id}>
        <Link href={`/users/${user.id}`} className="text-blue-500 hover:text-blue-700">
          {user.name}
        </Link>
      </li>
    );
  });
  return (
    <>
      <h1 className="text-lg border-b pb-1 mb-1">Users</h1>
      <ul className="list-disc ml-4">
        {userItems}
      </ul>
    </>
  )
}