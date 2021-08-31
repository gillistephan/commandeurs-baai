import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="On Saturday, 4th of September we are going to cross from Curaçao to Aruba by kayak. | Bringing awareness of the need to protect our delicate ecosystems in Aruba with conservation of Commandeurs Baai as a focal point."
				/>
				<meta
					name="robots"
					content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
				/>
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="We kayak for Nature | Passion and Love for Nature"
				/>
				<meta
					property="og:description"
					content="On Saturday, 4th of September we are going to cross from Curaçao to Aruba by kayak. | Bringing awareness of the need to protect our delicate ecosystems in Aruba with conservation of Commandeurs Baai as a focal point."
				/>
				<meta property="og:site_name" content="Commandeurs Baai" />
				<meta property="og:image" content="/banner-image.jpg" />
			</Head>
			<ChakraProvider resetCSS theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
