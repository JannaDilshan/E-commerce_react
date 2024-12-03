import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null, 
  status: '',  
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user)); 
      state.status = 'Registration successful!';
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      if (email === 'janith@test.com' && password === 'password') {
        state.user = { email };
        localStorage.setItem('user', JSON.stringify(state.user));
        state.status = 'Login successful!';
      } else {
        state.status = 'Invalid email or password';
        throw new Error('Invalid credentials');
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user'); 
      state.status = 'You have been logged out';
    },
    clearStatus: (state) => {
      state.status = ''; 
    },
  },
});

export const { register, login, logout, clearStatus } = authSlice.actions;

export default authSlice.reducer;
