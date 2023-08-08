import Image from 'next/image';
import React from 'react';
import img from '/public/images/facebook.png';
import img1 from '/public/images/dribbble.png';
import img2 from '/public/images/linkedin.png';
import img3 from '/public/images/twitter.png';
import Link from 'next/link';
import Card from '@/common/Card';

function Footer() {
  return (
    <footer className='mt-10 w-full bg-white p-10'>
      <Card>
        <div className='flex gap-10 flex-col md:flex-row md:gap-80'>
          <div className='space-y-3 w-1/2 mx-auto md:w-[10%] text-center md:text-start md:mx-0'>
            <h1 className=' text-lg font-bold'>E-Commerce</h1>
            <h6 className='text-sm'>Cricklewood,London NW2 6qg, Uk</h6>
            <div className='flex gap-3'>
              <Image src={img} alt='img' width={30} height={30} />
              <Image src={img1} alt='img' width={30} height={30} />
              <Image src={img2} alt='img' width={30} height={30} />
              <Image src={img3} alt='img' width={30} height={30} />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-10 md:grid-cols-4'>
            {footerLinks.map((footerLink, index) => (
              <div key={index}>
                <h5 className='p-3'>{footerLink.title}</h5>
                {footerLink.links.map((links, index) => (
                  <Link key={index} href={links.path}>
                    <h6 className='p-3 text-sm hover:text-primary-main'>
                      {links.name}
                    </h6>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className='flex pt-5 justify-between text-xs items-center flex-col-reverse md:flex-row md:text-sm'>
          <h6>© 2022 Commerce, Inc.</h6>
          <div className='flex justify-between'>
            <Link href='/'>
              <h6 className='p-3 hover:text-primary-main'>Privacy policy</h6>
            </Link>
            <Link href='/'>
              <h6 className='p-3 hover:text-primary-main'>Terms of use</h6>
            </Link>
            <Link href='/'>
              <h6 className='p-3 hover:text-primary-main'>Cookies</h6>
            </Link>
          </div>
          <h6 className='hidden md:block'>Scroll to top</h6>
        </div>
      </Card>
    </footer>
  );
}

export default Footer;

const footerLinks = [
  {
    title: 'Shop',
    links: [
      {
        name: 'Gift cards',
        path: '/',
      },
      {
        name: 'Site map',
        path: '/',
      },
      {
        name: 'Polka blog',
        path: '/',
      },
      {
        name: 'Login',
        path: '/',
      },
      {
        name: 'Sign up',
        path: '/',
      },
    ],
  },
  {
    title: 'Sell',
    links: [
      {
        name: 'Sell on Polka',
        path: '/',
      },
      {
        name: 'Teams',
        path: '/',
      },
      {
        name: 'Forums',
        path: '/',
      },
      {
        name: 'Affiliates',
        path: '/',
      },
    ],
  },
  {
    title: 'About',
    links: [
      {
        name: 'Polka, Inc.',
        path: '/',
      },
      {
        name: 'Policies',
        path: '/',
      },
      {
        name: 'Investors',
        path: '/',
      },
      {
        name: 'Careers',
        path: '/',
      },
      {
        name: 'Press',
        path: '/',
      },
    ],
  },
  {
    title: 'Help',
    links: [
      {
        name: 'Help Center',
        path: '/',
      },
      {
        name: 'Trust and safety',
        path: '/',
      },
      {
        name: 'Privacy settings',
        path: '/',
      },
    ],
  },
];
