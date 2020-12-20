import Head from 'next/head'
import { useState, FormEvent } from 'react'

import Layout from "../../components/layout.js"

// @ts-expect-error
import styles from "./index.module.scss"

export default function Authorization() {

  const [isLoggedIn, switchIsLoggedIn] = useState(false);
  const [isPassVisible, switchPassVisibility] = useState(false);

  /**
   * @param {FormEvent<HTMLFormElement>} event 
   */
  function handleRegistration(event) {
  event.preventDefault();
  }

  /**
   * @param {FormEvent<HTMLFormElement>} event 
   */
  function handleLogin(event) {
  event.preventDefault();
  }

  /**
   * @param {FormEvent<HTMLFormElement>} event 
   */
  function handleLogout(event) {
  event.preventDefault();
  }

  function handlePassVisibility() {
    switchPassVisibility((state) => !state)
  }

  return (
    <Layout>
    
      <Head>
        <title>
          Authorization page
        </title>
      </Head>

      <h1>Authorization</h1>
      <section>
        <div className={styles.buttonpanel}>
          <button type="button" className="hiddenswitch">
            <label htmlFor="registerform" className="hiddenlabel">
              <span className="fas fa-user-plus"></span> Register
            </label>
          </button>
          <button type="button" className="hiddenswitch">
            <label htmlFor="loginform" className="hiddenlabel">
            <span className="fas fa-sign-in-alt"></span> Log in
            </label>
          </button>
        </div>

        <input type="radio" id="registerform" className="hiddenswitcher" name="paneview" hidden defaultChecked={!isLoggedIn} />
        <form onSubmit={handleRegistration}>
          <div>
            <label htmlFor="newEmail">
              Email *:
            </label>
            <input type="email" id="newEmail" name="Email" autoComplete="" required />
          </div>
          <div>
            <label htmlFor="newPassword">
              Password *:
            </label>
            <input 
              type={isPassVisible ? "text" : "password"} 
              id="newPassword" 
              name="password" 
              autoComplete="" 
              required 
            />
            <button type="button" onClick={handlePassVisibility}>
              {isPassVisible 
                ? (<>
                  <span className="fas fa-eye"></span> Show password </>)
                : (<>
                  <span className="fas fa-low-vision"></span> Hide password </>)
                }
            </button>
          </div>
          <div>
            <button type="submit">
              <span className="fas fa-user-plus"></span> Register
            </button>
          </div>
        </form>
        
        <input type="radio" id="loginform" className="hiddenswitcher" name="paneview"hidden />
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="oldEmail">
              Email *:
            </label>
            <input type="email" id="oldEmail" name="email" autoComplete="" required />
          </div>
          <div>
            <label htmlFor="oldPassword">
              Password *:
            </label>
            <input 
              type={isPassVisible ? "text" : "password"}
              id="oldPassword" 
              name="password" 
              autoComplete="" 
              required 
            />
            <button type="button" onClick={handlePassVisibility}>
              {isPassVisible 
                ? (<>
                  <span className="fas fa-eye"></span> Show password </>)
                : (<>
                  <span className="fas fa-low-vision"></span> Hide password </>)
              }
            </button>
          </div>
          <div>
            <button type="submit">
              <span className="fas fa-sign-in-alt"></span> Log in
            </button>
          </div>
        </form>

        <form hidden onSubmit={handleLogout}>
          <button type="submit">
          <span className="fas fa-sign-out-alt"></span> Log out
          </button>
        </form>
      </section>
    </Layout>
  )
}

