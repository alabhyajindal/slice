import Link from 'next/link';

export default function Header() {
  return (
    <div className='px-8 py-10 mt-12 font-sans'>
      <div className='flex flex-col items-center gap-2'>
        <Link href='/'>
          <a>
            <img src='/logo.svg' className='h-14' alt='slice Logo' />
          </a>
        </Link>
        <Link href='/'>
          <a>
            <h1 className='text-4xl font-bold text-gray-700 mt-14'>
              slice engineering
            </h1>
          </a>
        </Link>
        <p className='text-gray-500'>Makers of slice</p>
      </div>
    </div>
  );
}
