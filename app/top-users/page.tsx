import React from "react";

const getUsers = async () => {
  try {
    const response = await fetch("http://20.244.56.144/test/users", {
      cache: "no-store",
    });

    if (!response.ok) throw new Error("Failed to fetch users");

    const data = await response.json();
    return data.users.map((user: { id: number; name: string }) => user);
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export default async function Page() {
  const users = await getUsers();
  return (
    <div className="min-h-screen p-5">
      <h1 className="text-3xl font-bold mb-4">Top Users</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="space-y-2">
          {users.slice(0, 5).map((user: { id: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
            <li
              key={user.id}
              className="p-3 bg-white shadow-md rounded-lg text-lg font-medium"
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
