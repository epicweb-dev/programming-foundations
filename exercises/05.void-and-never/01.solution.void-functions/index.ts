// Logging System
// Functions that perform side effects return void

function logInfo(message: string): void {
	console.log(`[INFO] ${message}`)
}

function logError(message: string): void {
	console.log(`[ERROR] ${message}`)
}

function logWithTimestamp(message: string): void {
	const timestamp = new Date().toISOString()
	console.log(`[${timestamp}] ${message}`)
}

// ✅ Test your functions
logInfo('Application started')
logError('Connection failed')
logWithTimestamp('User logged in')

export {}
