/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'
import Cookie from 'js-cookie'
import { toast } from 'react-toastify'
import * as authActions from '@/store/actions/authActions'

interface AuthState {
  token: string | null | undefined
  loading: boolean
  error: string | null
  qr: string
  secret: string
  message: string
}

export const initialState: AuthState = {
  token: Cookie.get('TOKEN'),
  loading: false,
  error: null,
  qr: '',
  secret: '',
  message: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null
      Cookie.remove('TOKEN')
      Cookie.remove('userId')
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authActions.login.pending, (state) => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(authActions.login.fulfilled, (state, action) => {
      state.loading = false
      if (action.payload?.access_token) {
        state.token = action.payload?.access_token
        Cookie.set('TOKEN', `Bearer ${state.token}`, {
          secure: true,
          expires: 1
        })
      }
    })
    builder.addCase(authActions.login.rejected, (state, action: any) => {
      state.error = action.payload
      state.loading = false
      if (!action.payload) {
        toast.error('Ocorreu um erro no login')
      }
    }),
      builder.addCase(authActions.registerUser.pending, (state) => {
        state.loading = true
      })
    builder.addCase(authActions.registerUser.fulfilled, (state) => {
      state.loading = false
      //   Cookie.set('userId', action.payload.userId, { secure: true, expires: 1 })
    })
    builder.addCase(authActions.registerUser.rejected, (state, action: any) => {
      state.loading = false
      state.error = action.payload
      toast.error(action.payload)
    })
  }
})

export const { logout } = authSlice.actions

export default authSlice.reducer
