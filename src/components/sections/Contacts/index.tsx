import { useTranslation } from "next-i18next";
import Title from "../../common/Title";

interface ContactsSectionProps {
  description: string;
}

function ContactsSection({ description }: ContactsSectionProps) {
  const { t } = useTranslation("home");

  return (
    <section className="mt-8 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2">
      <div className="space-y-4">
        <Title>{t("titles.contact")}</Title>
        <p className="text-secondary">{description}</p>
      </div>
    </section>
  );
}

export default ContactsSection;
