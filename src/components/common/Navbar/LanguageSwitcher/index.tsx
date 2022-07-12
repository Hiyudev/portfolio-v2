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
      <Popover.Trigger className="fancy-ring fancy-ring-bg rounded-md">
        <Translate size={24} />
      </Popover.Trigger>
      <Popover.Content className="fancy-ring fancy-ring-bg mt-4 rounded-md">
        <ul className="bg-primary flex flex-col justify-around gap-2 overflow-hidden p-5">
          {Object.entries(LocalesSupport).map(([lang, label], i) => (
            <li key={i} className="flex items-center gap-2">
              <button onClick={() => changeWebsiteLanguage(lang)}>
                <a
                  aria-label={`Switch website language to ${label}`}
                  className={`${
                    lang === locale ? "text-primary" : "text-gray-500"
                  } fancy-ring fancy-ring-bg rounded-md`}
                >
                  {label}
                </a>
              </button>
            </li>
          ))}
        </ul>
      </Popover.Content>
    </Popover.Root>
  );
}

export default LanguageSwitcher;
