
'use client'
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import mtapLogo from "../Img/mtapLogo.png";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import Link from 'next/link';

const products = [
  { name: 'mTap Custom Cards', description: '', href: '/shop-nfc/custom-digital-business-cards', icon: ChartPieIcon },
  { name: 'Google Review Cards', description: '', href: '/shop-nfc/mtap-review-cards', icon: CursorArrowRaysIcon },
  { name: 'NFC Black Metal Card', description: '', href: '/shop-nfc/nfc-black-metal-card', icon: FingerPrintIcon },
  { name: 'mTap Key Fobs', description: '', href: '/shop-nfc/mtap-key-fobs', icon: SquaresPlusIcon },
  { name: 'mTap Retail Solutions', description: '', href: "/shop-nfc/mtap-retail-solutions", icon: ArrowPathIcon },
  { name: 'mTap Business Cards', description: '', href: "/shop-nfc/mtap-business-cards", icon: ArrowPathIcon },
  { name: 'mTap Collections', description: '', href: "/shop-nfc/mtap-collections", icon: ArrowPathIcon },
  { name: 'mTap Stickers', description: '', href: "/shop-nfc/mtap-stickers", icon: ArrowPathIcon },
]
const solutions = [
  { name: 'Google Review Cards', description: '', href: '/googlereviewcards', icon: CursorArrowRaysIcon },
  { name: 'Gift', description: '', href: '/gift', icon: FingerPrintIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-transparent">
      <nav className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 text-white">
        <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only text-white">MtapLogo</span>
            <Image className="h-12 w-auto" src={mtapLogo} alt="mtapLogo" height={200} width={200} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only text-white" >Open main menu</span>
            <Bars3Icon className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-20">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-2xl  leading-6 text-white hover:text-indigo-600">
              <Link href='/shop-nfc' alt="Shop NFC" >  Shop NFC </Link>
           
              <ChevronDownIcon className="h-6 w-8 flex-none text-white" aria-hidden="true" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute  -left-8 top-full z-10 mt-6 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-grey">
                      <item.icon className="h-8 w-8 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div> */}
                    <div className="flex-auto">
                      <Link href={item.href} className="block text-2xl  text-gray-900 hover:text-indigo-600">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
       
            </PopoverPanel>
          </Popover>

          <Link href="/subscriptions" className="text-2xl  leading-6 text-whites hover:text-indigo-600">
           Subscriptions
          </Link>
          <Link href="/pro" className="text-2xl  leading-6 text-white hover:text-indigo-600">
         Pro
          </Link>
          <Link href="/teams" className="text-2xl  leading-6 text-white hover:text-indigo-600">
        For Teams
          </Link>
          <Popover className="relative" >
            <PopoverButton className="flex items-center gap-x-1 text-2xl  leading-6 text-white hover:text-indigo-600">
              Solutions
           
              <ChevronDownIcon className="h-6 w-8 flex-none text-white" aria-hidden="true" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute  -left-16 top-full z-10 mt-6 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {solutions.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-grey">
                      <item.icon className="h-8 w-8 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div> */}
                    <div className="flex-auto">
                      <Link href={item.href} className="block text-2xl  text-gray-900 hover:text-indigo-600">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
       
            </PopoverPanel>
          </Popover>
          {/* <Link href="/subscriptions" className="text-2xl  leading-6 text-white">
       Solutions
          </Link> */}
          <Link href="/blog" className="text-2xl  leading-6 text-white hover:text-indigo-600">
        Blog
          </Link>
        </PopoverGroup>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm  leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div> */}
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 mt-40">
          <div className="flex items-center justify-end">
            {/* <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only text-white">Your Company</span>
              <Image
                className="h-8 w-auto"
                src={mtapLogo}
                alt=""
              />
            </a> */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only text-white">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-6 pl-3 pr-3.5  text-3xl  leading-7 text-white hover:bg-gray-50 hover:text-black">
                       
                       <Link href='/shop-nfc' alt='' >   Shop NFC</Link>
                     
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-8 w-8 flex-none')}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-6 pl-6 pr-3 text-2xl  leading-7 text-white hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/subscriptions"
                  className="-mx-3 block rounded-lg px-3 py-6 text-3xl  leading-7 text-white hover:bg-gray-50 hover:text-black"
                >
                Subscriptions
                </Link>
                <Link
                  href="/pro"
                  className="-mx-3 block rounded-lg px-3 py-6 text-3xl  leading-7 text-white hover:bg-gray-50 hover:text-black"
                >
             Pro
                </Link>
                <Link
                  href="/teams"
                  className="-mx-3 block rounded-lg px-3 py-6 text-3xl  leading-7 text-white hover:bg-gray-50 hover:text-black"
                >
               For Teams
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-6 pl-3 pr-3.5  text-3xl  leading-7 text-white hover:bg-gray-50 hover:text-black">
                       Solutions
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-8 w-8 flex-none')}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...solutions].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-6 pl-6 pr-3 text-2xl  leading-7 text-white hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                {/* <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-6 text-3xl  leading-7 text-white hover:bg-gray-50 hover:text-black"
                >
             Solutions
                </Link> */}
                <Link
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-6 text-3xl  leading-7 text-white hover:bg-gray-50 hover:text-black"
                >
            Blogs
                </Link>
              </div>
                {/* <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-xl  leading-7 text-white hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div> */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
