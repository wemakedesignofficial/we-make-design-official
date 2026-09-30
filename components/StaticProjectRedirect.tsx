'use client';

import { useEffect } from 'react';

export default function StaticProjectRedirect({ destination }: { destination: string }) {
  useEffect(() => { window.location.replace(destination); }, [destination]);
  return <main className="not-found container"><p className="eyebrow">Project moved</p><h1>This project has a new address.</h1><a href={destination}>Continue to Cherry Celebrations ↗</a></main>;
}
