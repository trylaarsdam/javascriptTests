import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import applyStyles from '../styles/apply.module.css'
import { useRouter } from 'next/router'

export default function NextSteps() {
  const router = useRouter()

  return (
    <>
    <Layout>
      <Head>
        <title>Launch Application</title>
      </Head>
      <h1>Student Application Submitted</h1>
      <p>Congratulations! Your application has been successfully submitted.
        <br/><br/>
        Your unique application ID is: <strong>{router.query.id}</strong>. You will need this ID to view your application status when you recieve a response.
        When your application has finished being reviewed and a decision has been made, you will receive an email telling you to visit this website 
        to view your decision.
        <br/><br/>
        Make sure to copy this ID and keep it safe. A confirmation email will be sent to you shortly.
      </p>
    </Layout>
  </>
  )
}