import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
        <footer className="bg-[#053C28] text-white ">
            <div className="container mx-auto grid grid-cols-4 gap-16 p-16">
                <div className='mt-5'>
                <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua</p>
                <div className="flex space-x-6 mt-4">
                    <a href="#"><img src="/public/social.svg" alt="" className="" /></a>
                    <a href="#"><img src="/public/lucideyoutube.svg" alt="YouTube" className="" /></a>
                    <a href="#"><img src="/public/mdiinstagram.svg" alt="Instagram" className="" /></a>
                </div>
                </div>
                <div>
                <h3 className="font-bold mb-4">Um</h3>
                <ul>
                    <li><a href="#">Kontaktiere Uns</a></li>
                    <li><a href="#">Über Uns</a></li>
                    <li><a href="#">Karriere</a></li>
                    <li><a href="#">Unternehmensinformationen</a></li>
                </ul>
                </div>
                <div>
                <h3 className="font-bold mb-4">Hilfe</h3>
                <ul>
                    <li><a href="#">Unsere Produzenten</a></li>
                    <li><a href="#">Zahlung</a></li>
                    <li><a href="#">Versand</a></li>
                    <li><a href="#">Stornierung & Rückgabe</a></li>
                    <li><a href="#">Verstoß Melden</a></li>
                </ul>
                </div>
                <div>
                <h3 className="font-bold mb-4">politik</h3>
                <ul>
                    <li><a href="#">Rücknahmegarantie</a></li>
                    <li><a href="#">Nutzungsbedingungen</a></li>
                    <li><a href="#">Sicherheit</a></li>
                    <li><a href="#">Privatsphäre</a></li>
                    <li><a href="#">Seitenverzeichnis</a></li>
                </ul>
                </div>
            </div>
            <div className="bg-[#062F21] py-4 mt-12">
                <div className="container mx-auto px-4 flex justify-between items-center">
                <p>2023 hood.de, Inc.</p>
                <img src="public/icons-payment-11@2x.png" alt="MasterCard" className="w-56" />
                <a href="#" className="text-white">Scroll to top ↑</a>
                </div>
            </div>
        </footer>


    </div>
  )
}

export default Footer