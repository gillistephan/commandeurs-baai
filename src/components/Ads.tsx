import * as React from "react";

import {
	Box,
	Center,
	HTMLChakraProps,
	Heading,
	SimpleGrid,
	chakra,
	Image,
} from "@chakra-ui/react";

export const Logo = (props: HTMLChakraProps<"svg">) => (
	<chakra.svg h="0.8em" viewBox="0 0 140 28" fill="none" {...props}>
		<path
			fill="#00a7e0"
			d="M3.883,3.4029h-3.888v18.329h11.023v-3.222H3.883V3.4029z"
		/>

		<path
			fill="#00a7e0"
			d="M12.803,3.6849c0.0349,1.193,1.029,2.1325,2.222,2.1
    c1.175,0.0441,2.1633-0.8727,2.2073-2.0477c0.0441-1.175-0.8727-2.1632-2.0477-2.2073c-0.0532-0.002-0.1065-0.002-0.1597,0
    c-1.197-0.0298-2.1915,0.9163-2.2214,2.1133C12.8033,3.6571,12.8031,3.671,12.803,3.6849z"
		/>

		<path
			fill="#00a7e0"
			d="M26.222,3.5599c0.8258,0.0001,1.6371,0.2177,2.352,0.631V1.039
    c-0.8923-0.443-1.879-0.6623-2.875-0.639c-3.371,0-5.227,1.9-5.227,5.349v2.282h-7.277v13.7h3.66V10.9099h3.618v10.823h3.692
    v-10.823h2.472l1.129-2.878h-3.6v-2.345c-0.1577-1.0123,0.5352-1.9607,1.5475-2.1183
    C25.8818,3.5424,26.0529,3.5395,26.222,3.5599z"
		/>

		<path
			fill="#00a7e0"
			d="M39.679,18.3279c-0.0055-0.1567-0.137-0.2794-0.2938-0.2739
    c-0.0408,0.0014-0.0808,0.0116-0.1172,0.0299l-0.081,0.038l-0.112,0.052l-0.148,0.066l-0.122,0.053l-0.128,0.052l-0.142,0.057
    l-0.076,0.029c-1.1256,0.4153-2.3184,0.6187-3.518,0.6c-1.9,0-4.093-0.963-4.409-3.079v-0.198h9.605v-1.627
    c0-2.407-0.8-6.445-6.175-6.445c-4.182,0-6.992,2.942-6.992,7.321c0,4.323,2.9,7.008,7.58,7.008
    c1.7908,0.0811,3.5684-0.3427,5.13-1.223L39.679,18.3279z M30.566,13.5989c0.387-1.953,1.589-3.074,3.3-3.074
    c1.789,0,2.837,1.128,2.874,3.094v0.127h-6.2L30.566,13.5989z"
		/>

		<path
			fill="#002855"
			d="M53.973,3.4029l-5.414,14.829l-5.486-14.829h-4.162l7.187,18.33h4.817l7.187-18.33H53.973
    z"
		/>

		<path
			fill="#002855"
			d="M104.451,9.2969L104.451,9.2969c-0.1385-0.188-0.2935-0.3634-0.463-0.524
    c-0.967-0.867-2.326-0.918-3.748-0.93c-1.711-0.015-3.762,0.149-3.774,0.15l-1.128,2.876c0.025,0,2.768-0.038,3.332-0.038
    c0.8123-0.0992,1.6364,0.0124,2.393,0.324c0.4766,0.2655,0.7444,0.7936,0.677,1.335v1.163h-1.731c-2.921,0-6.4,0.722-6.4,4.16
    c0,2.761,2.154,4.16,6.4,4.16c1.7986-0.0107,3.5922-0.1909,5.357-0.538v-8.908
    C105.4165,11.3799,105.0957,10.2471,104.451,9.2969z M101.741,19.2859l-0.1,0.023c-0.5481,0.11-1.106,0.1637-1.665,0.16
    c-1.748,0-2.711-0.655-2.711-1.845s1.022-1.814,3.037-1.814h1.437L101.741,19.2859z"
		/>

		<path
			fill="#002855"
			d="M76.277,7.6789c-2.3242,0.0306-4.6288,0.4296-6.828,1.182v12.832h3.659v-10.445
    l0.091-0.028c0.9029-0.2713,1.8402-0.4104,2.783-0.413c1.773,0,2.711,0.865,2.711,2.5v8.383h3.692v-8.635
    C82.386,9.3889,80.445,7.6789,76.277,7.6789z"
		/>

		<path
			fill="#002855"
			d="M88.075,8.0319v-4.629h-3.659v14.229c0,0.2,0.009,0.405,0.026,0.6
    c0.0422,1.7051,1.2173,3.1724,2.872,3.586c0.5781,0.157,1.175,0.2337,1.774,0.228c0.233,0,0.472-0.009,0.751-0.027l0.182-0.015
    h0.042c0.18-0.016,0.358-0.037,0.531-0.062l0.073-0.01l0.117-0.017c0.187-0.032,0.354-0.065,0.509-0.1l0.061-0.019
    c0.277-0.068,0.613-0.162,0.827-0.239v-2.7249c-0.0045-0.1546-0.1334-0.2762-0.288-0.2718
    c-0.0279,0.0008-0.0555,0.0058-0.082,0.0148l-0.027,0.008l-0.029,0.009l-0.057,0.017l-0.028,0.009l-0.059,0.018l-0.022,0.006
    l-0.067,0.019h-0.009l0,0l-0.15,0.04l-0.069,0.017l-0.077,0.018l-0.089,0.019l-0.05,0.01l-0.1,0.019l0,0
    c-0.2662,0.046-0.5359,0.0691-0.806,0.069c-1.406,0-2.09-0.726-2.09-2.22v-5.724h4.963l1.129-2.878L88.075,8.0319z"
		/>

		<path
			fill="#002855"
			d="M66.387,9.2969L66.387,9.2969c-0.1385-0.188-0.2934-0.3634-0.463-0.524
    c-0.967-0.867-2.326-0.918-3.748-0.93c-1.711-0.015-3.762,0.149-3.774,0.15l-1.128,2.876c0.025,0,2.768-0.038,3.332-0.038
    c0.8123-0.0992,1.6364,0.0124,2.393,0.324c0.4767,0.2654,0.7446,0.7936,0.677,1.335v1.163h-1.731c-2.921,0-6.4,0.722-6.4,4.16
    c0,2.761,2.154,4.16,6.4,4.16c1.7989-0.0107,3.5929-0.1909,5.358-0.538v-8.908C67.3533,11.3798,67.0321,10.2469,66.387,9.2969z
     M63.677,19.2859l-0.1,0.023c-0.5481,0.11-1.106,0.1637-1.665,0.16c-1.748,0-2.711-0.655-2.711-1.845s1.027-1.8091,3.039-1.8091
    h1.437V19.2859z"
		/>

		<path
			fill="#002855"
			d="M114.785,7.6469c-5.052,0-8.069,2.62-8.069,7.007c0,4.309,2.748,6.882,7.351,6.882
    c0.8938,0.0239,1.7834-0.1305,2.617-0.454l0.191-0.1v0.49c0,2.017-1.307,3.221-3.5,3.221
    c-1.212,0.0133-2.4147-0.213-3.539-0.666l0,0l-0.014-0.006l-0.174-0.071l-0.1-0.041l-0.152-0.066
    c-0.0833-0.0367-0.167-0.075-0.251-0.115l-0.062-0.03l-0.165-0.08c-0.1392-0.0724-0.3106-0.0183-0.3831,0.1208
    c-0.0197,0.0378-0.0306,0.0796-0.0319,0.1222v2.754c1.5342,0.6698,3.1931,1.0059,4.867,0.986c1.686,0,7.188-0.436,7.188-6.037
    v-12.9C118.7097,7.9838,116.7546,7.6393,114.785,7.6469z M116.876,18.1839l-0.089,0.029c-0.726,0.2631-1.4908,0.403-2.263,0.414
    c-2.0552,0.1952-3.8795-1.3126-4.0748-3.3678c-0.0191-0.2012-0.0219-0.4036-0.0082-0.6052c0-2.561,1.542-3.971,4.344-3.971
    c0.6768,0.0025,1.3499,0.0991,2,0.287l0.091,0.027V18.1839z"
		/>

		<path
			fill="#002855"
			d="M134.808,18.3279c-0.0055-0.1567-0.137-0.2794-0.2938-0.2739
    c-0.0408,0.0014-0.0807,0.0116-0.1172,0.0299l-0.081,0.038l-0.111,0.052l-0.148,0.066l-0.122,0.053l-0.128,0.053l-0.142,0.057
    l-0.077,0.029c-1.1253,0.4151-2.3177,0.6185-3.517,0.6c-1.9,0-4.093-0.963-4.409-3.079v-0.199h9.6022v-1.627
    c0-2.407-0.8-6.445-6.175-6.445c-4.182,0-6.992,2.942-6.992,7.321c0,4.323,2.9,7.008,7.58,7.008
    c1.7908,0.081,3.5684-0.3427,5.13-1.223L134.808,18.3279z M125.695,13.5989c0.387-1.953,1.589-3.074,3.3-3.074
    c1.789,0,2.837,1.128,2.875,3.094v0.127h-6.2L125.695,13.5989z"
		/>

		<path
			fill="#002855"
			d="M136.605,19.0469c-0.0055-0.9389,0.7511-1.7044,1.69-1.71
    c0.9388-0.0055,1.7044,0.7511,1.71,1.69c0.0055,0.9389-0.7511,1.7044-1.69,1.71c-0.0033,0-0.0067,0-0.0099,0
    c-0.9323,0.0066-1.6934-0.7437-1.7-1.6759C136.605,19.0563,136.605,19.0516,136.605,19.0469z M136.861,19.0469
    c-0.0027,0.7947,0.6392,1.4412,1.434,1.444s1.4413-0.6393,1.444-1.434s-0.6393-1.4412-1.434-1.444c-0.0013,0-0.0027,0-0.004,0
    c-0.7931-0.0022-1.4377,0.639-1.4399,1.432C136.861,19.0457,136.861,19.0463,136.861,19.0469L136.861,19.0469z M138.261,19.2549
    h-0.336v0.765h-0.271v-1.937h0.791c0.3274-0.021,0.6098,0.2274,0.6308,0.5547c0.0007,0.0117,0.0012,0.0235,0.0012,0.0352
    c0.0056,0.2914-0.2106,0.5396-0.5,0.574l0.52,0.773h-0.336L138.261,19.2549z M137.925,18.3219v0.685h0.52
    c0.1891,0.0102,0.3508-0.1348,0.361-0.324c0.0103-0.1891-0.1348-0.3508-0.324-0.361c-0.0123-0.0007-0.0247-0.0007-0.037,0
    H137.925z"
		/>
	</chakra.svg>
);

