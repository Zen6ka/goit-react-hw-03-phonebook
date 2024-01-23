import styled from 'styled-components';

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: ${p => p.theme.spacing(4)};
	max-width:100%;
	width: 200px;
`;

export const Input = styled.input` 
	padding: ${p => p.theme.spacing(3)};
	margin-bottom: ${p => p.theme.spacing(3)};
	border-radius: ${p => p.theme.radii.lg};
	border: 1px solid ${p => p.theme.colors.gray};
	outline: 0;
	background-color: ${p => p.theme.colors.white};
`;

export const Button = styled.button`
	padding: ${p => p.theme.spacing(2)};
	margin-top: ${p => p.theme.spacing(4)};
	font-size: 16px;
	font-weight: 700;
	border-radius: ${p => p.theme.radii.md};;
	border: 1px solid ${p => p.theme.colors.gray};
	background-color: ${p => p.theme.colors.bgbutton};
	transition: all 200ms linear;
	cursor: pointer;
		&:hover,
		&:focus {
		background-color: ${p => p.theme.colors.bgfocus};
		border: 1px solid ${p => p.theme.colors.gray};
		color: ${p => p.theme.colors.text};
		}
		`;

export const Text = styled.p`
	text-align: left;
	color: ${p => p.theme.colors.white};
	margin-top: ${p => p.theme.spacing(2)};;
	margin-bottom: ${p => p.theme.spacing(1)};;  
`;