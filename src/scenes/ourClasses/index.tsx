import { SelectedPage, ClassType } from '@/shared/types';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from './Class';
import { useTranslation } from 'react-i18next';


const classes: Array<ClassType> = [
  {
    name: "class1.name",
    description: "class1.description",
    image: image1
  },
  {
    name: "class2.name",
    description: "class2.description",
    image: image2
  },
  {
    name: "class3.name",
    description: "class3.description",
    image: image3
  },
  {
    name: "class4.name",
    description: "class4.description",
    image: image4
  },
  {
    name: "class5.name",
    description: "class5.description",
    image: image5
  },
  {
    name: "class6.name",
    description: "class6.description",
    image: image6
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
  const { t }  = useTranslation(); 
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>{t("class.title")}</HText>
            <p className="py-5">{t('class.body')}
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={t(item.name)}
                description={t(item.description)}
                image={item.image} />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses;