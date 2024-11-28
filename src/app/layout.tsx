import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "./fonts";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "@/app/style";

export const metadata: Metadata = {
  title: "롯데 케미컬 사이니지",
  description: "롯데 케미컬 발전소 사이니지 화면",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
