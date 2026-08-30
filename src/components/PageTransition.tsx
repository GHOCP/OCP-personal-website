"use client";

import { TransitionRouter } from "next-transition-router";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TransitionRouter
      auto
      leave={(next) => {
        next();
      }}
    >
      {children}
    </TransitionRouter>
  );
}
