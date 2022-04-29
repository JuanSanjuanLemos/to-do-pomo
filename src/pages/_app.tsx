import "../../src/styles/globals.ts";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globals";
import Modal from "react-modal";

import { ModalProvider } from "../hooks/useModal";
import { TasksListProvider } from "../hooks/useTasksList";

Modal.setAppElement("body");

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TasksListProvider>
      <ModalProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </ModalProvider>
    </TasksListProvider>
  );
}
