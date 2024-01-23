import styled from 'styled-components';

export const ContactItems = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: ${p => p.theme.spacing(3)};  
`;

export const Contact = styled.span` 
	margin-right: ${p => p.theme.spacing(2)}; 
	color: ${p => p.theme.colors.white};
	font-size: 16px;
	font-weight: 500;
`;

export const Button = styled.button` 
	padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(3)};
	margin-left: ${p => p.theme.spacing(3)};  
	font-size: 16px;
	font-weight: 700;
	border-radius: ${p => p.theme.radii.md};;
	border: 1px solid ${p => p.theme.colors.gray};
	background-color: ${p => p.theme.colors.bgbutton};
	transition: all 200ms linear;
		&:hover,
		&:focus {
		background-color: ${p => p.theme.colors.bgfocus};
		border: 1px solid ${p => p.theme.colors.gray};
} 
`;