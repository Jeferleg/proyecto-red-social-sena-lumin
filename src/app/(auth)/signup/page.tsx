import { Metadata } from "next";
import signupImage from "@/assets/signup-image2.jpg";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Registro",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="md:w-1/2 w-full space-y-10 overflow-y-auto p-10">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold ">Registro en Luminstars</h1>
            <p className="text-muted-foreground">
            Un lugar donde las estrellas <span className="italic">te conectan</span> con otros apasionados por el <span className="italic">cosmos</span>
            </p>
          </div>
           <div className="space-y-5">
           <SignUpForm />
           <Link href="/login" className="block text-center hover:underline">
           Ya tienes una cuenta? Inicia sesión
           </Link>
           </div>
        </div>
        <Image
          src={signupImage}
          alt=""
          className="hidden w-1/2 md:block object-cover"
        />
      </div>
    </main>
  );
}
