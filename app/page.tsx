import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import {lusitana} from './ui/fonts'; 

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
       
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        { <AcmeLogo /> }
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <div
  />
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome.</strong> <br/>
            This is an example for the Next.js App Router built by Suveer P. Contact me for login details.<br/>
            <a href="https://nz.linkedin.com/in/suveerp" className="text-blue-500">
              Suveer P LinkedIn
            </a> <br/><br/>
            I have been a software Engineer for over 20 years and have a rich history of working with React, Next.js, and other web technologies.<br/><br/>
            In this example you will find frontend development, backend api implementation, postgres database and authenthication.<br/><br/>
            I am a founder, creating and IOT startup, having experience designing hardware, firmware, launcing a mobile, shopping and software.<br/><br/>
            I have real world expereince bringing an idea to life, compliance and regulation, design and manufacturing.<br/><br/>
            I am also a mentor, helping others to learn and grow in the software industry.<br/>
            I am a consultant, helping individuals and companies to build and grow their brand and products.<br/><br/>
            Having a passion for vertical and indoor farming, bringing technologies and farming together. 
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="md:hidden block"
            alt="Screenshots of the dashboard project showing mobile version"
          />
          
        </div>
      </div>
    </main>
  );
}
