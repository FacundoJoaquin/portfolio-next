import Image from 'next/image'
import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'
import Coderhouse from '../../../../public/coderhouse.png'
import ContentContainer from '../components/atoms/ContentContainer/ContentContainer'
import ContentTitle from '../components/atoms/ContentTitle/ContentTitle'
import styles from './styles.module.css'
import { useAppContext } from '../../context'

const certifications = [
    { name: 'React', img: Coderhouse, url: 'https://www.coderhouse.com/certificados/64b5e60d51e741000286348b?lang=es', description: 'Certificacion de React Js de Coderhouse' },
    { name: 'JavaScript', img: Coderhouse, url: 'https://www.coderhouse.com/certificados/6453725464a952000263adb9?lang=es', description: 'Certificacion de JavaScript de Coderhouse' },
    { name: 'QA Manual', img: Coderhouse, url: 'https://www.coderhouse.com/certificados/6593ce647847dc57306c7672?lang=es', description: 'Certificacion de React Js de Coderhouse' },
    { name: 'HTML - CSS', img: Coderhouse, url: 'https://www.coderhouse.com/certificados/63e81963b47c8f000f638e8b?lang=es', description: 'Certificacion de React Js de Coderhouse' },
]

const Certifications = ({ position }) => {
    const {ui} = useAppContext()
    return (
        <ContentContainer style={`${position} py-4 overflow-hidden `}>
            <ContentTitle classname=' px-6 '>
                Certificados
            </ContentTitle>
            <div className={`flex flex-col mt-4 overflow-y-scroll h-[100%] pb-16 gap-y-4 ${!ui.dark? styles.darkScrollable : styles.scrollable}`}>

                {certifications.map((certification, index) => {
                    return (
                        <div key={index} className="flex ml-6 items-center gap-x-3">
                            <div className={`${styles.container} size-14 rounded-full grid place-items-center overflow-hidden 2xl:size-20`}>
                                <Image alt={certification.description} src={certification.img}/>
                            </div>
                            <h3 className='font-semibold text-xl dark:text-black text-darkSurface-200'>{certification.name}</h3>
                            <Link href={certification.url} target='__BLANK' about={[certification.description]} >
                                <BiLinkExternal className='size-5 cursor-pointer hover:size-6 hover:scale-[1.01] hover:transition-all ease-in-out duration-200 dark:text-black text-darkSurface-300' />
                            </Link>
                        </div>

                    )
                })}
            </div>
        </ContentContainer>
    )
}

export default Certifications