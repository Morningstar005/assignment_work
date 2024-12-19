import React from 'react'
import AuthWrapperOne from '../../components/auth-wraper'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <AuthWrapperOne
      title={
        <>
          Welcome back! Please{' '}
          <span className="relative inline-block">
            Sign in to
            {/* <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-24 text-blue md:w-28 xl:-bottom-1.5 xl:w-36" /> */}
          </span>{' '}
          continue.
        </>
      }
      description=""
      // bannerTitle="Revolutionize Hiring with AI Resume Management."
      // bannerDescription="Streamline, Organize, and Collaborate with XResume."
      // isSocialLoginActive={true}
      pageImage={
        <div className="relative mx-auto w-full max-w-[700px] h-auto">
        <img
          src="https://img.freepik.com/free-photo/abstract-dark-blue-futuristic-digital-grid-background_53876-104051.jpg?t=st=1734628720~exp=1734632320~hmac=d366b54181463caf4710babbf3f5162d576a865840aa514d673e682663867fb0&w=1380"
          alt="Sign up"
          priority
          layout="responsive"
          width={700} 
          height={500} 
          sizes="(max-width: 768px) 400px, (max-width: 1024px) 600px, 700px"
          className="object-cover"
        />
      </div>
      
      
      }
    >
      <LoginForm />
    </AuthWrapperOne>
  )
}

export default Login