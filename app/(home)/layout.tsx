import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-screen flex flex-col'>
      <div className='fixed top-0 left-0 w-full bg-[#13141E] z-[100] shadow-md'>
        <Header />
      </div>
      <main className='flex-1 flex flex-col pt-[70px]'>{children}</main>
      <Footer />
    </div>
  )
}
