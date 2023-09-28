/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import api from '@/services/api'

interface LoginResponse {
  access_token: string
}

export const login = createAsyncThunk(
  'auth/login',
  async (
    credentials: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      console.log('resposte login', credentials)
      const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json'
        }
      }
      const response = await api.post<LoginResponse>(
        'users/auth',
        credentials,
        config
      )
      console.log('resposte login', response.data)

      return response.data
    } catch (err: any) {
      console.log('response error', err?.response)
      toast.error(err?.response?.data?.message)
      return rejectWithValue(err?.response?.data)
    }
  }
)

type RegisterUserProps = {
  name: string
  email: string
  password: string
  cpf: string
  phone: string
}

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (data: RegisterUserProps, { rejectWithValue }) => {
    try {
      console.log('resposte registerUser', data)
      const config = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json'
        }
      }

      const response = await api.post('users', data, config)
      return response.data
    } catch (error: any) {
      toast.error(error?.response?.data?.message)
      return rejectWithValue(error?.response?.data?.error)
    }
  }
)
