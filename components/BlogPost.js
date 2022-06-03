export default function BlogPost({ title, link }) {
  const months = [
    '',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const date = link.slice(32, 42);
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const monthName = months[parseInt(date.slice(5, 7))];
  const day = date.slice(8);

  function getDayByName(dateStr, locale) {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'short' });
  }

  const dateStr = `${month}/${day}/${year}`;
  const dayName = getDayByName(dateStr, 'en-GB');

  // The date format which gets rendered on the page
  const styledDate = `${dayName} ${day} ${monthName} ${year}`;

  return (
    <div
      id='main'
      className='flex flex-col gap-1 hover:opacity-80 active:scale-95 transition transform duration-100 ease-in-out'
    >
      <a href={link} className=''>
        <h1 className='font-slice text-xl lg:text-2xl font-medium text-gray-800 '>
          {title}
        </h1>
      </a>
      <p className='text-gray-500'>{styledDate}</p>
      <style jsx>{`
        #main {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  );
}
