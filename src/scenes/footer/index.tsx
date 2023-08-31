import Logo from '@/assets/Logo.png';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();  
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          {t('footer.body')}
          </p>
          <p>{t('copyright')}</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>{t('footer-link')}</h4>
            <p className="my-5">{t('footer-element')}</p>
            <p className="my-5">{t('footer-element')}</p>
            <p className="my-5">{t('footer-element')}</p>
            <p>{t('footer-element')}</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>{t('footer-contact')}</h4>
            <p className="my-5">{t('footer-address1')}</p>
            <p className="my-5">{t('footer-address2')}</p>
            <p className="my-5">{t('footer-address3')}</p>
            <p>(+91) 9856-9856</p>
        </div>
        </div>


    </footer>
  )
}

export default Footer;