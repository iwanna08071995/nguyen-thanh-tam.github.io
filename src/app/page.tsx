"use client";

import Image from "next/image";

import styled from "styled-components";

const H1 = styled.h1`
  color: red;
  font-size: 4rem;
`;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <H1>123</H1>
    </main>
  );
}
