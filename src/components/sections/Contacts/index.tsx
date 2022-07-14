import { useTranslation } from "next-i18next";
import Title from "../../common/Title";
import Image from "next/image";

interface ContactsSectionProps {
  description: string;
}

function ContactsSection({ description }: ContactsSectionProps) {
  const { t } = useTranslation("home");

  return (
    <section className="mt-8 grid grid-rows-2 gap-4 md:mt-16 md:grid-cols-2 md:grid-rows-1">
      <div className="space-y-4">
        <Title>{t("titles.contact")}</Title>
        <p className="text-secondary">{description}</p>
      </div>

      <div className="relative">
        <Image
          objectFit="cover"
          layout="fill"
          src="/static/Speaker.png"
          alt="Speaker image"
          priority={false}
        />
      </div>
    </section>
  );
}

export default ContactsSection;
