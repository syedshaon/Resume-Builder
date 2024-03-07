"use client";
import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { FaEdit, FaRobot, FaCloudDownloadAlt, FaMagic, FaQuestion } from "react-icons/fa";

function Page() {
  const [dfltBangla, setDfltBangla] = useState(false);
  const setBangla = (e) => {
    setDfltBangla(e.target.checked);
    // setDfltBangla(e.target.value);
  };
  const setEnglish = (e) => {
    setDfltBangla(!e.target.checked);
    // setDfltBangla(e.target.value);
  };
  return (
    <>
      <div className="lang-toggle fixed top-0 right-0 flex items-center gap-5 bg-gray-200 py-5 w-screen justify-end">
        <div className="group relative ">
          <Link href="/" className=" cursor-pointer   text-xl px-3 py-2 flex items-center">
            <FaEdit className="   text-gray-700 hover:text-gray-950  transition-all    w-10 " /> <span className="hidden md:block">Create Your Resume.</span>
          </Link>
        </div>
        <div className="container toggle-container">
          <div className="switches-container">
            <input onChange={setBangla} type="radio" id="switchMonthly" name="switchPlan" defaultValue="Bengali" />
            <input onChange={setEnglish} type="radio" id="switchYearly" name="switchPlan" defaultValue="English" defaultChecked="checked" />
            <label htmlFor="switchMonthly">বাংলা</label>
            <label htmlFor="switchYearly">English</label>
            <div className="switch-wrapper">
              <div className="switch">
                <div>বাংলা</div>
                <div>English</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro of Icons */}
      {/* component */}
      <div className=" max-w-7xl mx-auto mt-32 flex gap-4  flex-wrap flex-auto   items-center justify-center  ">
        {/* Card 1 */}
        <div className="rounded-sm w-full md:max-w-[45%] md:w-1/2 mb-5 md:mb-0 grid grid-cols-12 grid-rows-3 md:grid-rows-2 border-gray-500   shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" href="#">
          {/* Icon */}
          <div className="col-span-12 md:col-span-2 md:row-start-1  md:row-span-2   flex items-center justify-center">
            <FaEdit className="text-2xl" />
          </div>
          {/* Title */}
          <div className="col-span-12 md:col-start-3 md:col-span-10 md:row-start-1 md:row-span-1 xl:-ml-5 text-center md:text-left">
            <p className="text-gray-950 font-semibold">Edit Content</p>
          </div>
          {/* Description */}
          <div className="col-span-12 md:col-start-3  md:col-span-10 md:row-start-2 md:row-span-1 xl:-ml-5 text-center md:text-left">
            <p className="text-sm text-gray-600 font-light">Clicking here, you can add/edit your resume contents. </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="rounded-sm w-full md:max-w-[45%] md:w-1/2 mb-5 md:mb-0 grid grid-cols-12 grid-rows-3 md:grid-rows-2 border-gray-500   shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" href="#">
          {/* Icon */}
          <div className="col-span-12 md:col-span-2 md:row-start-1  md:row-span-2   flex items-center justify-center">
            <FaMagic className="text-2xl" />
          </div>
          {/* Title */}
          <div className="col-span-12 md:col-start-3 md:col-span-10 md:row-start-1 md:row-span-1 xl:-ml-5 text-center md:text-left">
            <p className="text-gray-950 font-semibold">Personalize</p>
          </div>
          {/* Description */}
          <div className="col-span-12 md:col-start-3  md:col-span-10 md:row-start-2 md:row-span-1 xl:-ml-5 text-center md:text-left">
            <p className="text-sm text-gray-600 font-light">Clicking here, you can change color and layout of your resume. </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="rounded-sm w-full md:max-w-[45%] md:w-1/2 mb-5 md:mb-0 grid grid-cols-12 grid-rows-3 md:grid-rows-2 border-gray-500   shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" href="#">
          {/* Icon */}
          <div className="col-span-12 md:col-span-2 md:row-start-1  md:row-span-2   flex items-center justify-center">
            <FaRobot className="text-2xl" />
          </div>
          {/* Title */}
          <div className="col-span-12 md:col-start-3 md:col-span-10 md:row-start-1 md:row-span-1 xl:-ml-5 text-center md:text-left">
            <p className="text-gray-950 font-semibold">Auto Generate</p>
          </div>
          {/* Description */}
          <div className="col-span-12 md:col-start-3  md:col-span-10 md:row-start-2 md:row-span-1 xl:-ml-5 text-center md:text-left">
            <p className="text-sm text-gray-600 font-light">Clicking here, you will get a fully loaded resume, that you can edit. </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="rounded-sm w-full md:max-w-[45%] md:w-1/2 mb-5 md:mb-0 grid grid-cols-12 grid-rows-3 md:grid-rows-2 border-gray-500   shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" href="#">
          {/* Icon */}
          <div className="col-span-12 md:col-span-2 md:row-start-1  md:row-span-2   flex items-center justify-center">
            <FaCloudDownloadAlt className="text-2xl" />
          </div>
          {/* Title */}
          <div className="col-span-12 md:col-start-3 md:col-span-10 md:row-start-1 md:row-span-1 xl:-ml-5 text-center md:text-left">
            <p className="text-gray-950 font-semibold">Download</p>
          </div>
          {/* Description */}
          <div className="col-span-12 md:col-start-3  md:col-span-10 md:row-start-2 md:row-span-1 xl:-ml-5 text-center md:text-left">
            <p className="text-sm text-gray-600 font-light">Clicking here, you can download/print your resume. </p>
          </div>
        </div>
        {/* Card 5 */}
        <div className="rounded-sm w-full md:max-w-[45%] md:w-1/2 mb-5 md:mb-0 grid grid-cols-12 grid-rows-3 md:grid-rows-2 border-gray-500   shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" href="#">
          {/* Icon */}
          <div className="col-span-12 md:col-span-2 md:row-start-1  md:row-span-2   flex items-center justify-center">
            <FaQuestion className="text-2xl" />
          </div>
          {/* Title */}
          <div className="col-span-12 md:col-start-3 md:col-span-10 md:row-start-1 md:row-span-1 xl:-ml-5 text-center md:text-left">
            <p className="text-gray-950 font-semibold">How To?</p>
          </div>
          {/* Description */}
          <div className="col-span-12 md:col-start-3  md:col-span-10 md:row-start-2 md:row-span-1 xl:-ml-5 text-center md:text-left">
            <p className="text-sm text-gray-600 font-light">Clicking there, you came to this page. </p>
          </div>
        </div>
      </div>

      {/* EngLish Instructions starts */}

      <div className={`${!dfltBangla ? "block" : "hidden"} px-4 py-8 container max-w-[900px] mx-auto mt-10 mb-28`}>
        <h1 className="text-3xl font-bold mb-4">How to create the Resume?</h1>

        <p>
          <em className="font-bold">TLDR:</em> Just check all the options available and you will get it. Dont worry, your progress is getting saved.
        </p>
        <Image priority className="my-20 max-w-[80%] mx-auto" width={900} height={555} alt="Button Introduction" src="/different-buttons.png" />

        <h2 className="text-2xl font-bold mt-6 mb-2">How to add content?</h2>

        <ul className="list-disc ml-6 mb-4">
          <li>From Personal Information area you can add personal information that you wish to show. If you left some field blank then that will not show up.</li>
          <li>There is an option to add an image. If you add that then the image will get saved in my firestore account.</li>
          <li>Other information will get saved in your browser if you dont sign in.</li>
          <li>If you sign in then the information will get saved in my firestore account. And once you sign in again you will have an option(Pop Up) to restore previous data.</li>
        </ul>

        <Image className="my-20 max-w-[80%] mx-auto" width={900} height={490} alt="add image to cv resume" src="/add-image.png" />

        <ul className="list-disc ml-6 mb-4">
          <li>You can add as many Experiences, Education, References, Skills, Other information as you want.</li>
          <li>When you add Experiences, Education, and Other Information you have an option to add Gap/Space.</li>
          <li>
            Click the{" "}
            <em className="font-bold">
              Download <FaCloudDownloadAlt />
            </em>
            button and decide where you need space.
          </li>
          <li>Generally, you need space at the end/beginning of a page.</li>
          <li>
            Once you add an entry if you dont want that to appear on your resume, then you can hide it by toggling <em className="font-bold">Show on resume</em> option.
          </li>
        </ul>
        <Image className="my-20 max-w-[80%] mx-auto" width={900} height={415} alt="Add gap between parts of cv, resume" src="/gap.png" />

        <h2 className="text-2xl font-bold mt-6 mb-2">How To Customize?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            By clicking on the <FaMagic /> Personalize button you will get an option to customize your resume.
          </li>
          <li>You can change Text Color, Icon Color, Header Background Color, Content Background Color , and Sidebar Background Color.</li>
          <li>Also, you can selct Layout that suits your needs.</li>
        </ul>
        <Image className="my-20 max-w-[80%] mx-auto" width={900} height={569} alt="How to Personalize, customize your cv, resume" src="/personalize.png" />

        <h2 className="text-2xl font-bold mt-6 mb-2">How To Print or Download?</h2>

        <ul className="list-disc ml-6 mb-4">
          <li>
            By clicking on the{" "}
            <em className="font-bold">
              Download <FaCloudDownloadAlt />
            </em>
            button, you can print your resume with some printer or can download as .PDF with your browsers <em className="font-bold">Print to PDF</em> function.
          </li>
          <li>
            If you are on a PC/Mac and want to download as .PDF then make sure to set no margin from the <em className="font-bold">Save as PDF</em> dialogue box.
          </li>
          <li>
            <em className="font-bold">Save as PDF</em> works best on Chrome browser on Desktop and mobile devices.
          </li>
          <li>It works on other browsers and devices also, but you may need to improvise.</li>
          <li>
            If you have some background color other than white and your device doesnt allow setting <em className="font-bold">No Margin</em> when you download as .PDF then, you have 2 options.
            <ul className="list-disc ml-6">
              <li>
                1. Use a different device that allows setting the border to <em className="font-bold">Zero</em>.
              </li>
              <li>
                2. Set the background color as <em className="font-bold">White</em>.
              </li>
            </ul>
          </li>
        </ul>

        <Image className="my-20 max-w-[80%] mx-auto" width={900} height={460} alt="print download cv resume" src="/print.png" />

        <h2 className="text-2xl font-bold mt-6 mb-2"> How and Why you Sign In?</h2>

        <ul className="list-disc ml-6 mb-4">
          <li>If you Sign In, you can sync the progress you made on creating your resume on a different device/location. If you can Sign In on that device with the same Gmail id.</li>
          <li>
            If you dont want to OR cant sign in, then still your text data is saved on your browsers storage <em className="font-bold">local storage</em>.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-2">Caution</h2>

        <ul className="list-disc ml-6">
          <li>If you sign in then your information will get saved in my firestore account.</li>
          <li>
            If you are worried about your information privacy then I suggest you dont sign in. Still, your data will get saved <em className="font-bold">ONLY on your browser</em> and no one will get access to that.
          </li>
        </ul>
      </div>

      {/* EngLish Instructions ends */}

      {/* Bengali Starts */}
      <div className={` ${dfltBangla ? "block" : "hidden"} px-4  py-8 container   max-w-[900px] mx-auto mt-10 mb-28 `}>
        <h1 className="text-3xl font-bold mb-4">কীভাবে জীবনবৃত্তান্ত(Resume/CV) তৈরি করবেন?</h1>

        <p>
          <em className="font-bold">সারমর্ম:</em> সবগুলা অপশন চেক করুন, আপনি এমনিতেই পারবেন। ভয় পাবেন না, আপনি যতটুকু লিখেছেন, সেটুকু সংরক্ষন হচ্ছে।
        </p>
        <Image className="my-20 max-w-[80%] mx-auto" width={900} height={555} alt="Button Introduction" src="/different-buttons.png" />

        <h2 className="text-2xl font-bold mt-6 mb-2">কন্টেন্ট কিভাবে যোগ করবেন?</h2>

        <ul className="list-disc ml-6 mb-4">
          <li>ব্যক্তিগত তথ্য(Personal Information) এলাকা থেকে আপনি ব্যক্তিগত তথ্য যোগ করতে পারেন যা আপনি দেখাতে চান। আপনি যদি কিছু ক্ষেত্র ফাঁকা রাখেন তাহলে সেটি দেখাবে না।</li>
          <li>একটি ছবি যোগ করার অপশন আছে। আপনি যদি এটি যোগ করেন তবে ছবিটি আমার ফায়ারস্টোর অ্যাকাউন্টে সংরক্ষিত হবে।</li>
          <li>আপনি সাইন ইন না করলে অন্যান্য তথ্য আপনার ব্রাউজারে সংরক্ষিত হবে।</li>
          <li>আপনি যদি সাইন ইন করেন তাহলে তথ্য আমার ফায়ারস্টোর অ্যাকাউন্টে সংরক্ষিত হবে। এবং পরবর্তীতে আপনি আবার সাইন ইন করলে আপনার কাছে আগের ডেটা পুনরুদ্ধার করার অপশন(Pop Up) থাকবে৷</li>
        </ul>

        <Image className="my-20 max-w-[80%] mx-auto" width={900} height={490} alt="add image to cv resume" src="/add-image.png" />

        <ul className="list-disc ml-6 mb-4">
          <li>আপনি যত খুশি অভিজ্ঞতা, শিক্ষা, রেফারেন্স, দক্ষতা, অন্যান্য তথ্য যোগ করতে পারেন।</li>
          <li>যখন আপনি অভিজ্ঞতা, শিক্ষা এবং অন্যান্য তথ্য যোগ করেন তখন আপনি ফাঁকা জায়গা (Gap) যোগ করার অপশন পাবেন।</li>
          <li>
            <em className="font-bold">
              ডাউনলোড (Download) <FaCloudDownloadAlt />
            </em>
            বাটনে ক্লিক করুন এবং আপনার কোথায় ফাঁকা জায়গা (Gap) প্রয়োজন তা বুঝে নিন৷
          </li>
          <li>সাধারণত, একটি পৃষ্ঠার শেষে/শুরুতে আপনার ফাঁকা জায়গা (Gap) প্রয়োজন।</li>
          <li>
            একবার আপনি একটি এন্ট্রি যোগ করলে যদি আপনি এটি আপনার জীবনবৃত্তান্তে প্রদর্শিত না করতে চান, তাহলে আপনি <em className="font-bold">Show on resume</em> বাটনে ক্লিক করে এই এন্ট্রি হাইড(লোকাতে) পারেন।
          </li>
        </ul>
        <Image className="my-20 max-w-[80%] mx-auto" width={900} height={415} alt="Add gap between parts of cv, resume" src="/gap.png" />

        <h2 className="text-2xl font-bold mt-6 mb-2">কিভাবে কাস্টমাইজ করবেন?</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <FaMagic /> পার্সনালাইজ (Personalize) বাটনে ক্লিক করে আপনি কাস্টমাইজ করার বিভিন্ন অপশন পাবেন।
          </li>
          <li>আপনি সিভি/রেজিউমের বিভিন্ন অংশের কালার এবং লে-আউট এখান থেকে চেঞ্জ করতে পারেন।</li>
        </ul>
        <Image className="my-20 max-w-[80%] mx-auto" width={900} height={569} alt="How to Personalize, customize your cv, resume" src="/personalize.png" />

        <h2 className="text-2xl font-bold mt-6 mb-2">কিভাবে প্রিন্ট বা ডাউনলোড করবেন?</h2>

        <ul className="list-disc ml-6 mb-4">
          <li>
            <em className="font-bold">
              ডাউনলোড (Download) <FaCloudDownloadAlt />
            </em>
            বাটনে ক্লিক করে, আপনি প্রিন্টার দিয়ে আপনার জীবনবৃত্তান্ত প্রিন্ট করতে পারেন অথবা আপনার ব্রাউজারের <em className="font-bold">Print to PDF</em> ফাংশন ব্যাবহার করে .PDF (পি ডি এফ) আকারে সেভ করতে পারেন।
          </li>
          <li>
            আপনি যদি PC/Mac এ থাকেন এবং .PDF হিসাবে ডাউনলোড করতে চান তাহলে নিশ্চিত করুন যে <em className="font-bold">Save as PDF</em> ডায়ালগ বক্স থেকে কোনো মার্জিন সেট করা নেই।
          </li>
          <li>
            <em className="font-bold">Save as PDF</em> ডেস্কটপ এবং মোবাইল ডিভাইসে Chrome / ক্রম ব্রাউজারে সবচেয়ে ভাল কাজ করে৷
          </li>
          <li>এটি অন্যান্য ব্রাউজার এবং ডিভাইসেও কাজ করে, তবে আপনাকে কিছু অপশন চেঞ্জ করতে হতে পারে।</li>
          <li>
            আপনার যদি সাদা ছাড়া অন্য কোন ব্যাকগ্রাউন্ড কালার থাকে এবং আপনি যখন .PDF হিসেবে ডাউনলোড করেন তখন আপনার ডিভাইস <em className="font-bold">No Margin</em> সেটিং করার অনুমতি না দেয়, তাহলে আপনার কাছে 2টি বিকল্প আছে।
            <ul className="list-disc ml-6">
              <li>
                ১. একটি ভিন্ন ডিভাইস ব্যবহার করুন যা <em className="font-bold">Zero/No Margin</em> সেট করার অনুমতি দেয়৷ .
              </li>
              <li>
                ২. ব্যাকগ্রাউন্ড কালার <em className="font-bold"> সাদা</em> হিসাবে সেট করুন৷.
              </li>
            </ul>
          </li>
        </ul>

        <Image className="my-20 max-w-[80%] mx-auto" width={900} height={460} alt="print download cv resume" src="/print.png" />

        <h2 className="text-2xl font-bold mt-6 mb-2"> আপনি কিভাবে এবং কেন সাইন ইন করবেন?</h2>

        <ul className="list-disc ml-6 mb-4">
          <li>যদি আপনি সাইন ইন করেন, আপনি একটি ভিন্ন ডিভাইস/অবস্থানে আপনার জীবনবৃত্তান্ত তৈরি করার অগ্রগতি Syncronize করতে পারেন। যদি কিনা সেই ডিভাইসে একই জিমেইল আইডি দিয়ে সাইন ইন করতে পারেন।</li>
          <li>আপনি যদি সাইন ইন করতে না চান বা সাইন ইন করতে না পারেন, তাহলেও আপনার টেক্সট ডেটা আপনার ব্রাউজারের স্টোরেজ (local storage) এ সংরক্ষিত থাকে।</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-2">সতর্কতা</h2>

        <ul className="list-disc ml-6">
          <li>আপনি সাইন ইন করলে আপনার তথ্য আমার ফায়ারস্টোর অ্যাকাউন্টে সংরক্ষিত হবে।</li>
          <li>
            আপনি যদি আপনার তথ্যের গোপনীয়তা নিয়ে উদ্বিগ্ন হন তাহলে আমি আপনাকে সাইন ইন না করার পরামর্শ দিচ্ছি। তবুও, আপনার ডেটা <em className="font-bold">শুধুমাত্র আপনার ব্রাউজারে</em> সংরক্ষিত হবে এবং কেউ এতে অ্যাক্সেস পাবে না
          </li>
        </ul>
      </div>
      {/* Bengali Ends */}
      <footer className="w-full flex justify-center my-5">
        Made with ❤️ by
        <a href="https://github.com/syedshaon" target="_blank">
          &nbsp; Mashi
        </a>
      </footer>
    </>
  );
}

export default Page;
