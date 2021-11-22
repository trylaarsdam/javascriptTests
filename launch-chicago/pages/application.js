import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import applyStyles from '../styles/apply.module.css'
import { useRouter } from 'next/router'

export default function NextSteps() {
  const router = useRouter()
  if(router.query.id && router.query.application) {
    console.log(atob(router.query.application))
    if(JSON.parse(atob(router.query.application)).status == 'Pending Review') {
      return (
        <>
          <Layout>
            <Head>
              <title>Launch Application</title>
            </Head>
            <h1>Student Application Status</h1>
            <p><strong>Current Application Status: {JSON.parse(atob(router.query.application)).status}</strong>
              <br/><br/>
              Here's what we have received from you. If any of the information here is not correct or has changed, please contact Kevin at <a href="mailto:kevin@launchchicago.io">kevin@launchchicago.io</a>.
              <br/><br/>
              <strong>Name:</strong> {JSON.parse(atob(router.query.application))["name"]}
              <br/><br/>
              <strong>Email:</strong> {JSON.parse(atob(router.query.application)).email}
              <br/><br/>
              <strong>Address:</strong> {JSON.parse(atob(router.query.application)).address1}
              <br/><br/>
              <strong>City:</strong> {JSON.parse(atob(router.query.application)).city}
              <br/><br/>
              <strong>State:</strong> {JSON.parse(atob(router.query.application)).state}
              <br/><br/>
              <strong>Zip Code:</strong> {JSON.parse(atob(router.query.application)).zipcode}
            </p>
            <br/><br/>
            <br/><br/>
            <p><i>Do not bookmark this page, it will not show up-to-date information unless loaded <Link href="/status">from here.</Link></i></p>
          </Layout>
        </>
      )
    }
    else if(JSON.parse(atob(router.query.application)).status == 'Accepted') {
      return (
        <>
          <Layout>
            <Head>
              <title>Launch Application</title>
            </Head>
            <h1>Student Application Status</h1>
            <p><strong>Current Application Status: <span className={applyStyles.pAccepted}>{JSON.parse(atob(router.query.application)).status}</span></strong>
              <br/><br/>
              Congratulations! Your application has been accepted. You're one step closer to joining Launch Chicago! Please respond below to either confirm or decline your acceptance. Doing this as soon as possible will help secure your spot.

              <br/><br/>
              Here's what we have received from you. If any of the information here is not correct or has changed, please contact Kevin at <a href="mailto:kevin@launchchicago.io">kevin@launchchicago.io</a>.
              <br/><br/>
              <strong>Name:</strong> {JSON.parse(atob(router.query.application))["name"]}
              <br/><br/>
              <strong>Email:</strong> {JSON.parse(atob(router.query.application)).email}
              <br/><br/>
              <strong>Address:</strong> {JSON.parse(atob(router.query.application)).address1}
              <br/><br/>
              <strong>City:</strong> {JSON.parse(atob(router.query.application)).city}
              <br/><br/>
              <strong>State:</strong> {JSON.parse(atob(router.query.application)).state}
              <br/><br/>
              <strong>Zip Code:</strong> {JSON.parse(atob(router.query.application)).zipcode}
            </p>
            <br/><br/>
            <br/><br/>
            <p><i>Do not bookmark this page, it will not show up-to-date information unless loaded <Link href="/status">from here.</Link></i></p>
          </Layout>
        </>
      )
    }
    else if(JSON.parse(atob(router.query.application)).status == 'Rejected') {
      return (
        <>
          <Layout>
            <Head>
              <title>Launch Application</title>
            </Head>
            <h1>Student Application Status</h1>
            <p><strong>Current Application Status: <span className={applyStyles.pRejected}>{JSON.parse(atob(router.query.application)).status}</span></strong>
              <br/><br/>
              We're sorry, but we are unable to offer you a spot at Launch Chicago at this time. This is either due to the class capacity being reached, or that the application review team did not think you would be a good fit for Launch at this time.
            </p>
          </Layout>
        </>
      )
    }
    else {
      return (
        <>
        <Layout>
          <Head>
            <title>Launch Application</title>
          </Head>
          <h1>Error Retrieving Application</h1>
          <p>The request for this application does not contain valid information. Please <Link href="/status"><a>try again</a></Link> or contact us if the problem persists.</p>
        </Layout>
      </>
      )
    }
  }
  else {
    return (
      <>
      <Layout>
        <Head>
          <title>Launch Application</title>
        </Head>
        <h1>Error Retrieving Application</h1>
        <p>The request for this page does not contain a valid application. Please <Link href="/status"><a>try again</a></Link> or contact us if the problem persists.</p>
      </Layout>
    </>
    )
  }
}