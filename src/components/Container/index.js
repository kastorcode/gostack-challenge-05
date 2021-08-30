import styled from 'styled-components';

const Container = styled.div`
	width: 96%;
	max-width: 768px;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	padding: 30px;
	margin: 80px auto 40px;

	h1 {
		font-size: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;

		svg {
			font-size: 24px;
			margin-right: 10px;
		}
	}
`;

export default Container;