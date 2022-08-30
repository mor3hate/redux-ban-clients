const initialState = {
	customers: [],
}

export const customerReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_CUSTOMERS':
			return { ...state, customers: [...state.customers, action.payload] }
		case 'GET_CUSTOMERS':
			return { ...state, customers: [...state.customers, ...action.payload] }
		case 'REMOVE_CUSTOMERS':
			return {
				...state,
				customers: state.customers.filter(
					customer => customer.id !== action.payload
				),
			}

		default:
			return state
	}
}

export const getAllCustomers = payload => ({ type: 'GET_CUSTOMERS', payload })
