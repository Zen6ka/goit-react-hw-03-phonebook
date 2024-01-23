import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
	margin: 0;
	font-family: Georgia, serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
	background-color: ${p => p.theme.colors.backround};
	color: ${p => p.theme.colors.text};
}

code {
	font-family: Georgia, serif;
		}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p { margin: 0;}

ul {
	margin: 0;
	padding: 0;
	list-style: none;
		}

img {
	display: block;
	max-width: 100%;
	height: auto;
	object-fit: cover;
		}

button {
	font-family: inherit;
	cursor: pointer;
			}
`;