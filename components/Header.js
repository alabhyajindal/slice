import Link from 'next/link';

export default function Header() {
  return (
    <div className='px-8 py-10 mt-12'>
      <div className='flex flex-col items-center gap-2'>
        <Link href='/'>
          <a>
            <img src='/logo.svg' className='h-14' />
          </a>
        </Link>
        <h1 className='text-4xl font-bold text-gray-700 mt-14'>
          slice engineering
        </h1>
        <p className='text-gray-500'>Makers of slice</p>
      </div>
    </div>
  );
}
