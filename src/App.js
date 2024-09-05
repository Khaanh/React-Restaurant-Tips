function App() {
	return (
		<div className="App">
			<form>
				<div>
					<p>How much was the bill ?</p>
					<input type="number" placeholder="0" />
				</div>

				<div>
					<p>How did you like the service ?</p>
					<select>
						<option value={1}>Dissatisfied (0%)</option>
						<option value={2}>It was okay (5%)</option>
						<option value={3}>It was good (10%)</option>
						<option value={3}>Absolutely amazing! (20%)</option>
					</select>
				</div>

				<div>
					<p>How did your friend like the service ?</p>
					<select>
						<option value={1}>Dissatisfied (0%)</option>
						<option value={2}>It was okay (5%)</option>
						<option value={3}>It was good (10%)</option>
						<option value={3}>Absolutely amazing! (20%)</option>
					</select>
				</div>
			</form>
		</div>
	);
}

export default App;
