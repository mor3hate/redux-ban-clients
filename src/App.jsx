import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomers } from './AsyncActions/customers'

function App() {
	const dispatch = useDispatch()
	const cash = useSelector(state => state.cashReducer.cash)
	const customers = useSelector(state => state.customerReducer.customers)

	const addCash = cash => {
		dispatch({ type: 'ADD_CASH', payload: cash })
	}

	const getCash = cash => {
		dispatch({ type: 'GET_CASH', payload: cash })
	}

	const addCustomer = name => {
		const customer = {
			name,
			id: Date.now(),
		}
		dispatch({ type: 'ADD_CUSTOMERS', payload: customer })
	}

	const removeCustomer = client => {
		dispatch({ type: 'REMOVE_CUSTOMERS', payload: client.id })
	}

	return (
		<div className='app-wrapper'>
			<p style={{ fontSize: '2rem' }}>{cash}</p>
			<div className='btn-wrapper'>
				<button className='btn-cash' onClick={() => addCash(+prompt())}>
					Add cash
				</button>
				<button className='btn-cash' onClick={() => getCash(+prompt())}>
					Get cash
				</button>
				<button className='btn-cash' onClick={() => addCustomer(prompt())}>
					Add customer
				</button>
				<button className='btn-cash' onClick={() => dispatch(fetchCustomers())}>
					Get customers
				</button>
			</div>
			{customers.length > 0 ? (
				<div className='customers'>
					{customers.map(item => (
						<div onClick={() => removeCustomer(item)}>{item.name}</div>
					))}
				</div>
			) : (
				<div className='customers'>No customers</div>
			)}
		</div>
	)
}

export default App
