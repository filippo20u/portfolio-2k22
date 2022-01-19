// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'



// Step 2: Define your component
const IndexPage = () => {
  return (
    <main >
      <div className='divello'>
      <title>Filippo 20u Portfolio</title>

      <Layout pageTitle="home">
      <p>Bio</p>
      <p>Projects</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/beutehome.jpeg"/>
          
          
          <h2> little bit of my past</h2>
          <p>
          Ciao! 
          
          My name is Filippo Venturini. 

          I am currently a student at LEARN Academy, a full stack development bootcamp based in San Diego where I am developing a strong foundation to become a software engineer.         
          I was born and raised in Italy and have a strong passion for science and art.
          
          I lived in Rome and Venice for college and I landed in California in 2015 thanks to my  grad school project and a job looking for                     
          <a href="http://www.natgeotv.com/ca/finding-the-lost-da-vinci ">Leonardo Da Vinci </a>
         
          I conducted research with structural and computer science engineers who developed software to improve the application of science to culture heritage. The results of this research were presented at the 
          <a href="https://www.youtube.com/watch?v=jT6BqMWPOqE&list=ULMNMoi5Af1SY&index=1451">TED global in Edinburgh</a>
         
          Additionally, I was involved in several research projects developing and improving analytical instrumentation and seeking innovative ways to solve art related mysteries. All this work led to a National Geographic documentary and several books to establish methodology and disseminate findings.
          
          With a desire to further my education and skills, I moved to the US to pursue graduate studies in Chemistry. My research in graduate school included working on a Department of Defense (DoD) funded study to use lasers in detecting explosives. I also worked on a project to improve instrumentation using emerging technology such as 3D printing.
          
          After earning my MS in Chemistry, I began working in the field of biotech using robots to automate experiments, at which time I became more curious about coding. I decided to leave the biotech field and pursue a career in the tech industry because I like to be challenged by solving new problems and to apply my critical thinking skills. I also like the idea that this field evolves rapidly, and you are continuously learning, growing, and you can reinvent yourself.
        
          </p>

        
        <div>
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/beutehome.jpeg"/>

        <h2>Treasure Hunt updated</h2>
        <p>My first JavaScript/HTML project, a classic to remember the good old days</p>
        <p><a class="btn btn-secondary" href="#" role="button">GitHub Repo</a></p>
        </div>

          
          
     
    

      </Layout>
    </div>
    </main>
  )
}

// Step 3: Export your component
export default IndexPage


