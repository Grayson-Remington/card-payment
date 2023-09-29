export default function FrontOfCard(props) {
	return (
		<div className='w-full relative'>
			<div className='absolute w-full text-right pr-2 text-white text-xl'>
				Credit Card
			</div>
			<div className='chip w-12 h-10 absolute border border-black mt-20 ml-10 rounded-lg bg-gradient-to-r from-yellow-200 to-yellow-400 flex items-center justify-center'>
				<div className='absolute border border-black rounded-lg bg-transparent h-[90%] w-[90%]'></div>
				<div className='absolute border border-black rounded-md bg-gradient-to-r from-yellow-300 to-yellow-400 h-3/4 w-5/12 z-20'></div>
				<div className='absolute w-full h-[1px] bg-black top-1/4' />
				<div className='absolute w-full h-[1px] bg-black top-2/4' />
				<div className='absolute w-full h-[1px] bg-black top-3/4' />
				<div className='absolute w-[1px] h-full bg-black left-1/2' />
			</div>
			<div className='flex flex-col w-full px-8 pt-32'>
				<input
					className='text-2xl w-full bg-transparent text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] placeholder:text-white placeholder:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'
					type='text'
					placeholder='0000 0000 0000 0000'
					value={props.CardNumber}
					maxLength={19}
					onChange={(e) => {
						// Remove non-numeric characters using a regular expression
						const numericValue = e.target.value.replace(/\D/g, '');

						// Split the numeric string into groups of four digits and join them with spaces
						const formattedValue = numericValue
							.match(/.{1,4}/g)
							?.join(' ');

						// Update the card number in the parent component's state
						props.setCardNumber(formattedValue || '');
					}}
				/>
				<div className='flex self-center mt-2'>
					<h1 className='flex flex-col text-xs pr-2 uppercase'>
						Valid <span>Thru</span>
					</h1>
					<input
						className='bg-transparent w-12 text-lg text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] placeholder:text-white placeholder:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'
						type='text'
						maxLength={5}
						placeholder='00/00'
						value={props.expirationDate}
						onChange={(e) => {
							// Remove non-numeric characters using a regular expression
							const numericValue = e.target.value.replace(
								/\D/g,
								''
							);

							// Split the numeric string into groups of four digits and join them with spaces
							const formattedValue = numericValue
								.match(/.{1,2}/g)
								?.join('/');

							// Update the card number in the parent component's state
							props.setExpirationDate(formattedValue || '');
						}}
					/>
				</div>
				<input
					className='bg-transparent w-full mt-1 text-white uppercase [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] placeholder:text-white placeholder:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'
					type='text'
					value={props.cardHolderName}
					onChange={(e) => {
						props.setCardHolderName(e.target.value);
					}}
					placeholder='cardholder name'
				/>
			</div>
		</div>
	);
}
