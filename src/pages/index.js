import React, {useEffect, useState} from "react"

import { useForm, usePlugin  } from 'tinacms'

const Index = () => {

  const [ pageData, setPageData ] = useState({
    firstName: "John",
    lastName: "Smith"
  })
    
  const formConfig = {
    id: `demo`,
    label: 'demo',
    initialValues: pageData,
    onSubmit: (values) => {
        console.dir(values)
    },
    fields: [                    
      {
        name: 'firstName',  
        label: 'First name',             
        component: 'text',          
      },
      {
        name: 'lastName',
        label: 'Last name',
        component: 'textarea',      
      },
    ]
  }

  const [modifiedValues, form] = useForm(formConfig, { values : { ...pageData } })

  usePlugin(form)
  
  useEffect(() => {
    setInterval(() => {
      setPageData({
        firstName: "Scobby",
        lastName: "Doo"
      })
    }, 5000);
  }, [])
  
  return (
      <>
        <h3>First Name</h3>
        <div>{modifiedValues.firstName}</div>

        <h3>Last Name</h3>
        <div>{modifiedValues.lastName}</div>
      </>
  )
}

export default Index