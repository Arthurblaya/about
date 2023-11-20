export async function handleResponse(response, onSuccess, onError) {
    try {
        if (!response.ok) {
            const { message } = await response.json()
            throw new Error(message)
        }
        await onSuccess()
    }
    catch (error) {
        await onError(error)
    }
}