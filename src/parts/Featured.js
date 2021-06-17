import React from 'react'

import Fade from 'react-reveal/Fade'

import iconDistance from '../assets/images/icon/icon-distance.svg'
import iconGuide from '../assets/images/icon/icon-guide.svg'
import iconPayment from '../assets/images/icon/icon-payment.svg'
import iconServices from '../assets/images/icon/icon-twntyhour.svg'
import iconMember from '../assets/images/icon/icon-member.svg'
import iconGuarantee from '../assets/images/icon/icon-guarantee.svg'
import travellerIllustration from '../assets/images/illustration.png'
import FeaturedIcon from './FeaturedIcon'

const Featured = ({ id }) => {
  //data feature list
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
    <section id={id} className='app-feature-wrapper'>
      <h1 className='app-feature-title--big text-textColor'>
        kenapa harus plano<span className='text-secondary'>trip</span>?
      </h1>
      <div className='app-feature-wrapper--inner'>
        <div className='flex-1 h-auto md:pl-32 pl-4'>
          <h3 className='section-title text-textColor md:text-left text-center'>
            Efisienkan Waktu Menuju Wisata Favorit-Mu
          </h3>
          <div className='divider mt-4 mx-auto'></div>
          <p className='app-feature-subtitle'>
            Kami menyediakan tempat yang terdekat dengan tempat wisata tujuan mu
          </p>
          <div className='app-feature-wrapper--list'>
            {listFeatures.map((data) => (
              <Fade duration={1500} bottom>
                <FeaturedIcon
                  key={data.id}
                  icon={data.icon}
                  title={data.title}
                  desc={data.desc}
                />
              </Fade>
            ))}
          </div>
        </div>
        <div className='app-feature-wrapper--illustration'>
          <img src={travellerIllustration} alt='traveller' />
        </div>
      </div>
    </section>
  )
}

export default Featured
