import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import applyStyles from '../styles/apply.module.css'
import { useRouter } from 'next/router';


export default function Form() {
  const router = useRouter();

  const getApplication = async event => {
    event.preventDefault()
    console.log("event")
    const res = await fetch('/api/getApplication', {
      body: JSON.stringify({
        id: event.target.id.value,
        email: event.target.email.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    if(result.status === 'valid') {
      // alert('Successfully registered!')
      // window.location.href = '/nextsteps'
      router.push({
        pathname: '/application',
        query: { id: btoa(event.target.id.value), application: btoa(JSON.stringify({
          email: result.application.email,
          address1: result.application.address1,
          address2: result.application.address2,
          address3: result.application.address3,
          city: result.application.city,
          state: result.application.state,
          zipcode: result.application.zipcode,
          status: result.application.status,
        })) }
      });
    }
    else {

    }
    // result.user => 'Ada Lovelace'
  }

  return (
    <>
    <Layout>
      <Head>
        <title>Launch Application</title>
      </Head>
      <h1>Check Application Status</h1>
      <form onSubmit={getApplication}>
        <label htmlFor="email" className={applyStyles.formLabel}>Registration Email*</label>
        <input id="email" name="email" type="email" 
          autoComplete="email" className={applyStyles.formInput} align="right" required />
        <br/>
        <label htmlFor="id" className={applyStyles.formLabel}>Student ID*</label>
        <input id="id" name="id" type="number" autoComplete="id" className={applyStyles.formInput} required />
        <br/>
        <button className={applyStyles.formButton} type="submit">Login</button>
      </form>
    </Layout>
  </>
  )
}