export function NavigationItems() {
  const links = [
    'Home',
    'Search',
    'Explore',
    'Reels',
    'Messages',
    'Notifications',
    'Create',
    'Profile',
  ];

  const items = links.map(link => <div className="mt-2">{link}</div>);

  return <div className="mt-4 text-xl">{items}</div>;
}
