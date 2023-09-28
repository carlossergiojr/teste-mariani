import { createSlice } from '@reduxjs/toolkit'

interface AuthState {}

export const initialState: AuthState = {
  email: []
}

const authSlice = createSlice({
  name: 'emails',
  initialState,
  reducers: {}
})

export default authSlice.reducer
