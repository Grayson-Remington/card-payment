import './index.css';
import FrontOfCard from './components/FrontOfCard';
import BackOfCard from './components/BackOfCard';
import { useState } from 'react';

function App() {
	const [CardNumber, setCardNumber] = useState();
	const [expirationDate, setExpirationDate] = useState();
	const [cardHolderName, setCardHolderName] = useState();
	const [CVV, setCVV] = useState();
	const [isCardFlipped, setIsCardFlipped] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	function delay(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	async function FlipCard() {
		setIsAnimating(true);
		await delay(400);
		setIsCardFlipped(!isCardFlipped);
		await delay(400);
		setIsAnimating(false);
	}

	return (
		<div className='flex flex-col gap-4 w-full h-full items-center justify-center'>
			<div
				className={`w-96 h-64 border rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  ${
					isAnimating ? 'animation1' : ''
				}`}
			>
				{!isCardFlipped ? (
					<FrontOfCard
						setCardNumber={setCardNumber}
						CardNumber={CardNumber}
						cardHolderName={cardHolderName}
						setCardHolderName={setCardHolderName}
						setExpirationDate={setExpirationDate}
						expirationDate={expirationDate}
					/>
				) : (
					<BackOfCard
						setCVV={setCVV}
						CVV={CVV}
					/>
				)}
			</div>

			<button onClick={FlipCard}>Flip</button>
		</div>
	);
}

export default App;
