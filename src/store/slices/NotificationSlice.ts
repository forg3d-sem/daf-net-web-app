import { createSlice } from '@reduxjs/toolkit'

type NotificationSlice = {
    notificationText: string,
    notificationType: null | "success" | "error" | "warning"
}

const initialState:NotificationSlice = {
    notificationText: '',
    notificationType: null
}

export const norificationSlice = createSlice({
    name: 'notifications',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setNotification(state, action) {
            state.notificationText = action.payload.text;
            state.notificationType = action.payload.type;
        },
        resetNotificationData(state) {
            state.notificationText = '';
            state.notificationType = null;
        }
    },
})

export const notificationActions = norificationSlice.actions;

export default norificationSlice.reducer;