import Link from "next/link";

export default function UseNotFound() {
    return (
      <>
        <h1 className="text-lg border-b pb-1 mb-1">
            error
        </h1>
        <p>User not found</p>
        <p className="mt-4">
            <Link href="/" className="text-blue-500 hover:text-blue-700">Go back</Link>
        </p>
      </>
    )
  }