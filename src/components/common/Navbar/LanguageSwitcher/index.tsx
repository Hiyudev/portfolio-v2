import * as Popover from "@radix-ui/react-popover";
import router, { useRouter } from "next/router";
import { Translate } from "phosphor-react";

const LocalesSupport = {
  en: "English",
  pt: "Português",
};

function LanguageSwitcher() {
  const { locale } = useRouter();

  const changeWebsiteLanguage = (lang: string) => {
    router.push(router.asPath, undefined, { locale: lang });
  };

  return (
    <Popover.Root>
      <Popover.Trigger aria-label="Language Switcher" className="fancy-ring fancy-ring-bg rounded-md transition-colors hover:text-primary-500 focus:text-primary-500">
        <Translate size={24} />
      </Popover.Trigger>
      <Popover.Content className="fancy-ring fancy-ring-bg-secondary rounded-md">
        <Popover.Arrow className="fill-zinc-800" />
        <ul className="bg-secondary flex flex-col justify-around gap-4 overflow-hidden rounded-md p-5">
          {Object.entries(LocalesSupport).map(([lang, label], i) => (
            <li key={i} className="flex items-center gap-2">
              <button
                aria-label={`Switch website language to ${label}`}
                className={`${
                  lang === locale ? "text-primary" : "text-secondary"
                } fancy-ring fancy-ring-bg-secondary rounded-md`}
                onClick={() => changeWebsiteLanguage(lang)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </Popover.Content>
    </Popover.Root>
  );
}

export default LanguageSwitcher;
