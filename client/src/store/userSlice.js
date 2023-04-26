import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {}
    },
    reducers: {
        setAuth: (state, action) => {
            state.value = action.payload
        },
        purgeAuth: (state) => {
            state.value = {}
        },

    }
})

export const { setAuth, purgeAuth } = userSlice.actions

export default userSlice.reducer