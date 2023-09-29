export default function BackOfCard(props) {
	return (
		<div>
			<div className='black-bar w-full h-10 bg-black mt-5' />
			<div className='flex w-full  ml-6 mt-4'>
				<div className='signature-location rounded-l-md h-10 w-1/2' />
				<input
					className='w-10 rounded-r-md text-lg'
					type='text'
					maxLength={4}
					value={props.CVV}
					onChange={(e) => props.setCVV(e.target.value)}
				/>
			</div>
		</div>
	);
}
