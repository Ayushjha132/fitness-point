import { SelectedPage } from "@/shared/types";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {

  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const inputStyles = `mt-10 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }

  }

  const { t } = useTranslation();
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* HEADER  */}
        <motion.div className="md:-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">{t('contact.title1')}</span> {t('contact.title2')}
          </HText>
          <p className="my-5">
          {t('contact.body')}
          </p>
        </motion.div>

        {/* FORM AND IMAGE  */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}>
            <form target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/d2beae667fc85f6ba436c95ef43692ea"
              method="POST"
            >
              <input className={inputStyles} type="text" placeholder={t('name')} {...register("name", {
                required: true,
                maxLength: 100,

              })}
              />
              {
                errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" && "Max length is 100 char."}
                  </p>
                )}

              <input className={inputStyles} type="text" placeholder={t('email')} {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,

              })}
              />
              {
                errors.email && (
                  <p className="mt-1 text-primary-500">
                    {errors.email.type === "required" && "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                  </p>
                )}

              <textarea className={inputStyles} rows={4} cols={40} placeholder={t('message')} {...register("message", {
                required: true,
                maxLength: 2000,

              })}
              />
              {
                errors.message && (
                  <p className="mt-1 text-primary-500">
                    {errors.message.type === "required" && "This field is required."}
                    {errors.message.type === "maxLength" && "Max length is 2000 char."}
                  </p>
                )}

              <button className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white">
              {t('submit')}
              </button>
            </form>
          </motion.div>


          <motion.div className="relative mt-16 basis-2/5 md:mt-10 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 befree:z-[-1]">
              <img className= "w-full" src={ContactUsPageGraphic} alt="contact-us-page-graphics" />
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>

  )
}

export default ContactUs;