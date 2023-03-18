import { getServerSession } from 'next-auth';
import { Sidebar } from 'react-pro-sidebar';
import ClientProvider from '../components/ClientProvider';
import { Providers } from '../components/Providers';
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
    console.log(session)

    return (
      <html lang="en">
        <body>
          <SessionProvider session={session}>
            {!session ? (
              <Login/>
            ) : (
              <Providers>
                <div className='flex'>
                {/* Sidebar */}
                
                <SideBar/>
                

            
              {/* ClientProvider - Notification */}
              <ClientProvider />
            
                <div className='bg-[#343541] flex-1'>{children}</div>
            
                
            
              </div>
            </Providers>
            )}
            
          </SessionProvider>
        </body>
      </html>
    );
  }