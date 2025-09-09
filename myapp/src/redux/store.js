import {configureStore} from '@reduxjs/toolkit'
import studentSlices from './slises'

const store = configureStore({
    reducer : {
        students : studentSlices,
    }
})

export default store;