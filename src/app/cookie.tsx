import { PropsWithChildren } from 'react';
import { cookies, headers } from 'next/headers';

export default async function Cookie(props: PropsWithChildren) {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');

  return (
    <div>
      cookie is: {theme?.value}
      {props.children}
    </div>
  );
}