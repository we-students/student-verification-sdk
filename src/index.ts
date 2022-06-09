const STUDENT_VERIFICATION_BASE_URL = 'https://verify.westudents.it'

export const init = ({
    apiKey, 
    userExternalId, 
    onCompleted,
    options
}: WscSdkOptions) => {

    const eventListener = (event: MessageEvent<any>) => {
        if (event.origin === STUDENT_VERIFICATION_BASE_URL) {
            const { userId, verified, status } = event.data
            onCompleted && onCompleted({ userId, verified, status })
        }
    }

    window.addEventListener('message', eventListener)

    window.onunload = (() => {
        window.removeEventListener('message', eventListener)
    })

    window.open(
        `${STUDENT_VERIFICATION_BASE_URL}/methods?api_key=${apiKey}${userExternalId ? `&user_id=${userExternalId}` : ''}${options?.wsLoginEnabled !== undefined ? `&ws_login_enabled=${options?.wsLoginEnabled}` : ''}${options?.electronicRegisterEnabled !== undefined ? `&electronic_register_enabled=${options?.electronicRegisterEnabled}` : ''}`, 
        'popUpWindow', 
        'height=700,width=1000,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes'
    )


}

