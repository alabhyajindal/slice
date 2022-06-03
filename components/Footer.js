export default function Footer() {
  return (
    <div className='bg-[#493082] text-[#edebf3] px-8 py-10 text-sm flex flex-col gap-4 font-slice mt-8'>
      <p>
        This is a demo and NOT the official slice engineering&apos;s blog. Click{' '}
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
