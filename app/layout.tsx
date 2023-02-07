import { getServerSession } from 'next-auth';
import { SessionProvider } from '../components/SessionProvider';
import SideBar from '../components/SideBar';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import '../styles/globals.css'
import Login from './Login';
export default async function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode;
  }) {
    const session = await getServerSession(authOptions)

    return (
      <html lang="en">
        <body>
          <SessionProvider session={session}>
            {!session ? (
              <Login/>
            ) : (
              <div className='flex'>
              {/* Sidebar */}
              <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'><SideBar/></div>
              

          
            {/* ClientProvider - Notification */}
            
            <div className='bg-[#343541] flex-1'>{children}</div>
            </div>
            )}
            
          </SessionProvider>
        </body>
      </html>
    );
  }