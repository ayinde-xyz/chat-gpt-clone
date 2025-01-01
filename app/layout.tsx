import { getServerSession } from "next-auth";
import { Sidebar } from "react-pro-sidebar";
import ClientProvider from "../components/ClientProvider";
import { Providers } from "../components/Providers";
import { SessionProvider } from "../components/SessionProvider";
import SideBar from "../components/SideBar";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import "../styles/globals.css";
import Login from "./Login";
export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <Providers>
              <div className="flex">
                {/* Sidebar */}

                <SideBar />

                {/* ClientProvider - Notification */}
                <ClientProvider />

                <div className="bg-[#343541] flex-1">{children}</div>
              </div>
            </Providers>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}

// autoprefixer@10.4.20
// + postcss@8.4.49
// + tailwindcss@3.4.17
// + @heroicons/react@2.2.0
// + @next/font@13.1.5 (v14.2.15 available)
// + @types/node@18.11.17 (v22.10.2 available)
// + @types/react@18.0.26 (v19.0.2 available)
// + @types/react-dom@18.0.9
// + eslint@8.30.0
// + eslint-config-next@13.1.5
// + firebase@9.23.0 (v11.1.0 available)
// + firebase-admin@11.11.1 (v13.0.2 available)
// + next@13.1.5
// + next-auth@4.24.11
// + openai@3.3.0 (v4.77.0 available)
// + react@18.2.0
// + react-dom@18.2.0
// + react-firebase-hooks@5.1.1
// + react-hot-toast@2.4.1
