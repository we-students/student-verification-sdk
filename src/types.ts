interface WscSdkOptions {
    apiKey: string
    userExternalId: string
    onCompleted?: (data: OnCompletedData) => void
    options?: ConfigOptions
}

interface OnCompletedData {
    userId: string
    verified: boolean
    status: 'PENDING' | 'REJECTED' | 'VERIFIED'
}

interface ConfigOptions {
    wsLoginEnabled: boolean
    electronicRegisterEnabled: boolean
}