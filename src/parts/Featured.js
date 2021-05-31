import React from 'react'

import iconDistance from '../assets/images/icon/icon-distance.svg'
import iconGuide from '../assets/images/icon/icon-guide.svg'
import iconPayment from '../assets/images/icon/icon-payment.svg'
import iconServices from '../assets/images/icon/icon-twntyhour.svg'
import iconMember from '../assets/images/icon/icon-member.svg'
import iconGuarantee from '../assets/images/icon/icon-guarantee.svg'
import travellerIllustration from '../assets/images/illustration.png'

const Featured = () => {
  //array feature list
  const listFeatures = [
    {
      id: 1,
      title: 'kurang dari 1 km',
      desc: 'Kami menyediakan tempat yang terdekat dengan tempat wisata tujuan mu',
      icon: iconDistance,
    },
    {
      id: 2,
      title: 'Verifikasi Pemandu',
      desc: 'Pemandu kami akan memberikan pengalaman terbaik untuk perjalan wisata anda',
      icon: iconGuide,
    },
    {
      id: 3,
      title: 'multi payment',
      desc: 'Kami menyediakan banyak cara pembayaran untuk memudahkan anda',
      icon: iconPayment,
    },
    {
      id: 4,
      title: 'booking 24 jam',
      desc: 'Kami melayani anda tanpa ada batasan waktu, memungkinkan anda mendapatkan pelayanan maksimal setiap waktu',
      icon: iconServices,
    },
    {
      id: 5,
      title: 'fasilitas member',
      desc: 'Dapatkan kesempatan menarik berupa diskon khusus ketika anda menjadimember kami',
      icon: iconMember,
    },
    {
      id: 6,
      title: 'garansi 100%',
      desc: 'Kami melayani anda tanpa ada batasan waktu, memungkinkan anda mendapatkan pelayanan maksimal setiap waktu',
      icon: iconGuarantee,
    },
  ]

  return (
    <section id='feature' className='md:pt-32 pt-14'>
      <h1 className='md:text-3xl text-xl font-bold font-body text-center capitalize text-textColor md:mb-20 mb-10'>
        kenapa harus plano<span className='text-secondary'>trip</span>?
      </h1>
      <div className='flex md:flex-row flex-col-reverse'>
        <div className='flex-1 h-auto md:pl-32 pl-4'>
          <h3 className='text-xl font-body font-medium text-textColor md:text-left text-center capitalize'>
            Efisienkan Waktu Menuju Wisata Favorit-Mu
          </h3>
          <div className='w-14 border-2 border-secondary mt-4 md:mx-0 mx-auto'></div>
          <p className='font-body text-base text-gray-400 mt-4 md:w-1/2 w-full md:text-left text-center'>
            Kami menyediakan tempat yang terdekat dengan tempat wisata tujuan mu
          </p>
          <div className='flex md:flex-wrap md:flex-row flex-col'>
            {listFeatures.map((data) => (
              <div
                key={data.id}
                className='block md:w-48 w-4/5 md:text-left text-center h-auto md:mr-20 md:ml-0 mx-auto mt-10 md:justify-start'
              >
                <img src={data.icon} className='md:mx-0 mx-auto' alt='icon' />
                <h4 className='font-body font-medium mb-2 mt-4 text-xl text-textColor capitalize'>
                  {data.title}
                </h4>
                <p className='normal-case text-base font-body text-gray-400'>
                  {data.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex-1 md:pr-20 md:pt-32 pt-0 pr-0 mb-6 h-full'>
          <img src={travellerIllustration} alt='traveller' />
        </div>
      </div>
    </section>
  )
}

export default Featured
