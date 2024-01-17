import Image from 'next/image'
import freshbooks from '../../../public/logos/freshbooks.svg'
import sendgrid from '../../../public/logos/sendgrid.svg'
import figma from '../../../public/logos/figma.svg'
import auth0 from '../../../public/logos/auth0.svg'
import notion from '../../../public/logos/notion.svg'
import asana from '../../../public/logos/asana.svg'
import algolia from '../../../public/logos/algolia.svg'
import clickup from '../../../public/logos/clickup.svg'
import SectionWrapper from '../../SectionWrapper'
import antstock from "../../../public/logos/antstock.svg"
import zluri from "../../../public/logos/zluri.png"
import volopay from "../../../public/logos/volopay.svg"
import safe from "../../../public/logos/saftey.svg"
import nhance from "../../../public/logos/nhance.png"





const logos = [
    {
        src: safe,
        alt: "safe"
    },
    {
        src: volopay,
        alt: "volpay"
    },
    {
        src: zluri,
        alt: "antstock"
    },
    {
        src: nhance,
        alt: "antstock"
    },

    
   
]


const LogoGrid = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <h2 className="font-semibold text-lg text-gray-800 text-center">
                Become part of EnqDB's beta list alongside startups and enterprises.
            </h2>
            <div className="mt-8 flex justify-center">
                <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-8  items-center justify-center md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
                    <Image src={nhance} className="h-12 lg:mx-8 w-auto" alt={nhance} />
                    <Image src={volopay} className="h-12 w-auto" alt={nhance} />
                    <Image src={safe} className='h-12 w-auto' alt={nhance} />

                    <Image src={zluri} className='h-12 w-auto' alt={nhance} />
                   

                </ul>
            </div>
        </div>
    </SectionWrapper>
)

export default LogoGrid