export const Ads = () => {
	return (
		<Box as="section" py={{ base: "12", md: "40" }}>
			<Box maxW={{ md: "7xl" }} mx="auto" px={{ base: "8", lg: 0 }}>
				<Heading
					color="gray.700"
					align="center"
					fontWeight="extrabold"
					maxW="md"
					mx="auto"
				>
					Our Sponsors
				</Heading>
				<SimpleGrid
					columns={{ base: 1, sm: 2, lg: 3 }}
					mt="8"
					spacing="6"
					color="inherit"
				>
					<Center
						py="2"
						px="8"
						rounded={{ md: "lg" }}
						bg="gray.50"
						as="a"
						cursor="pointer"
						href="https://childfirst-foundation.com/"
					>
						<Image src="/sponsor_4.png" h="6rem" />
					</Center>
					<Center
						py="2"
						px="8"
						rounded={{ md: "lg" }}
						bg="gray.50"
						as="a"
						cursor="pointer"
						href="https://www.dejonghsports.com/"
					>
						<Image src="/sponsor_3.jpeg" h="6rem" />
					</Center>
					<Center
						py="2"
						px="8"
						rounded={{ md: "lg" }}
						bg="gray.50"
						as="a"
						cursor="pointer"
						href="https://serenebythesea.com/"
					>
						<Image src="/sponsor_2.jpg" h="6rem" />
					</Center>
					<Center
						py="8"
						px="8"
						bg="gray.50"
						rounded={{ md: "lg" }}
						cursor="pointer"
						as="a"
						href="https://theone.lifevantage.com/"
					>
						<Logo h="8" opacity={0.64} />
					</Center>
					<Center
						py="8"
						px="8"
						rounded={{ md: "lg" }}
						bg="gray.50"
						as="a"
						cursor="pointer"
						href="https://serenebythesea.com/"
					>
						<Image src="/sponsor_1.webp" h="4rem" />
					</Center>
				</SimpleGrid>
			</Box>
		</Box>
	);
};
