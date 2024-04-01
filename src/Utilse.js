export const stringSliceError = (str) => {
    return String(str).replace("Firebase: Error ", "")
}