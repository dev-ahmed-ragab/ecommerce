import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

type TResponse = {id: number, title: string, prefix: string, img: string}[]

const actGetCategories = createAsyncThunk("categories/actGetCategories", async (_ , thunkAPI) => {
const {rejectWithValue} = thunkAPI
try{
    const response = await axios.get<TResponse>('http://localhost:3001/categories')
    const {data} = response.data.map(el => el.id)
    return data
} catch(error){
    if(axios.isAxiosError(error)){
    return rejectWithValue(error.response?.data.message || error.message)
}
    else{
        return rejectWithValue('an unexpected error')
    }
}
}