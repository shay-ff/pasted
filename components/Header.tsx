'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Header() {
    const router = useRouter();
    return (
        <div className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white shadow-md sticky top-0 z-50">
            {/* Logo */}
            <Link href = "/">
                <div>
                    <button className="text-lg font-bold text-blue-400 uppercase tracking-wider hover:text-blue-300" >
                        Pasted.io
                    </button>
                </div>
            </Link>
            

            {/* Navigation Buttons */}
            <div className="flex space-x-4">
                
                <button className="px-4 py-2 text-sm font-medium font-mono bg-gray-700 rounded-md hover:bg-gray-600"
                    onClick={() => router.push("/mySnippets")}>
                    mySnippets
                </button>
                <Link href="/syntaxAtlas">
                    <button className="px-4 py-2 text-sm font-medium font-mono bg-gray-700 rounded-md hover:bg-gray-600">
                        syntaxAtlas
                    </button>
                </Link>
                
            </div>

            {/* Authentication Buttons */}
            <div className="flex space-x-4">
                <button className="px-4 py-2 text-sm font-medium font-mono bg-green-500 rounded-md hover:bg-green-400">
                    Login
                </button>
                <button className="px-4 py-2 text-sm font-medium font-mono bg-red-500 rounded-md hover:bg-red-400">
                    Register
                </button>
            </div>
        </div>
    );
}