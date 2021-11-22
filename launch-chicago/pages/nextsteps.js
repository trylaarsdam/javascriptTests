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
        <h1>Student Application Submitted</h1>
        <p>Congratulations! Your application has been successfully submitted.
          <br/><br/>
          Your unique application ID is: <strong>{atob(router.query.id)}</strong>. You will need this ID to view your application status when you recieve a response.
          When your application has finished being reviewed and a decision has been made, you will receive an email telling you to visit this website 
          to view your decision.
          <br/><br/>
          Make sure to copy this ID and keep it safe. A confirmation email will be sent to you shortly.
          <br/><br/>
          Here's what we have received from you. If any of the information here is not correct or has changed, please contact Kevin at <a href="mailto:kevin@launchchicago.io">kevin@launchchicago.io</a>.
          <br/><br/>
          <strong>Name:</strong> {JSON.parse(atob(router.query.application)).name}
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
        <h1>Error Submitting Application</h1>
        <p>Your application was not submitted correctly. Please <Link href="/apply"><a>try again</a></Link> or contact us if the problem persists.</p>
      </Layout>
    </>
    )
  }
  
}