import {NavigationItems} from './navigationItems';

export function NavigationPane() {
  return (
    <nav className="flex flex-col w-1/4 h-screen pl-4">
      <div className="text-3xl">Instagram</div>
      <NavigationItems />
    </nav>
  );
}
