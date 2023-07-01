"use client" 
import { useRouter } from "next/navigation";
import * as React from "react";

export interface IGemProps {}

export default function Gem(props: IGemProps) {
  const router = useRouter()
  return <div>hello gem
       <button type="button" onClick={() => {router.push('/about')}}>router.push</button>
  </div>;
}
