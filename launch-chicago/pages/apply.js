import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import applyStyles from '../styles/apply.module.css'
import { useRouter } from 'next/router';


export default function Form() {
  const router = useRouter();

  const registerUser = async event => {
    event.preventDefault()
    console.log("event")
    const res = await fetch('/api/register', {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        address1: event.target.address1.value,
        address2: event.target.address2.value,
        address3: event.target.address3.value,
        city: event.target.city.value,
        state: event.target.state.value,
        zipcode: event.target.zipcode.value,
        status: "Pending Review"
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    if(result.status === 'registered') {
      // alert('Successfully registered!')
      // window.location.href = '/nextsteps'
      router.push({
        pathname: '/nextsteps',
        query: { id: btoa(result.randomStudentID), application: btoa(JSON.stringify({
          name: event.target.name.value,
          email: event.target.email.value,
          address1: event.target.address1.value,
          address2: event.target.address2.value,
          address3: event.target.address3.value,
          city: event.target.city.value,
          state: event.target.state.value,
          zipcode: event.target.zipcode.value,
        })) }
      });
    }
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
        <input id="email" name="email" type="email" 
          autoComplete="email" className={applyStyles.formInput} align="right" required />
        <br/>
        <label htmlFor="address1" className={applyStyles.formLabel}>Street Address*</label>
        <input id="address1" name="address1" type="text" autoComplete="address1" className={applyStyles.formInput} required />
        <br/>
        <label htmlFor="address2" className={applyStyles.formLabel}>Address Line 2</label>
        <input id="address2" name="address2" type="text" autoComplete="address2" className={applyStyles.formInput} />
        <br/>
        <label htmlFor="address3" className={applyStyles.formLabel}>Address Line 3</label>
        <input id="address3" name="address3" type="text" autoComplete="address3" className={applyStyles.formInput} />
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
        <button className={applyStyles.formButton} type="submit">Launch your Application</button>
      </form>
    </Layout>
  </>
  )
}