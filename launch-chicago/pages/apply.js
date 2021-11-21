import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import applyStyles from '../styles/apply.module.css'

export default function Form() {
  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch('/api/register', {
      body: JSON.stringify({
        name: event.target.name.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    // result.user => 'Ada Lovelace'
  }

  return (
    <>
    <Layout>
      <Head>
        <title>Apply to Launch</title>
      </Head>
      <h1>Student Application</h1>
      <p><i>This form does not auto-save your entries. Please write all essays in a seperate area and prepare all attachments before completing the form. {' '} <br/> <br/> Fields marked with a * are required.</i></p>
      <form onSubmit={registerUser}>
        <label htmlFor="name" className={applyStyles.formLabel}>Full Name*</label>
        <input id="name" name="name" type="text" autoComplete="name" className={applyStyles.formInput} align="right" required />
        <br/>
        <label htmlFor="email" className={applyStyles.formLabel}>Email*</label>
        <input id="email" name="email" type="email" autoComplete="email" className={applyStyles.formInput} align="right" required />
        <br/>
        <label htmlFor="address1" className={applyStyles.formLabel}>Street Address*</label>
        <input id="address" name="address" type="text" autoComplete="address" className={applyStyles.formInput} required />
        <br/>
        <label htmlFor="address2" className={applyStyles.formLabel}>Address Line 2</label>
        <input id="address" name="address" type="text" autoComplete="address" className={applyStyles.formInput} />
        <br/>
        <label htmlFor="address3" className={applyStyles.formLabel}>Address Line 3</label>
        <input id="address" name="address" type="text" autoComplete="address" className={applyStyles.formInput} />
        <br/>
        <label htmlFor="city" className={applyStyles.formLabel}>City*</label>
        <input id="city" name="city" type="text" autoComplete="city" className={applyStyles.formInput} required />
        <br/>
        <label htmlFor="state" className={applyStyles.formLabel}>State*</label>
        <input id="state" name="state" type="text" autoComplete="state" className={applyStyles.formInput} required />
        <br/>
        <label htmlFor="zipcode" className={applyStyles.formLabel}>Zip Code*</label>
        <input id="zipcode" name="zipcode" type="number" autoComplete="zipcode" className={applyStyles.formInput} required />
        <br/>
        <button className={applyStyles.formButton} type="submit">Submit Launch Application</button>
      </form>
    </Layout>
  </>
  )
}