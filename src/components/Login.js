import React from "react"

export default function Login() {
    return (
        <div className="loginForm d-flex flex-column justify-content-center align-items-center">
            <div className="form d-flex flex-column justify-content-center align-items-center">

                <div className="container">
                    <div className="row align-items-center justify-content-between mb-5">
                        <div className="col-1"></div>
                        <h3 className="col">Вход</h3>
                        <h3 className="col text-end">Регистрация</h3>
                        <div className="col-1"></div>
                    </div>
                </div>

                <form>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div class="col-10 form-floating mb-3">
                                <input type="text" class="form-control" id="Input" placeholder="name@example.com" />
                                <label for="Input" className="p-3">Username</label>
                            </div>

                            <div className="col-10 form-floating mb-2">
                                <input type="password" class="form-control" id="Password" placeholder="Password" />
                                <label for="Password" className="p-3">Password</label>
                            </div>

                            <div className="form-check col-9 mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="RememberMe" />
                                <label class="form-check-label" for="RememberMe">
                                    Запомнить меня
                                </label>
                            </div>

                            <div className="col-10 btn btn-primary button-login mb-3">
                                <button type="submit">Войти</button>
                            </div>

                            <div className="col-10 text-center">
                                <a href="">Забыли пароль?</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}