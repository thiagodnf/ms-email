module.exports = [
    {
        "subject": "Please confirm your email address",
        "body": `
            <div class="container">
                <div class="card mt-5 mb-5">
                    <div class="card-header">{{APP_NAME}}</div>
                    <div class="card-body">
                        <h1>Welcome</h1>
                        <p>{{EMAIL}}!</p>
                        <p>Thank you for signing up for {{APP_NAME}}!</p>
                        <p>To complete your account sign-up, please click on the button below to confirm your email:</p>
                        <div class="text-center mb-5 mt-5">
                            <a href="{{CONFIRMATION_URL}}" class="btn btn-primary btn-lg">Confirm my account</a>
                        </div>
                        <div class="mb-5 small">
                            <p>or copy/paste link in your browser: <br>
                                <a href="{{CONFIRMATION_URL}}">{{CONFIRMATION_URL}}</a>
                            </p>
                        </div>
                        <p>If you didn't request this, please ignore this email.</p>
                        <div class="mt-5">
                            <hr />
                            <p class="font-weight-bold mb-0">Yours, {{APP_NAME}} Team</p>
                            <p><a href="">{{APP_SUPPORT_EMAIL}}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        "type": "confirm-email",
        "locale": "en-US"
    },
    {
        "subject": "Por favor confirme o seu e-mail",
        "body": `
            <div class="container">
                <div class="card mt-5 mb-5">
                    <div class="card-header">{{APP_NAME}}</div>
                    <div class="card-body">
                        <h1>Bem-vindo!</h1>
                        <p>{{EMAIL}}!</p>
                        <p>Thank you for signing up for {{APP_NAME}}!</p>
                        <p>To complete your account sign-up, please click on the button below to confirm your email:</p>
                        <div class="text-center mb-5 mt-5">
                            <a href="{{CONFIRMATION_URL}}" class="btn btn-primary btn-lg">Confirm my account</a>
                        </div>
                        <div class="mb-5 small">
                            <p>or copy/paste link in your browser: <br>
                                <a href="{{CONFIRMATION_URL}}">{{CONFIRMATION_URL}}</a>
                            </p>
                        </div>
                        <p>If you didn't request this, please ignore this email.</p>
                        <div class="mt-5">
                            <hr />
                            <p class="font-weight-bold mb-0">Yours, {{APP_NAME}} Team</p>
                            <p><a href="">{{APP_SUPPORT_EMAIL}}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        "type": "confirm-email",
        "locale": "pt-BR"
    }
]
