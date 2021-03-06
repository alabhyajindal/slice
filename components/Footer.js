export default function Footer() {
  return (
    <div className='bg-gradient-to-br from-[#493082] via-[#422b75] to-[#3a2668] text-[#edebf3] px-8 py-10 text-sm flex flex-col gap-4 mt-8'>
      <p>
        {' '}
        <a
          href='https://github.com/alabhyajindal/slice'
          className='underline hover:opacity-80 transition transform duration-150 ease-in-out'
        >
          View
        </a>{' '}
        the source of this website. This is a demo and NOT the official slice
        engineering&apos;s blog. Click{' '}
        <a
          href='https://engineering.sliceit.com/'
          className='underline hover:opacity-80 transition transform duration-150 ease-in-out'
        >
          here
        </a>{' '}
        to visit the offical blog. Or click{' '}
        <a
          href='https://www.sliceit.com/'
          className='underline hover:opacity-80 transition transform duration-150 ease-in-out'
        >
          here
        </a>{' '}
        to visit the slice homepage and know more about India&apos;s best credit
        card challenger.
      </p>
    </div>
  );
}
