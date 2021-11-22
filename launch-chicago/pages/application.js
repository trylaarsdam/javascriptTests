import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import applyStyles from '../styles/apply.module.css'
import { useRouter } from 'next/router'

export default function NextSteps() {
  const router = useRouter()
  if(router.query.id && router.query.application) {
    return (
      <>
        <Layout>
          <Head>
            <title>Launch Application</title>
          </Head>
          <h1>Student Application Status</h1>
          <p>Current Application Status: {JSON.parse(atob(router.query.application)).status}
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
        <p>The request for this page does not contain a valid applicationn. Please <Link href="/status"><a>try again</a></Link> or contact us if the problem persists.</p>
      </Layout>
    </>
    )
  }
  
}