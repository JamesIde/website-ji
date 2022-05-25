import React from "react"
import Helmet from "../components/navigation&seo/Helmet"
import Layout from "../components/navigation&seo/Layout"
import Table from "../components/misc/Table"
function About() {
  return (
    <Layout>
      <div>
        <Helmet title="About" />
      </div>
      <div className="w-4/5 mx-auto mt-5">
        <div className="grid lg:grid-cols-2 h-screen">
          <div className="grid-span-1">
            <div className="ml-auto lg:pl-4 lg:w-4/5 ">
              <p className="font-playfair text-3xl">About</p>
              <p className="mt-5">
                My name is <i className="font-playfair">James</i> and I'm a
                developer from Adelaide, SA.
              </p>
              <p className="mt-2">
                I studied a Bachelor of Information Technology, Networks and
                Cybersecurity Systems at Flinders University.
              </p>
              <p className="mt-2">
                I am an incoming consultant for a tech company based in
                Adelaide.
              </p>
              <p className="mt-2">
                In my free time, I am a keen hiker and photographer.
              </p>
              <p className="mt-2">
                This website is where I share photographs, trips, projects and
                anything I'm interested in.
              </p>
            </div>
          </div>
          <div className="grid-span-1 mb-10">
            <div>
              <h1 className="font-playfair text-3xl pl-0 inline-block">
                Some projects
              </h1>
            </div>
            <div className="mb-[50px]">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
