import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useEffect } from "react";
import { useAppSelector } from "src/redux/store";
import { useTranslation } from "react-i18next";

function toggleHtmlAtrr(lang) {
  document
    .getElementsByTagName("html")[0]
    .setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  document.getElementsByTagName("html")[0].setAttribute("lang", lang);
}

const AppThemeProvider = ({ children }) => {
  const lang = useAppSelector((state) => state.language.current);
  const { i18n } = useTranslation();

  const theme = createTheme({
    direction: lang === "ar" ? "rtl" : "ltr",
    palette: {
      primary: {
        main: "#7366ff",
      },
    },
  });

  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: lang === "ar" ? [rtlPlugin] : null,
  });

  useEffect(() => {
    i18n.changeLanguage(lang);
    toggleHtmlAtrr(lang);
  }, [lang, i18n]);

  return (
    <div>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </CacheProvider>
    </div>
  );
};

export default AppThemeProvider;
